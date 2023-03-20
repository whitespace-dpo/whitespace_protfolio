import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./about.module.css";
import profile_picture from "../../assets/profile_picture.png";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
      <div className={styles.cover}>
        <img src={profile_picture} alt="" style={{ width: "80%" }} />
        <div>
          <h1>Khanh Pham</h1>
          <p>
          "A journey of a thousand miles begins with a single step" 
          </p>
        </div>
      </div>
      <div className={styles["resume"]}>
        <div>
          <h5>Education</h5>
          <p>Hoang Le Kha High School for the Gifted</p>
          <p>FPT University (HCM Campus)</p>
        </div>
        <div>
          <h5>Design skills</h5>
          <p>Typography</p>
          <p>Visual Design</p>
          <p>Responsive Design</p>
          <p>Wireframing</p>
        </div>
        <div>
          <h5>Technical skills</h5>
          <p>Figma</p>
          <p>Adobe XD</p>
          <p>Adobe Photoshop</p>
          <p>Adobe Illustrator</p>
          <p>CSS/HTML</p>
          <p>JavaScript</p>
          <p>Git</p>
          <p>Jira</p>
          <p>C/C++</p>
        </div>
        
      </div>
      </div>
      <Footer />
    </div>
  );
};
export default About;
