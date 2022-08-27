import React, { useEffect, useState } from "react";

import styles from "./Carousal.module.css"

const Card= ({src}) => {
    
    return(
        <div    className={styles.card}>
    <img src={src}/>
</div>
    )
}

export default Card;