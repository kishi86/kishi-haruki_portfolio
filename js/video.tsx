import React from "react";
import YouTube from "react-youtube";
import styles from "@/styles/works/video.module.scss"

export function Video_penguin (){
  return(
    <div className={styles.videoContainer}>
        <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/_4Df84VLIis" 
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; muted; encrypted-media; gyroscope; picture-in-picture; web-share" >
        </iframe>
    </div>
  )
}

export function Video_hanabi (){
  return(
    <div className={styles.videoContainer}>
        <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/2-NJSKKAH_g" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; muted; encrypted-media; gyroscope; picture-in-picture; web-share" >
        </iframe>
    </div>
  )
}
