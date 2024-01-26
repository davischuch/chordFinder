import { useState } from "react";
import clsx from "clsx";
import styles from "../page.module.css";

export default function Note() {
    const [active, setActive] = useState(true)
  
    const style = clsx({
      [styles.note] : active,
      [styles.noteactive] : !active
    })

    return (<div onClick={() => setActive(!active)} className={style}></div>)
}