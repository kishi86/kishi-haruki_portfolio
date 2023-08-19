import React from "react";
import YouTube from "react-youtube";
import styles from "@/styles/works/video.module.scss"

export function Video_penguin (){
  const options = {
        playerVars: {
        playsinline: 1,
        autoplay: 1,
        mute: 1,
        loop: 0,
        width: '320',
        height: '180',
      }, 
  }
  return(
    <div className={styles.videoContainer}>
      <YouTube 
        videoId="_4Df84VLIis"
        opts={options}
        className={styles.video}/>
    </div>
  )
}
