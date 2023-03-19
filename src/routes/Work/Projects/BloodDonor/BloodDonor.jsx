import Navbar from "../../../../components/Navbar/Navbar";
import cover from "../../../../assets/Blood_donor_167.png";
import img1 from "../../../../assets/Blood_donor_2.png"
import img2 from "../../../../assets/Blood_donor_3.png"
import img3 from "../../../../assets/Blood_donor_4.png"
import img4 from "../../../../assets/Blood_donor_screenflow.png"
import img5 from "../../../../assets/Blood_donor_screenflow2.png"
import styles from "./blooddonor.module.css";
const BloodDonor = () => {
    return <>
        <Navbar/>
        <img src={cover} alt="test" className={styles.cover}></img>
        <div className={styles["content_container"]}>
        <div className={styles.row3}>
            <div>
                <h5>DATE</h5>
                <p>September/2022 - November/2022</p>
            </div>
            <div>
                <h5>ROLE</h5>
                <p>Front-end developer & UI/UX designer</p>
            </div>
            <div>
                <h5>Target Audience</h5>
                <p>Everyone 18 - 60 years old</p>
            </div>
        </div>
        <img src={img1} alt="1"/>

        <div className={styles.row1}>
            <h4>The Goal</h4>
            <p>Blood Donor System permits donors to register a blood donation schedule with a specific date and time through the Internet. And the organizations can connect faster to donors with the appropriate blood type in emergency cases. </p>
        </div> 

        <div className={styles.row1}>
            <h4>The Problems</h4>
            <p>Blood Donor System permits donors to register a blood donation schedule with a specific date and time through the Internet. And the organizations can connect faster to donors with the appropriate blood type in emergency cases. </p>
        </div> 

        <div className={styles.row1}>
            <h4>Screenflow</h4>
            <img src={img4} alt="4"/>
            <img src={img5} alt="5"/>
        </div>


        <div className={styles.row1}>
            <h4>Solution 1</h4>
            <div className={styles["row2_4_6"]}>
                <p>Test</p>
                <img src={img2} alt="2"/>
            </div>
        </div>

        <div className={styles.row1}>
            <h4>Solution 2</h4>
            <div className={styles["row2_6_4"]}>
                <img src={img3} alt="3"/>
                <p>Test</p>
            </div>
        </div>

        </div>
    </>
}
export default BloodDonor;