import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import s from './Contact.module.css'

export const Contact = ({ name, number, id, deleteContact }) => {
  
  return (
    <li className={s.contact}>
      <div>
        <p className={s.name}>
          <IoMdPerson />
          {name}
        </p>
        <p className={s.number}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button className={s.btn} onClick={()=> deleteContact(id)}>Delete</button>
    </li>
  );
};

export default Contact;
