import React from 'react'
import styles from "./btn.module.css"

export const Filter = ({button}) => {
 // console.log(button)
  return (
    <div>
          {
               button.map((cat, i)=>{
                    return <button type="button"  key={i} className={styles.btn}>{cat} </button>
                })
            }
    </div>
  )
}

