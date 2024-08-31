import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  mdiLightviewDashboard?: string;
  dashboard?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
  propMinWidth?: CSSProperties["minWidth"];
  propTextDecoration?: CSSProperties["textDecoration"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  mdiLightviewDashboard,
  dashboard,
  propColor,
  propMinWidth,
  propTextDecoration,
}) => {
  const dashboardStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
      textDecoration: propTextDecoration,
    };
  }, [propColor, propMinWidth, propTextDecoration]);

  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.mdiLightviewDashboardWrapper}>
          <img
            className={styles.mdiLightviewDashboardIcon}
            loading="lazy"
            alt=""
            src={mdiLightviewDashboard}
          />
        </div>
        <div className={styles.dashboard} style={dashboardStyle}>
          {dashboard}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
