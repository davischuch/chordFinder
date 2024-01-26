import styles from "../page.module.css";
import Note from "./note"

export default function Row() {
    return (
        <div className={styles.row}>
            <Note></Note>
            <Note></Note>
            <Note></Note>
            <Note></Note>
            <Note></Note>
            <Note></Note>
            <Note></Note>
            <Note></Note>
        </div>
    )
}