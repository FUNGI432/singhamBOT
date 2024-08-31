import { FunctionComponent } from "react";
import styles from "./Bg.module.css";

export type BgType = {
  className?: string;
};

const Bg: FunctionComponent<BgType> = ({ className = "" }) => {
  return (
    <div className={[styles.bg, className].join(" ")}>
      <div className={styles.bg1} />
    </div>
  );
};

export default Bg;
