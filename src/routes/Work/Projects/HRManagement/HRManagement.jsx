import Footer from "../../../../components/Footer/Footer";
import Navbar from "../../../../components/Navbar/Navbar";
import styles from "./hrmanagement.module.css";
import cover from "../../../../assets/HR_management_167.png";
import img1 from "../../../../assets/hr_management_2.png";
import primary from "../../../../assets/hr_management_primarycolor.png";
import shadow from "../../../../assets/hr_management_shadow.png";
import typo from "../../../../assets/blood_donor_typo.png";
import antd from "../../../../assets/antd.svg";
import solution from "../../../../assets/hr_management_solution.svg";
import problem from "../../../../assets/hr_management_problem.svg";
import hifiui_1_1 from "../../../../assets/hr_management_1_1.png";
import hifiui_1_2 from "../../../../assets/hr_management_1_2.png";
import hifiui_1_3 from "../../../../assets/hr_management_1_3.png";
import hifiui_2_1 from "../../../../assets/hr_management_2_1.png";
import hifiui_3_1 from "../../../../assets/hr_management_3_1.png";
import hifiui_3_2 from "../../../../assets/hr_management_3_2.png";
import hifiui_4_1 from "../../../../assets/hr_management_4_1.png";
import hifiui_4_2 from "../../../../assets/hr_management_4_2.png";
import hifiui_4_3 from "../../../../assets/hr_management_4_3.png";
import hifiui_4_4 from "../../../../assets/hr_management_4_4.png";
const HRManagement = () => {
  return (
    <div>
      <Navbar />
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
            HR management is a website used to internally manage members of
            F-code - Academic Club. Synchronize all the projects included in the
            club such as: attendance, blogging, activity announcement and web
            product showcase of members.
          </p>
        </div>

        <img src={img1} alt="img1" />

        <div className={styles.row1}>
          <h4>User Problems</h4>

          <div className={styles["row2_4_6"]}>
            <img src={problem} alt="problem" style={{ width: "80%" }} />
            <ul>
              <li>
                The club's products are not uniform on the same platform, making
                it difficult to manage and miss messages from university
                students.
              </li>
              <li>
                Want a website where club members can showcase their products.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.row1}>
          <h4>User Solutions</h4>
          <p>That's why Human resource management was born ;)</p>
          <img src={solution} alt="solution" />
        </div>

        <div className={styles.row1}>
          <h4>Design system</h4>
          <img src={primary} alt="primary" />
          <img src={shadow} alt="shadow" />
          <img src={typo} alt="typo" />

          <img src={antd} alt="antd" style={{ width: "120px" }} />
          <p>Using Antdesign's component library</p>
        </div>

        <div className={styles.row1}>
          <h4>Lading page</h4>
          <div className={styles.row2_5_5}>
            <img src={hifiui_1_1} alt="hifiui_1_1" className={styles.screen} />
            <div>
              <img
                src={hifiui_1_2}
                alt="hifiui_1_1"
                className={styles.screen}
              />
              <img
                src={hifiui_1_3}
                alt="hifiui_1_1"
                className={styles.screen}
              />
            </div>
          </div>
        </div>

        <div className={styles.row1}>
          <h4>Admin homepage</h4>
          <img src={hifiui_2_1} alt="hifiui_2_1" className={styles.screen} />
        </div>

        <div className={styles.row1}>
          <h4>Account management</h4>
          <div className={styles.row2_5_5}>
            <img src={hifiui_3_1} alt="hifiui_3_1" className={styles.screen} />
            <img src={hifiui_3_2} alt="hifiui_3_2" className={styles.screen} />
          </div>
        </div>

        <div className={styles.row1}>
          <h4>Blog</h4>
          <div className={styles.row2_5_5}>
            <div>
              <img
                src={hifiui_4_1}
                alt="hifiui_3_1"
                className={styles.screen}
              />
              <img
                src={hifiui_4_2}
                alt="hifiui_3_2"
                className={styles.screen}
              />
            </div>
            <div>
              <img
                src={hifiui_4_3}
                alt="hifiui_3_2"
                className={styles.screen}
              />
              <img
                src={hifiui_4_4}
                alt="hifiui_1_1"
                className={styles.screen}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default HRManagement;
