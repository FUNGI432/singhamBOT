import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.hello} />
      <div className={styles.imgicons} />
      <div className={styles.frameWrapper}>
        <div className={styles.singhamParent}>
          <a className={styles.singham}>SINGHAM</a>
          <FrameComponent
            mdiLightviewDashboard="/mdilightviewdashboard.svg"
            dashboard="Dashboard"
          />
          <div className={styles.frameContainer}>
            <div className={styles.epsearchParent}>
              <img
                className={styles.epsearchIcon}
                loading="lazy"
                alt=""
                src="/epsearch.svg"
              />
              <div className={styles.searchWrapper}>
                <a className={styles.search}>Search</a>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.iconoirreportsParent}>
              <img
                className={styles.iconoirreports}
                loading="lazy"
                alt=""
                src="/iconoirreports.svg"
              />
              <div className={styles.recentReports}>Recent Reports</div>
            </div>
          </div>
          <FrameComponent
            mdiLightviewDashboard="/claritysettingsline.svg"
            dashboard="Settings"
            propColor="rgba(176, 176, 176, 0.64)"
            propMinWidth="57px"
            propTextDecoration="none"
          />
          <div className={styles.frameWrapper1}>
            <div className={styles.epsearchParent}>
              <img
                className={styles.epsearchIcon}
                loading="lazy"
                alt=""
                src="/bxlogoutcircle.svg"
              />
              <div className={styles.logout}>Logout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
