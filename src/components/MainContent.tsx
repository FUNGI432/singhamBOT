import { FunctionComponent } from "react";
import Bg from "./Bg";
import styles from "./MainContent.module.css";

export type MainContentType = {
  className?: string;
};

const MainContent: FunctionComponent<MainContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.mainContent, className].join(" ")}>
      <div className={styles.cameraDetails}>
        <div className={styles.videoPlaceholder} />
        <div className={styles.alertHistoryHeader}>
          <div className={styles.locationItems}>
            <Bg />
            <img
              className={styles.bxcctvIcon}
              loading="lazy"
              alt=""
              src="/bxcctv.svg"
            />
            <a className={styles.camera01}>Camera 01</a>
            <img
              className={styles.icsharpMyLocationIcon}
              loading="lazy"
              alt=""
              src="/icsharpmylocation.svg"
            />
            <a className={styles.hotspot}>Hotspot</a>
            <img
              className={styles.uilcalenderIcon}
              loading="lazy"
              alt=""
              src="/uilcalender.svg"
            />
            <div className={styles.aug2024}>31/Aug/2024</div>
            <img
              className={styles.fluentclock48RegularIcon}
              loading="lazy"
              alt=""
              src="/fluentclock48regular.svg"
            />
          </div>
        </div>
        <div className={styles.alertHistoryChart}>
          <div className={styles.chartContainer}>
            <div className={styles.additionalLocations}>
              <div className={styles.bg}>
                <div className={styles.bg1} />
              </div>
              <div className={styles.rec}>REC</div>
            </div>
            <div className={styles.bgParent}>
              <div className={styles.bg2}>
                <div className={styles.bg1} />
              </div>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className={styles.bgParent}>
              <div className={styles.bg2}>
                <div className={styles.bg1} />
              </div>
              <img
                className={styles.vectorIcon1}
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
            </div>
          </div>
          <div className={styles.cameraSelection}>
            <div className={styles.bgParent}>
              <div className={styles.bg2}>
                <div className={styles.bg1} />
              </div>
              <img
                className={styles.vectorIcon2}
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
            </div>
            <div className={styles.bgParent}>
              <div className={styles.bg2}>
                <div className={styles.bg1} />
              </div>
              <img
                className={styles.vectorIcon3}
                loading="lazy"
                alt=""
                src="/vector-3.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.alertHistoryWrapper}>
        <div className={styles.alertHistory}>{`Alert History `}</div>
      </div>
      <div className={styles.mainContentInner}>
        <div className={styles.recordCountGrandparentParent}>
          <div className={styles.recordCountGrandparent}>
            <div className={styles.tableHeaderContent}>
              <div className={styles.recordsWrapper}>
                <div className={styles.records}>5,000 records</div>
              </div>
              <div className={styles.sortContainer}>
                <div className={styles.sortByParent}>
                  <div className={styles.sortBy}>Sort by</div>
                  <img
                    className={styles.icoutlineArrowDropDownIcon}
                    alt=""
                    src="/icoutlinearrowdropdown-2.svg"
                  />
                </div>
                <div className={styles.tableHeaderSeparator} />
              </div>
            </div>
          </div>
          <div className={styles.vectorWrapper}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/line-3.svg"
            />
          </div>
          <div className={styles.tableHeaderWrapper}>
            <div className={styles.tableHeader}>
              <div className={styles.tableHeaderChild} />
              <div className={styles.tableHeaderItem} />
              <div className={styles.tableHeaderInner} />
              <div className={styles.lineDiv} />
              <div className={styles.tableHeaderChild1} />
              <div className={styles.tableColumns}>
                <div className={styles.tableHeader1}>
                  <b className={styles.no}>No.</b>
                  <div className={styles.div}>1</div>
                  <div className={styles.div}>2</div>
                  <div className={styles.div}>3</div>
                  <div className={styles.div}>4</div>
                  <div className={styles.div}>5</div>
                </div>
                <div className={styles.tableHeader2}>
                  <div className={styles.verification}>
                    <div className={styles.humanVerification}>
                      HUMAN VERIFICATION
                    </div>
                  </div>
                  <div className={styles.safeunsafe}>
                    <span>SAFE</span>
                    <span className={styles.span}>/</span>
                    <span className={styles.unsafe}>UNSAFE</span>
                  </div>
                  <div className={styles.safe}>SAFE</div>
                  <div className={styles.unsafe1}>UNSAFE</div>
                  <div className={styles.unsafe1}>UNSAFE</div>
                  <div className={styles.unsafe1}>UNSAFE</div>
                </div>
                <div className={styles.tableHeader3}>
                  <div className={styles.crowd}>Crowd</div>
                  <div className={styles.personal}>2-3</div>
                  <div className={styles.personal1}>10+</div>
                  <div className={styles.div}>2</div>
                  <div className={styles.personal3}>6</div>
                  <div className={styles.div}>4</div>
                </div>
                <div className={styles.tableHeader4}>
                  <div className={styles.date}>Date</div>
                  <div className={styles.div5}>15.2.22</div>
                  <div className={styles.div5}>15.2.22</div>
                  <div className={styles.div5}>15.2.22</div>
                  <div className={styles.div5}>15.2.22</div>
                  <div className={styles.div5}>15.2.22</div>
                </div>
                <div className={styles.tableHeader4}>
                  <div className={styles.date}>Time</div>
                  <div className={styles.div10}>13:01:21</div>
                  <div className={styles.div10}>13:01:21</div>
                  <div className={styles.div10}>13:01:21</div>
                  <div className={styles.div10}>13:01:21</div>
                  <div className={styles.div10}>13:01:21</div>
                </div>
                <div className={styles.tableHeader4}>
                  <div className={styles.site}>Site</div>
                  <div className={styles.kalimalang}>Kalimalang</div>
                  <div className={styles.kalimalang}>Kalimalang</div>
                  <div className={styles.kalimalang}>Kalimalang</div>
                  <div className={styles.kalimalang}>Kalimalang</div>
                  <div className={styles.kalimalang}>Kalimalang</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottomSeparator} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
