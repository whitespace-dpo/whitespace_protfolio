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
import problem from "../../../../assets/staff_schedule_problem.svg";
import solution from "../../../../assets/staff_schedule_solution.svg";
import userflow from "../../../../assets/staff_schedule_userflow.png";
import sitemap from "../../../../assets/staff_schedule_sitemap.png";
import mockup_1 from "../../../../assets/staff_schedule_mockup_1.png";

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
import hifiwi_5_3 from "../../../../assets/staff_schedule_5_3.png";

import secondarycolor from "../../../../assets/staff_schedule_secondarycolor.png";
import primarycolor from "../../../../assets/staff_schedule_primarycolor.png";
import shadow from "../../../../assets/staff_schedule_shadow.png";
import component from "../../../../assets/staff_schedule_component.png";

import hifiui_1_1 from "../../../../assets/hifiui_1_1.png";
import hifiui_1_2 from "../../../../assets/hifiui_1_2.png";
import hifiui_1_3 from "../../../../assets/hifiui_1_3.png";
import hifiui_1_4 from "../../../../assets/hifiui_1_4.png";

import hifiui_2_1 from "../../../../assets/hifiui_2_1.png";
import hifiui_2_2 from "../../../../assets/hifiui_2_2.png";
import hifiui_2_3 from "../../../../assets/hifiui_2_3.png";
import hifiui_2_4 from "../../../../assets/hifiui_2_4.png";

import hifiui_3_1 from "../../../../assets/hifiui_3_1.png";
import hifiui_3_2 from "../../../../assets/hifiui_3_2.png";
import hifiui_3_3 from "../../../../assets/hifiui_3_3.png";
import hifiui_3_4 from "../../../../assets/hifiui_3_4.png";

import hifiui_4_1 from "../../../../assets/hifiui_4_1.png";
import hifiui_4_2 from "../../../../assets/hifiui_4_2.png";
import hifiui_4_3 from "../../../../assets/hifiui_4_3.png";

import hifiui_5_1 from "../../../../assets/hifiui_5_1.png";
import hifiui_5_2 from "../../../../assets/hifiui_5_2.png";
import hifiui_5_3 from "../../../../assets/hifiui_5_3.png";

