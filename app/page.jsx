"use client";

import styles from "./page.module.css";
import Row from "./components/row"

export default function Home() {
  return (
    <div className={styles.back}>
      <Row id="0"></Row>
      <Row id="1"></Row>
      <Row id="2"></Row>
      <Row id="3"></Row>
      <Row id="4"></Row>
      <Row id="5"></Row>
    </div>
  );
}
