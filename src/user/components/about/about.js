import Contact from "../contact/Contact";

const About = () => {
  let contacts$ = [
    { id: 1, phone: "+255625460123", area: "Home" },
    { id: 2, phone: "+255625460124", area: "Error" },
    { id: 3, phone: "+255625460125", area: "Contact" },
    { id: 4, phone: "+255625460126", area: "About" },
    { id: 5, phone: "+255625460127", area: "News" },
  ];
  return (
    <div>
      <h2>About page</h2>
      <Contact contacts$={contacts$}></Contact>
    </div>
  );
};

export default About;
