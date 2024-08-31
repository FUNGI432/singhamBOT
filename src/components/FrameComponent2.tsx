import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.colorIndicators} />
          <div className={styles.blockLabels}>
            <div className={styles.mess}>
              <ol className={styles.mess1}>
                <li>Mess</li>
              </ol>
            </div>
          </div>
          <div className={styles.ciplusContainer}>
            <img
              className={styles.ciplusIcon}
              loading="lazy"
              alt=""
              src="/ciplus.svg"
            />
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild} />
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.aBlockWrapper}>
              <div className={styles.aBlock}>2. A block</div>
            </div>
          </div>
          <div className={styles.ciplusWrapper}>
            <img
              className={styles.ciplusIcon}
              loading="lazy"
              alt=""
              src="/ciplus.svg"
            />
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameChild} />
          <div className={styles.frameChild1} />
          <div className={styles.bBlockWrapper}>
            <div className={styles.bBlock}>3. B block</div>
          </div>
          <div className={styles.ciplusContainer}>
            <img
              className={styles.ciplusIcon2}
              loading="lazy"
              alt=""
              src="/ciplus-2.svg"
            />
          </div>
        </div>
        <div className={styles.chartElements}>
          <div className={styles.chartElementsChild} />
          <div className={styles.blockPContainer}>
            <div className={styles.separator} />
            <div className={styles.blockPLabelsWrapper}>
              <div className={styles.blockPLabels}>
                <div className={styles.pBlock}>
                  <ol className={styles.mess1}>
                    <li>P block</li>
                  </ol>
                </div>
                <div className={styles.pLa203}>P-LA-203</div>
                <div className={styles.pLa009}>P-LA-009</div>
                <div className={styles.pLh103}>P-LH-103</div>
              </div>
            </div>
          </div>
          <div className={styles.locationColorWrapper}>
            <div className={styles.locationColor} />
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.hotspotsWrapper}>
          <div className={styles.hotspots}>Hotspots</div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.frameChild2} />
          <div className={styles.aLh}>
            <ol className={styles.aLh1}>
              <li>002-A-LH</li>
            </ol>
          </div>
          <div className={styles.aLh}>
            <ol className={styles.aLh1}>
              <li>MESS</li>
            </ol>
          </div>
          <div className={styles.aLh}>
            <ol className={styles.aLh1}>
              <li>D5 STAGE</li>
            </ol>
          </div>
          <div className={styles.aLh}>
            <ol className={styles.aLh1}>
              <li>HOTSPOT</li>
            </ol>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.cctvLocation}>CCTV Location</div>
        <div className={styles.image1Wrapper}>
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
