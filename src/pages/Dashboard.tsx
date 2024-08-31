import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import MainContent from "../components/MainContent";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponent = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.frameParent}>
        <FrameComponent1 />
        <div className={styles.frameGroup}>
          <div className={styles.securityDashboardParent}>
            <h1 className={styles.securityDashboard}>Security Dashboard</h1>
            <nav className={styles.cameraDropdown}>
              <a className={styles.watching}>Watching</a>
              <div className={styles.frameContainer}>
                <div className={styles.listWrapper}>
                  <a className={styles.list}>List</a>
                </div>
                <img
                  className={styles.icoutlineArrowDropDownIcon}
                  alt=""
                  src="/icoutlinearrowdropdown.svg"
                />
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.listWrapper}>
                  <a className={styles.allCameras}>All Cameras</a>
                </div>
                <img
                  className={styles.icoutlineArrowDropDownIcon}
                  alt=""
                  src="/icoutlinearrowdropdown.svg"
                />
              </div>
            </nav>
          </div>
          <FrameComponent2 />
        </div>
      </div>
      <div className={styles.mainContentWrapper}>
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
