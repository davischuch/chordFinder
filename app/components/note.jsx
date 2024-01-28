import { useState } from "react";
import clsx from "clsx";
import styles from "../page.module.css";
import json from "../src/actives.json"

export default function Note(props) {
    const [active, setActive] = useState(false)
  
    const style = clsx({
      [styles.note] : !active,
      [styles.noteactive] : active
    })

    if (active == true) {
      json[props.id] = "1";
    } else if (active == false) {
      json[props.id] = "0";
    }

    return (<div id={props.id} onClick={() => setActive(!active)} className={style}></div>)
}