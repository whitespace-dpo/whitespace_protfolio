import Navbar from "../../../../components/Navbar/Navbar";
import cover from "../../../../assets/Blood_donor_167.png";
import img1 from "../../../../assets/blood_donor_cover.png"
import problem from "../../../../assets/blood_donor_problem.png";
import solution from "../../../../assets/blood_donor_solution.png";
import goal1 from "../../../../assets/blood_donor_goal1.svg";
import goal2 from "../../../../assets/blood_donor_goal1.svg";
import goal3 from "../../../../assets/blood_donor_goal1.svg";
import logo1 from "../../../../assets/blood_donor_logo1.png";
import logo2 from "../../../../assets/blood_donor_logo2.png";
import logo3 from "../../../../assets/blood_donor_logo3.png";
import screenflow1 from "../../../../assets/blood_donor_screenflow1.png";
import screenflow from "../../../../assets/blood_donor_screenflow.png";
import homepage from "../../../../assets/blood_donor_2_1.png";
import campain1 from "../../../../assets/blood_donor_3_1.png";
import campain2 from "../../../../assets/blood_donor_3_2.png";
import achievement1 from "../../../../assets/blood_donor_4_1.png";
import achievement2 from "../../../../assets/blood_donor_4_2.png";
import news1 from "../../../../assets/blood_donor_5_1.png";
import news2 from "../../../../assets/blood_donor_5_2.png";
import d_account1 from "../../../../assets/blood_donor_6_1.png";
import d_account2 from "../../../../assets/blood_donor_6_2.png";
import d_account3 from "../../../../assets/blood_donor_6_3.png";
import d_account4 from "../../../../assets/blood_donor_6_4.png";
import d_account5 from "../../../../assets/blood_donor_6_5.png";
import homepage1 from "../../../../assets/blood_donor_7_1.png";
import homepage2 from "../../../../assets/blood_donor_7_2.png";
import campaign3 from "../../../../assets/blood_donor_8_1.png";
import campaign4 from "../../../../assets/blood_donor_8_2.png";
import campaign5 from "../../../../assets/blood_donor_8_3.png";
import campaign6 from "../../../../assets/blood_donor_8_4.png";
import campaign7 from "../../../../assets/blood_donor_8_5.png";
import campaign8 from "../../../../assets/blood_donor_8_6.png";

import styles from "./blooddonor.module.css";
const BloodDonor = () => {
  return (
    <>
      <Navbar />
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

        <div className={styles.row1}>
          <h4>User Problems</h4>
          <div className={styles.row2_5_5}>
            <img
              src={problem}
              alt="problem"
              style={{ width: "60%", marginLeft: "20%" }}
            />
            <ul>
              <li>
                I found that during the survey, most of the owners of small
                organizations such as coffee shops, second-hand clothing stores,
                etc. think that collecting, rotating shifts, scheduling weekly
                employees is spend alot of time.
              </li>
              <li>
                Staff of small organizations also find it difficult to collect
                information on all employees to organize. They may forget to
                fill it out causing scheduling delays affecting everyone.
              </li>
              <li>
                If they are busy with unexpected work, staff often have
                difficulty asking to change shifts. This usually takes a lot of
                time and has to go through the owner.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.row1}>
          <h4>User Solutions</h4>
          <div className={styles.row2_5_5}>
           
            <ul>
              <li>
                I introduced small organization owners to an app that can
                replace them to remind and collect employee information,
                automatically creating a complete work schedule.
              </li>
              <li>
                The owner can take attendance of staff right on the app and
                receive the staff's working hours statistics file for salary
                payment convenience.
              </li>
              <li>
                Staff can also request to ask someone to change shifts easily
                right on the app.
              </li>
            </ul>
            <img
              src={solution}
              alt="solution"
              style={{ width: "60%", marginLeft: "20%" }}
            />
          </div>
        </div>

        <div className={styles.row1}>
          <h4>The goal</h4>
          <p style={{ padding: "0 10%" }}>
            Create an app that can have template forms for the owner. Collecting
            and reminding staff to fill out the data. It also can automatically
            create a work schedule for them. Help them save a lot of time to do
            other work.
          </p>
          <div className={styles.row3}>
            <div>
              <img src={goal1} alt="goal1" />
              <h5>Save time</h5>
              <p>
                Support the employer to collect and arrange work schedules for
                staff.
              </p>
            </div>
            <div>
              <img src={goal2} alt="goal1" />
              <h5>Flexible</h5>
              <p>
                Support staff to change shifts quickly through notification and
                chat.
              </p>
            </div>
            <div>
              <img src={goal3} alt="goal1" />
              <h5>Feature integration</h5>
              <p>
                Integrate many other support features such as attendance,
                notifications, group chat.
              </p>
            </div>
          </div>

          <div className={styles.row1}>
          <h4>Competitive audit</h4>
          <div className={styles.row3}>
            <div>
              <h5>Giọt máu vàng</h5>
              <img src={logo1} alt="logo1" />
            </div>
            <div>
              <h5>Hiến máu nhân đạo</h5>
              <img src={logo2} alt="logo2" />
            </div>
            <div>
              <h5>Viện huyết học</h5>
              <img src={logo3} alt="logo3" />
            </div>
          </div>
        </div>

        <div className={styles.row1}>
          <h4>Screen Flow </h4>
          <h5>Role: user</h5>
          <img src={screenflow1} alt="screenflow1"/>
          <h5>Role: admin</h5>
          <img src={screenflow} alt="screenflow"/>
        </div>

        <div className={styles.row1}>
          <h4>Homepage</h4>
          <img src={homepage} alt="screenflow1" style={{width: "80%", marginLeft: "10%"}}/>
        </div>

        <div className={styles.row1}>
          <h4>Blood donation campaign</h4>
          <div className={styles.row2_5_5}>
            <img src={campain1} alt="campain1"/>
            <img src={campain2} alt="campain2"/>
          </div>
        </div>

        <div className={styles.row1}>
          <h4>Blood donation campaign</h4>
          <div className={styles.row2_5_5}>
            <img src={achievement1} alt="achievement1"/>
            <img src={achievement2} alt="achievement2"/>
          </div>
        </div>

        <div className={styles.row1}>
          <h4>News</h4>
          <div className={styles.row2_5_5}>
            <img src={news1} alt="news1"/>
            <img src={news2} alt="news2"/>
          </div>
        </div>

        <div className={styles.row1}>
          <h4>Donor account</h4>
          <div className={styles.row2_5_5}>
            <div>
              <img src={d_account1} alt="d_account1"/>
              <img src={d_account2} alt="d_account2"/>
              <img src={d_account3} alt="d_account3"/>
            </div>
            <div>
              <img src={d_account4} alt="d_account4"/>
              <img src={d_account5} alt="d_account5"/>
            </div>
          </div>
        </div>

        <div className={styles.row1}>
          <h4>Homepage - Hospital role</h4>
          <div className={styles.row2_5_5}>
            <img src={homepage1} alt="homepage1"/>
            <img src={homepage2} alt="homepage2"/>
          </div>
        </div>

        <div className={styles.row1}>
          <h4>Campaign - Hospital role</h4>
          <div className={styles.row2_5_5}>
            <div>
              <img src={campaign3} alt="campaign3"/>
              <img src={campaign4} alt="campaign4"/>
              <img src={campaign5} alt="campaign5"/>
            </div>
            <div>
              <img src={campaign6} alt="campaign6"/>
              <img src={campaign7} alt="campaign7"/>
              <img src={campaign8} alt="campaign8"/>
            </div>
          </div>
        </div>

        </div>
      </div>
    </>
  );
};
export default BloodDonor;
