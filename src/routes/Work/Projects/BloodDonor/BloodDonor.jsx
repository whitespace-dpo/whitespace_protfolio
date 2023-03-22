import Navbar from "../../../../components/Navbar/Navbar";
import cover from "../../../../assets/Blood_donor_167.png";
import img1 from "../../../../assets/blood_donor_cover.png";
import problem from "../../../../assets/blood_donor_problem.png";
import solution from "../../../../assets/blood_donor_solution.png";
import goal1 from "../../../../assets/blood_donor_goal3.svg";
import goal2 from "../../../../assets/blood_donor_goal2.svg";
import goal3 from "../../../../assets/blood_donor_goal1.svg";
import logo1 from "../../../../assets/blood_donor_logo1.png";
import logo2 from "../../../../assets/blood_donor_logo2.png";
import logo3 from "../../../../assets/blood_donor_logo3.png";
import screenflow1 from "../../../../assets/blood_donor_screenflow1.png";
import screenflow2 from "../../../../assets/blood_donor_screenflow2.png";
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
import primary from "../../../../assets/blood_donor_primarycolor.png";
import shadow from "../../../../assets/blood_donor_shadow.png";
import typo from "../../../../assets/blood_donor_typo.png";
import antd from "../../../../assets/antd.svg";
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
          <div className={styles.row2_4_6}>
            <img
              src={problem}
              alt="problem"
              style={{ width: "60%", marginLeft: "20%" }}
            />
            <ul>
              <li>
                After surveying FPT students, I found that the percentage of
                students knowing and participate in blood donation is not high.
                They don't know how to approach those campaigns. They are also
                confused because they do not know how the blood donation process
                works, leading to the very scary thought of donating blood.
              </li>
              <li>
                Blood donation organizations have websites and Facebook pages to
                promote blood donation campaigns, but they are often small in
                scope (in the area or in organizations such as schools, and
                companies) and do not take place continuously, making people not
                follow up.
              </li>
              <li>
                In addition, the urgent need for rare blood groups is also
                difficult to reach to everyone. Usually, announcements are
                communicated through social networking sites such as Facebook
                but such social networking sites are not specifically for that
                purpose, so someone who wants to help may be "lucky" to have the
                opportunity to help.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.row1}>
          <h4>User Solutions</h4>
          <div className={styles.row2_5_5}>
            <ul>
              <li>
                I have proposed to everyone a website that can integrate all the
                information about blood donation to make it easier for people to
                receive information.
              </li>
              <li>
                A website that includes all blood donation organizations
                together posting blood donation campaigns so that donors can
                easily register online.
              </li>
              <li>
                A website that reports on people battling blood diseases and
                heroes who silently donate their blood.
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
            Create a website where people from all over the country can easily
            register to donate blood and stay up to date with blood information.
          </p>
          <div className={styles.row3}>
            <div>
              <img src={goal1} alt="goal1" />
              <h5>Easy to reach</h5>
              <p>
                Register to participate in blood donation right on the web
                quickly
              </p>
            </div>
            <div>
              <img src={goal2} alt="goal1" />
              <h5>Always active</h5>
              <p>
                Instantly send emergency notifications to you when an
                organization nearby is running out of blood
              </p>
            </div>
            <div>
              <img src={goal3} alt="goal1" />
              <h5>Reward</h5>
              <p>
                Receive vouchers and gifts that convert according to the amount
                of blood you donated right on the web
              </p>
            </div>
          </div>
        </div>
        <div className={styles.row1}>
          <h4>Competitive audit</h4>
          <div className={styles.row3}>
            <a href="https://giotmauvang.org.vn/" className={styles.center}>
              <img src={logo1} alt="logo1" className={styles.logo} />
              <h6>Giọt máu vàng</h6>
            </a>
            <a href="http://hienmaunhandao.org.vn/" className={styles.center}>
              <img src={logo2} alt="logo2" className={styles.logo} />
              <h6>Hiến máu nhân đạo</h6>
            </a>
            <a href="https://vienhuyethoc.vn/" className={styles.center}>
              <img src={logo3} alt="logo3" className={styles.logo} />
              <h6>Viện huyết học</h6>
            </a>
          </div>
        </div>

        <div className={styles.row1}>
          <h4>Screen Flow </h4>
          <h6>Role: Donor</h6>
          <img src={screenflow1} alt="screenflow1" />
          <h6>Role: Organization</h6>
          <img src={screenflow2} alt="screenflow" />
          <h6>Role: Admin</h6>
          <img src={screenflow} alt="screenflow" />
        </div>

       
       
        <div className={styles.row1}>
          <h4>Library</h4>

          <img src={antd} alt="antd" style={{ width: "120px" }} />
          <p>Using Antdesign's component library</p>
        </div>

        <div className={styles.row1}>
          <h4>Homepage</h4>
          <img src={homepage} alt="screenflow1" className={styles.screen} />
        </div>

        <div className={styles.row1}>
          <h4>Blood donation campaign</h4>
          <div className={styles.row2_5_5}>
            <img src={campain1} alt="campain1" className={styles.screen} />
            <img src={campain2} alt="campain2" className={styles.screen} />
          </div>
        </div>

        <div className={styles.row1}>
          <h4>News</h4>
          <div className={styles.row2_5_5}>
            <img src={news1} alt="news1" className={styles.screen} />
            <img src={news2} alt="news2" className={styles.screen} />
          </div>
        </div>

        <div className={styles.row1}>
          <h4>Achievement</h4>
          <div className={styles.row2_5_5}>
            <img
              src={achievement1}
              alt="achievement1"
              className={styles.screen}
            />
            <img
              src={achievement2}
              alt="achievement2"
              className={styles.screen}
            />
          </div>
        </div>

        <div className={styles.row1}>
          <h4>Donor account</h4>
          <div className={styles.row2_5_5}>
            <div>
              <img
                src={d_account1}
                alt="d_account1"
                className={styles.screen}
              />
              <img
                src={d_account2}
                alt="d_account2"
                className={styles.screen}
              />
              <img
                src={d_account3}
                alt="d_account3"
                className={styles.screen}
              />
            </div>
            <div>
              <img
                src={d_account4}
                alt="d_account4"
                className={styles.screen}
              />
              <img
                src={d_account5}
                alt="d_account5"
                className={styles.screen}
              />
            </div>
          </div>
        </div>

        <div className={styles.row1}>
          <h4>Homepage - Organization role</h4>
          <div className={styles.row2_5_5}>
            <img src={homepage1} alt="homepage1" className={styles.screen} />
            <img src={homepage2} alt="homepage2" className={styles.screen} />
          </div>
        </div>

        <div className={styles.row1}>
          <h4>Campaign - Organization role</h4>
          <div className={styles.row2_5_5}>
            <div>
              <img src={campaign3} alt="campaign3" className={styles.screen} />
              <img src={campaign4} alt="campaign4" className={styles.screen} />
              <img src={campaign5} alt="campaign5" className={styles.screen} />
            </div>
            <div>
              <img src={campaign6} alt="campaign6" className={styles.screen} />
              <img src={campaign7} alt="campaign7" className={styles.screen} />
              <img src={campaign8} alt="campaign8" className={styles.screen} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BloodDonor;
