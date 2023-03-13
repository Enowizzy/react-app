const Contact = ({contacts$}) => {
  return (
    <div>
      <h2>Contact page</h2>
      {
        contacts$.map((contact$) => (
          <div key={contact$.id}>
            <h3>ID is: {contact$.id}</h3>
            <h3>Phone is: {contact$.phone}</h3>
            <h3>Area: {contact$.area}</h3>
          </div>
        ))
      }
    </div>
  );
};

export default Contact;
