import Footer from "../../../../components/Footer/Footer";
import Navbar from "../../../../components/Navbar/Navbar";
import styles from "./hrmanagement.module.css"
import cover from "../../../../assets/HR_management_167.png"
import img1 from "../../../../assets/hr_management_2.png"
const HRManagement = () => {
    return <div>
        <Navbar/>
        <img src={cover} alt="test" className={styles.cover}></img>
      <div className={styles["content_container"]}>
        <div className={styles.row3}>
          <div>
            <h5>DATE</h5>
            <p>September/2022 - January/2023</p>
          </div>
          <div>
            <h5>ROLE</h5>
            <p>Lead UI/UX designer team</p>
          </div>
          <div>
            <h5>Target Audience</h5>
            <p>Member of F-Code club under FPT University Ho Chi Minh campus</p>
          </div>
        </div>

        <div className={styles.row1}>
          <h4>Project overview</h4>
          <p style={{ padding: "0 10%" }}>
            Blood Donor is a website that allows donors to sign up for a blood
            donation schedule with a specific date and time via the Internet.
            Organizations can connect more quickly with matching blood type
            donors in emergencies.
          </p>
        </div>

        <img src={img1} alt="img1" />

        </div>
        <Footer/>
    </div>
}
export default HRManagement;