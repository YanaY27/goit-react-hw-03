import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import s from './ContactForm.module.css'

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-z]+$/, "Name can only contain letters")
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Please write a name"),
  number: Yup.string()
    .matches(/^[0-9]+$/, "Number can only contain numbers")
    .min(3, "Too short")
    .max(20, "Too long")
    .required("Please write a number"),
});

const ContactForm = ({ addContact }) => {
  const initialValue = { name: "", number: "" };
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    addContact(values);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <div >
            <label htmlFor={nameId}  className={s.name}>
              Name</label>
              <Field type="text" name="name" id={nameId}/>
              <ErrorMessage name="name" component="span" className={s.err} />
          </div>
          
          <div>
            <label htmlFor={numberId}  className={s.number}>
              Number  </label>
              <Field type="tel" name="number" id={numberId}></Field>
              <ErrorMessage name="number" component="span" className={s.err}/>
          </div>
        
          <button type="submit" className={s.btn}>Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
