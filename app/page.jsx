"use client";

import styles from "./page.module.css";
import Row from "./components/row"

export default function Home() {
  return (
    <div className={styles.back}>
      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>
    </div>
  );
}
