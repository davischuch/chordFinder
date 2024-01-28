import styles from "../page.module.css";
import Note from "./note"

export default function Row(props) {
    return (
        <div className={styles.row}>
            <Note id={props.id + "0"}></Note>
            <Note id={props.id + "1"}></Note>
            <Note id={props.id + "2"}></Note>
            <Note id={props.id + "3"}></Note>
            <Note id={props.id + "4"}></Note>
            <Note id={props.id + "5"}></Note>
            <Note id={props.id + "6"}></Note>
            <Note id={props.id + "7"}></Note>
        </div>
    )
}