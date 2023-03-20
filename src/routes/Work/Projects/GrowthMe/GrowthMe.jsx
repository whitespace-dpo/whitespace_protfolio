import Footer from "../../../../components/Footer/Footer"
import Navbar from "../../../../components/Navbar/Navbar"
import cover from "../../../../assets/growth_me_167.png"
import img1 from "../../../../assets/growth_me_2.png"
import styles from "./growthme.module.css"
const GrowthMe = () => {
    return <div>
        <Navbar/>
        <img src={cover} alt="test" className={styles.cover}></img>
      <div className={styles["content_container"]}>
        <div className={styles.row3}>
          <div>
            <h5>DATE</h5>
            <p>March/2023 - Now</p>
          </div>
          <div>
            <h5>ROLE</h5>
            <p>UI/UX designer</p>
          </div>
          <div>
            <h5>Target Audience</h5>
            <p>For all FPT University students</p>
          </div>
        </div>

        <div className={styles.row1}>
          <h4>Project overview</h4>
          <p style={{ padding: "0 10%" }}>
          Project is not public yet.
          </p>
        </div>

        <img src={img1} alt="img1" />

        </div>
        <Footer/>
    </div>
}

export default GrowthMe;