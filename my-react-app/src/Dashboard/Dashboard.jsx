import styles from "./Dashboard.module.css";
import blog from "../assets/blog.png";
import home from "../assets/home.png";
import sales from "../assets/acquisition.png";
import event from "../assets/calendar-check.png";
import calender from "../assets/calendar.png";
import pay from "../assets/get-money.png";
import apps from "../assets/application.png";
import setup from "../assets/installation.png";
import libarary from "../assets/library.png";
import inbox from "../assets/inbox (1).png";
import cataloge from "../assets/online-learning.png";
//import question from '../assets/question.png'
//import mobile from '../assets/web-administrator.png'
// let names = ['blog', 'home', 'sales', 'event', 'calender', 'pay', 'apps', 'setup', 'libarary', 'inbox', 'cataloge']

// let paths = ['../assets/blog.png', '../assets/blog.png',
//     '../assets/home.png', '../assets/acquisition.png',
//     '../assets/calendar-check.png', '../assets/calendar.png',
//     '../assets/get-money.png', '../assets/application.png',
//     '../assets/installation.png', '../assets/library.png',
//     '../assets/inbox (1).png', '../assets/online-learning.png']
// let home;
// for (let i = 0; i < names.length; i++) {
//     for (let j = 0; j < paths.length; j++) {
//     home=`${}`
//     }

// }
import { useNavigate } from "react-router-dom";
import edit from "../assets/pen.png";
import Calendar from "../Calendar.jsx";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <hr />
      <main className={styles.dashboard}>
        <section className={styles.leftBarSection}>
          <div className={styles.sidebarHeading}>Quick Actions</div>
          <a href="#">
            <img className={styles.icon} src={setup} alt="" /> Setup
          </a>

          <a href="#">
            <img className={styles.icon} src={home} alt="" /> Home
          </a>
          <a href="#">
            {" "}
            <img className={styles.icon} src={pay} alt="" />
            Getting Paid
          </a>
          <a href="#">
            <img className={styles.icon} src={calender} alt="" /> Booking
            Calender
          </a>
          <a href="#">
            {" "}
            <img className={styles.icon} src={event} alt="" />
            Events
          </a>
          <a href="#">
            <img className={styles.icon} src={sales} alt="" /> Sales
          </a>
          <a href="#">
            <img className={styles.icon} src={cataloge} alt="" /> Cataloge
          </a>
          <a href="#">
            <img className={styles.icon} src={blog} alt="" />
            Blog
          </a>
          <a href="#">
            <img className={styles.icon} src={libarary} alt="" />
            Video Library
          </a>
          <a href="#">
            <img className={styles.icon} src={apps} alt="" />
            Sites And Mobile App
          </a>
          <a href="#">
            <img className={styles.icon} src={inbox} alt="" />
            Inbox
          </a>
          <button onClick={() => navigate("/")}>
            Go to UserDashBoard Page
          </button>
          <div>
            <hr />
            <a href="#">
              <img className={styles.icon} src={edit} alt="" />
              Edit Site
            </a>
          </div>
          <a href="http://"></a>
        </section>
        <section className={styles.rightSection}>
          <div className={styles.upper}>
            <br />
            <br />
            <br />
            User Information 1
          </div>
          <div className={styles.middle}>
            <Calendar />
          </div>
          <div className={styles.lower}>
            <br />
            <br />
            <br />
            User Information 3
          </div>
        </section>
      </main>
      <hr />
    </>
  );
}
export default Dashboard;
