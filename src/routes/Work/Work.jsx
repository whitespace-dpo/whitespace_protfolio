import Navbar from "../../components/Navbar/Navbar";
import styles from "./work.module.css";
import project_1 from "../../assets/Blood_donor_1.png";
import project_2 from "../../assets/HR_management_1.png";
import project_3 from "../../assets/Staff_schedule_1.png";
import project_4 from "../../assets/Growth_me_1.png";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
const Project = [
  {
    projectName: "Blood Donor",
    time: "September/2022 - November/2022",
    img: project_1,
    link: "/blood_donor"
  },
  {
    projectName: "Human resource management",
    time: "September/2022 - January/2023",
    img: project_2,
    link: "hr_management"
  },
  {
    projectName: "Staff Schedule",
    time: "February/2023",
    img: project_3,
    link: "staff_schedule"
  },
  {
    projectName: "Growth Me",
    time: "March/2023 - Now",
    img: project_4,
    link: "growth_me"
  },
];
const Work = () => {
  return (
    <>
      <Navbar />
      <div className={styles["project_container"]}>
        <Card prop={Project[0]} />
        <Card prop={Project[1]} />
        <Card prop={Project[2]} />
        <Card prop={Project[3]} />
      </div>
      <Footer />
    </>
  );
};
export default Work;
