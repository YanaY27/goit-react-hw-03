import Contact from '../Contact/Contact'


const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul >
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
    </div>
  )
}

export default ContactList
