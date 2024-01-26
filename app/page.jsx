import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const [state, setState] = useState("col")

function changeState() {
  if (style !== "col") setStyle("col");
        else setStyle("colon");
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.back}>
        <div className={styles.row}>
          <div id="00" onClick={changeState} className={styles.state}></div>
          <div id="01" className={styles.col}></div>
          <div id="02" className={styles.col}></div>
          <div id="03" className={styles.col}></div>
          <div id="04" className={styles.col}></div>
          <div id="05" className={styles.col}></div>
          <div id="06" className={styles.col}></div>
          <div id="07" className={styles.col}></div>
          <div id="08" className={styles.col}></div>
        </div>
        <div className={styles.row}>
          <div id="10" className={styles.col}></div>
          <div id="11" className={styles.col}></div>
          <div id="12" className={styles.col}></div>
          <div id="13" className={styles.col}></div>
          <div id="14" className={styles.col}></div>
          <div id="15" className={styles.col}></div>
          <div id="16" className={styles.col}></div>
          <div id="17" className={styles.col}></div>
          <div id="18" className={styles.col}></div>
        </div>
        <div className={styles.row}>
          <div id="20" className={styles.col}></div>
          <div id="21" className={styles.col}></div>
          <div id="22" className={styles.col}></div>
          <div id="23" className={styles.col}></div>
          <div id="24" className={styles.col}></div>
          <div id="25" className={styles.col}></div>
          <div id="26" className={styles.col}></div>
          <div id="27" className={styles.col}></div>
          <div id="28" className={styles.col}></div>
        </div>
        <div className={styles.row}>
          <div id="30" className={styles.col}></div>
          <div id="31" className={styles.col}></div>
          <div id="32" className={styles.col}></div>
          <div id="33" className={styles.col}></div>
          <div id="34" className={styles.col}></div>
          <div id="35" className={styles.col}></div>
          <div id="36" className={styles.col}></div>
          <div id="37" className={styles.col}></div>
          <div id="38" className={styles.col}></div>
        </div>
        <div className={styles.row}>
          <div id="40" className={styles.col}></div>
          <div id="41" className={styles.col}></div>
          <div id="42" className={styles.col}></div>
          <div id="43" className={styles.col}></div>
          <div id="44" className={styles.col}></div>
          <div id="45" className={styles.col}></div>
          <div id="46" className={styles.col}></div>
          <div id="47" className={styles.col}></div>
          <div id="48" className={styles.col}></div>
        </div>
        <div className={styles.row}>
          <div id="50" className={styles.col}></div>
          <div id="51" className={styles.col}></div>
          <div id="52" className={styles.col}></div>
          <div id="53" className={styles.col}></div>
          <div id="54" className={styles.col}></div>
          <div id="55" className={styles.col}></div>
          <div id="56" className={styles.col}></div>
          <div id="57" className={styles.col}></div>
          <div id="58" className={styles.col}></div>
        </div>
      </div>
    </main>
  );
}
