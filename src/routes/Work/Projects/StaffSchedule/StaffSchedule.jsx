import Navbar from "../../../../components/Navbar/Navbar";
import cover from "../../../../assets/staff_schedule_167.png";
import persona1 from "../../../../assets/staff_schedule_2.PNG";
import persona2 from "../../../../assets/staff_schedule_3.PNG";
import img1 from "../../../../assets/staff_schedule_4.png";
import logo1 from "../../../../assets/agendrix_logo.png";
import logo2 from "../../../../assets/jotform_logo.png";
import logo3 from "../../../../assets/calendly_logo.png";
import goal1 from "../../../../assets/staff_schedule_goal1.svg";
import goal2 from "../../../../assets/staff_schedule_goal2.svg";
import goal3 from "../../../../assets/staff_schedule_goal3.svg";
import userflow from "../../../../assets/staff_schedule_userflow.png";
import hifiwi_1_1 from "../../../../assets/staff_schedule_1_1.png";
import hifiwi_1_2 from "../../../../assets/staff_schedule_1_2.png";
import hifiwi_1_3 from "../../../../assets/staff_schedule_1_3.png";

import hifiwi_2_1 from "../../../../assets/staff_schedule_2_1.png";
import hifiwi_2_2 from "../../../../assets/staff_schedule_2_2.png";
import hifiwi_2_3 from "../../../../assets/staff_schedule_2_3.png";

import hifiwi_3_1 from "../../../../assets/staff_schedule_3_1.png";
import hifiwi_3_2 from "../../../../assets/staff_schedule_3_2.png";
import hifiwi_3_3 from "../../../../assets/staff_schedule_3_3.png";

import hifiwi_4_1 from "../../../../assets/staff_schedule_4_1.png";
import hifiwi_4_2 from "../../../../assets/staff_schedule_4_2.png";
import hifiwi_4_3 from "../../../../assets/staff_schedule_4_3.png";

import hifiwi_5_1 from "../../../../assets/staff_schedule_5_1.png";
import hifiwi_5_2 from "../../../../assets/staff_schedule_5_2.png";
import hifiwi_5_3 from "../../../../assets/staff_schedule_5_2.png";

import styles from "./staffschedule.module.css";
import WireframeCared from "../../../../components/Hi-fi Wireframe Card/WireframeCard";
import WireframeCard from "../../../../components/Hi-fi Wireframe Card/WireframeCard";
const StaffSchedule = () => {
    const hifipro = [[hifiwi_1_1, hifiwi_1_2, hifiwi_1_3],
    [hifiwi_2_1, hifiwi_2_2, hifiwi_2_3],
    [hifiwi_3_1, hifiwi_3_2, hifiwi_3_3],
    [hifiwi_4_1, hifiwi_4_2, hifiwi_4_3],
    [hifiwi_5_1, hifiwi_5_2, hifiwi_5_3]]
  return (
    <>
      <Navbar />
      <img src={cover} alt="test" className={styles.cover}></img>
      <div className={styles["content_container"]}>
        <div className={styles.row3}>
          <div>
            <h5>DATE</h5>
            <p>February/2023</p>
          </div>
          <div>
            <h5>ROLE</h5>
            <p>UI/UX designer</p>
          </div>
          <div>
            <h5>Target Audience</h5>
            <p>For everyone who owns and works for small organizations</p>
          </div>
        </div>
        <div className={styles.row1}>
          <h4>Project overview</h4>
          <p style={{ padding: "0 10%" }}>
            Staff Scheduling is an app that builds for small organizations that
            saves time for the organization owners and their staff. Solve the
            problem of struggling with getting and organizing information on all
            the free days the staff might work. On the other hand, the
            application also supports staff attendance right on the app.
          </p>
        </div>
        <img src={img1} alt="img1" />

        <div className={styles.row1}>
          <h4>User Problems</h4>
          <ul>
            <li>
              I found that during the survey, most of the owners of small
              organizations such as coffee shops, second-hand clothing stores,
              etc. think that collecting, rotating shifts, scheduling weekly
              employees is spend alot of time.
            </li>
            <li>
              Staff of small organizations also find it difficult to collect
              information on all employees to organize. They may forget to fill
              it out causing scheduling delays affecting everyone.
            </li>
            <li>
              If they are busy with unexpected work, staff often have difficulty
              asking to change shifts. This usually takes a lot of time and has
              to go through the owner.
            </li>
          </ul>
        </div>

        <div className={styles.row1}>
          <h4>User Solutions</h4>
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
        </div>

        <div className={styles.row2_4_6}>
          <div>
            <h4>Persona 1</h4>
            <p>
              Problem statement: Binh is a part-time student who needs the
              earliest scheduled information because he doesn't want to waste
              time, not knowing what to do next week.
            </p>
          </div>
          <img src={persona1} alt="persona1" />
        </div>

        <div className={styles.row2_4_6}>
          <div>
            <h4>Persona 2</h4>
            <p>
              Problem statement: Thao is the owner of a coffee shop who needs an
              app to collect and organize the calendar automatically because she
              is too busy with other things
            </p>
          </div>
          <img src={persona2} alt="persona2" />
        </div>

        <div className={styles.row1}>
          <h4>Empathy Mapping</h4>
        </div>

        <div className={styles.row1}>
          <h4>User Journey Mapping</h4>
        </div>

        <div className={styles.row1}>
          <h4>User Stories</h4>
        </div>

        <div className={styles.row1}>
          <h4>Competitive audit</h4>
          <div className={styles.row3}>
            <div>
              <h5>Agendrix</h5>
              <img src={logo1} alt="logo1" />
            </div>
            <div>
              <h5>Jotform</h5>
              <img src={logo2} alt="logo2" />
            </div>
            <div>
              <h5>Calendly</h5>
              <img src={logo3} alt="logo3" />
            </div>
          </div>
        </div>

        <div className={styles.row1}>
          <h4>User Flow</h4>
            <img src={userflow} alt="userflow"/>
        </div>

        <div className={styles.row1}>
          <h4>Site Map</h4>
        </div>

        <div className={styles.row1}>
          <h4>Hi-Fi Wireframing</h4>
          <div className={styles.row5}>
            <WireframeCard props={hifipro[0]}/>
            <WireframeCard props={hifipro[1]}/>
            <WireframeCard props={hifipro[2]}/>
            <WireframeCard props={hifipro[3]}/>
            <WireframeCard props={hifipro[4]}/>
          </div>
        </div>

        <div className={styles.row1}>
          <h4>Design system</h4>
        </div>

        <div className={styles.row1}>
          <h4>Hi-Fi UI Design</h4>
        </div>

        <div className={styles.row1}>
          <h4>User Feedbacks</h4>
        </div>
        <img src={img1} alt="img1" />
      </div>
    </>
  );
};
export default StaffSchedule;
