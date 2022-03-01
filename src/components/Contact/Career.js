import careerpic from "../Pictures/contact/career-pic.jpg";
import ReusableButton from "../ReusableComponents/ReusableButton";
import '../../stylesheets/Career.css';


const Career = () => {
  return (
    <section id="discoverCareer">
      <img id="discover-career-img" src={careerpic} />
      <div id="discover-career-text">
        <h1 id ="career-title">Open positions</h1>
        <p id ="careerText">
        Our company is growing quickly and we're looking for
         some new faces to join our team. We offer competitive
          benefits and a great work environment. Please check back 
          often to see what jobs are available in your community
           or click on the link below to submit a résumé.
        </p>
        <ReusableButton title="Find your new job"></ReusableButton>
      </div>
    </section>
  );
};

export default Career;