import React from 'react'
import style from "./videoslayout.module.css"


const videoslayout = ({video}) => {
  return (
        <div className={style.card}>
            <div className={style.thumbnail}>
                <img src={video.thumbnail} alt="" />
            </div>
            <div className={style.text}>
                <h3>{video.description} </h3><br />
                <p>{video.time}</p>
            </div>
        </div>
  )
}

export default videoslayout