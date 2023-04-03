import "./about.css";
import Resume from './resume.pdf';
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        {/* <div className="a-card bg"></div> */}
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title"><b>About Me</b></h1>
        <p className="a-sub">
          <p className="a-desc">
            To obtain a position as a MERN Full Stack Developer where I can utilize my skills and experience to develop high-quality software applications and contribute to the company.
          </p><br />
          <h2>Education</h2><br />
          <h6>GUVI GEEK NETWORK PRIVATE LIMITED (2023)
            FullStack Developer... </h6><br />
          <h6>Govt Arts College for Men(Autonomous),Nandhanam, Chennai..  (2019-2022).</h6><br />
        </p>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
      </div>
    </div>
  );
};

export default About;