import styles from "./staffschedule.module.css";
import WireframeCard from "../../../../components/Hi-fi Wireframe Card/WireframeCard";
const StaffSchedule = () => {
  const hifipro = [
    [
      { img: hifiwi_1_1, title: "Login" },
      { img: hifiwi_1_2, title: "Register" },
      { img: hifiwi_1_3, title: "Forgot password" },
    ],
    [
      { img: hifiwi_2_1, title: "Homepage" },
      { img: hifiwi_2_2, title: "Account Information" },
      { img: hifiwi_2_3, title: "List of organizations" },
    ],
    [
      { img: hifiwi_3_1, title: "Organization information" },
      { img: hifiwi_3_2, title: "Organization schedule" },
      { img: hifiwi_3_3, title: "List of organization persona" },
    ],
    [
      { img: hifiwi_4_1, title: "Invite account to organization" },
      { img: hifiwi_4_2, title: "Form store" },
      { img: hifiwi_4_3, title: "Form to fill" },
    ],
    [
      { img: hifiwi_5_1, title: "List of notifications" },
      { img: hifiwi_5_2, title: "Notification details" },
      { img: hifiwi_5_3, title: "Group chat" },
    ],
  ];

  const hifiui = [
    [
      { img: hifiui_1_1, title: "Login" },
      { img: hifiui_1_2, title: "Register" },
      { img: hifiui_1_3, title: "Loading" },
      { img: hifiui_1_4, title: "Reset password" },
    ],
    [
      { img: hifiui_2_1, title: "Homepage" },
      { img: hifiui_2_2, title: "Navigation" },
      { img: hifiui_2_3, title: "List of messages" },
      { img: hifiui_2_4, title: "Group chat" },
    ],
    [
      { img: hifiui_3_1, title: "List of organizations" },
      { img: hifiui_3_2, title: "Organization information" },
      { img: hifiui_3_3, title: "Organization schedule" },
      { img: hifiui_3_4, title: "List of organization persona" },
    ],
    [
      { img: hifiui_4_1, title: "Account information" },
      { img: hifiui_4_2, title: "Account setting" },
      { img: hifiui_4_3, title: "List of tutorial" },
    ],
    [
      { img: hifiui_5_1, title: "Form store" },
      { img: hifiui_5_2, title: "Create form" },
      { img: hifiui_5_3, title: "Form to fill" },
    ],
  ];
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
        <img src={mockup_1} alt="img1" />

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
        </div>
        <div className={styles.row1}>
          <div className={styles.row2_3_7}>
            <div>
              <h4>Persona 1</h4>
              <p>
                Problem statement: Binh is a part-time student who needs the
                earliest scheduled information because he doesn't want to waste
                time, not knowing what to do next week.
              </p>
            </div>
            <img src={persona1} alt="persona1" className={styles.shadow}/>
          </div>
        </div>
        <div className={styles.row1}>
          <div className={styles.row2_3_7}>
            <div>
              <h4>Persona 2</h4>
              <p>
                Problem statement: Thao is the owner of a coffee shop who needs
                an app to collect and organize the calendar automatically
                because she is too busy with other things
              </p>
            </div>
            <img src={persona2} alt="persona2" className={styles.shadow} />
          </div>
        </div>
        {/* <div className={styles.row1}>
          <h4>Empathy Mapping</h4>
        </div>

        <div className={styles.row1}>
          <h4>User Journey Mapping</h4>
        </div> */}

        {/* <div className={styles.row1}>
          <h4>User Stories</h4>
        </div> */}

        <div className={styles.row1}>
          <h4>Competitive audit</h4>
          <div className={styles.row3}>
            <a href="https://www.agendrix.com/" className={styles.center}>
              <img src={logo1} alt="logo1" className={styles.logo} />
              <h6>Agendrix</h6>
            </a>
            <a href="https://www.jotform.com/" className={styles.center}>
              <img src={logo2} alt="logo2" className={styles.logo} />
              <h6>Jotform</h6>
            </a>
            <a href="https://calendly.com/" className={styles.center}>
              <img src={logo3} alt="logo3" className={styles.logo} />
              <h6>Calendly</h6>
            </a>
          </div>
        </div>

        <div className={styles.row1}>
          <h4>User Flow</h4>
          <img src={userflow} alt="userflow" />
        </div>

        <div className={styles.row1}>
          <h4>Site Map</h4>
          <img src={sitemap} alt="sitemap" />
        </div>

        <div className={styles.row1}>
          <h4>Hi-Fi Wireframing</h4>
          <div className={styles.row5}>
            <WireframeCard props={hifipro[0]} />
            <WireframeCard props={hifipro[1]} />
            <WireframeCard props={hifipro[2]} />
            <WireframeCard props={hifipro[3]} />
            <WireframeCard props={hifipro[4]} />
          </div>
        </div>

        <div className={styles.row1}>
          <h4>Design system</h4>
          <img src={primarycolor} alt="primarycolor" />
          <img src={secondarycolor} alt="secondarycolor" />
          <img src={shadow} alt="shasdow" />
          <img src={component} alt="component" />
        </div>

        <div className={styles.row1}>
          <h4>Hi-Fi UI Design</h4>
          <div className={styles.row5}>
            <WireframeCard props={hifiui[0]} />
            <WireframeCard props={hifiui[1]} />
            <WireframeCard props={hifiui[2]} />
            <WireframeCard props={hifiui[3]} />
            <WireframeCard props={hifiui[4]} />
          </div>
        </div>

        <img src={img1} alt="img1" />
      </div>
    </>
  );
};
export default StaffSchedule;
