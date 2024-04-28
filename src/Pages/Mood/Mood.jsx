import React from "react";
import { useState } from "react";
import "./Mood.css";



const Mood = () => {
  const [display, setDisplay] = useState('none');
  const [videoFeedUrl, setVideoFeedUrl] = useState(''); 
  const [displayface , setDisplayFace ] = useState('block');
  const [btncam,setBtnCam] = useState('block')

function myFunction() {
  if (display === 'none') {
    setDisplay('block');
    setVideoFeedUrl('http://127.0.0.1:5000/video_feed');
    setDisplayFace('none');
    setBtnCam('none');;    
  } 
  else {
    setDisplay('none');
    setVideoFeedUrl('');
    setDisplayFace('block'); 
    
  }
}

const [Emotion, setEmotion] = useState('');  

const [data, setData] = useState({});
const handleSongs = async () => {
  try {
    const response = await fetch('http://127.0.0.1:5000/t');
    const data = await response.json();
    const {Emotion} = data;
    // console.log(Emotion);
    // console.log(JSON.stringify(Emotion));
    switch (Emotion) {
        case 'Happy':
          window.open(
            'https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC?si=S5-xRJ0cSIm3IQV8Oyfr_A&utm_source=copy-link&nd=1',
            '_blank');
          break;
        case 'Sad':
          window.open(
            'https://open.spotify.com/playlist/6nxPNnmSE0d5WlplUsa5L3?si=R25qGCQ7TAGDpQTfldJK_w&utm_source=whatsapp&nd=1',
            '_blank'
          );
          break;
        case 'Angry':
          window.open(
            'https://open.spotify.com/playlist/0l9dAmBrUJLylii66JOsHB?si=IUMMxQMNQqmMtkPe_GZ7yA&utm_source=whatsapp',
            '_blank'
          );
          break;
        case 'Neutral':
          window.open(
            'https://open.spotify.com/playlist/4QfP5UWQhVEcZ6yfwjO3DW?si=D1jdbn-1SL-swav5mtYUFw&utm_source=whatsapp',
            '_blank'
          );
          break;
        case 'rock':
          window.open(
            'https://open.spotify.com/album/5PMM06AGOyOBkWqjOsJAQ7?si=trFP19gOQR-loAIzSQZctA&utm_source=copy-link',
            '_blank'
          );
          break;
        default:
          break;
      }

      setEmotion(Emotion);

  } catch (error) {
    console.log(error);
  }
};



  return (
    <div>
    <div id="myCam" className="video  container">
      <h1 align="center" className="headv"></h1>
      <div className="lens">
        <img id="face" style={{display:displayface}} src={require("./Images/face_detectionpng.png")  } alt="" />
        <img id="bg" style={{display: display}}  className="center" src={videoFeedUrl} alt=""  />
      </div>
    </div>
    <button className="capture-btn" style={{display: btncam}}  onClick={myFunction}>Open Camera</button>
    <button className="btn"  style={{display: display}} onClick={handleSongs} >Recommend Me Songs</button>
  </div>
  );
};

export default Mood;
