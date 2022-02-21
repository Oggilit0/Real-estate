import "../stylesheets/Contact.css"

const Contact = () => {
  return (
    <div className= "contact">
      <hr className = "line"></hr>
    <h2 className= "title">Contact Us</h2>
      <hr className = "line"></hr>

      <div className ="contactForm">
      <h2>Contact Form</h2>
      <form className ="form">
        <div className= "form-controll">
        <input type ="text" id ="firstname" placeholder ="Name"/>
        </div>
        <div className= "form-controll">
        <input type="text" id ="email" placeholder="Email"/>
        </div>
        <div className= "form-controll">
        <input type="text" id ="message" placeholder="Message"/>
        </div>
      </form>
    </div>
</div>

  );
  };

export default Contact;
