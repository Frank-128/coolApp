
import React, { useEffect, useRef, useState } from 'react'
import piano6 from '../assets/piano/piano1.wav'
function Keys({number}) {
    const [hover,setHover] = useState(false);
    const [song,setSong]=useState('')
    const styles = {
        margin:'2px',
        width:'40%',
        height:'20%',
        backgroundColor:`${hover ===true?'rgba(200,200,200,.7)':'rgba(200,200,200,.9)'}`,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'8%',
        cursor:'pointer'
        
    }
    const trial = 'piano4'

   useEffect(()=>{
    setSong(`http://localhost:5173/src/assets/${number}`)
   },[number]) 
   const [playing,setPlaying]=useState(false);
  
   const play = async()=>{
      
    
    setPlaying(true);
  try{
    
    const audio = new Audio(song)
    audio.play();
}
  catch(err){
 console.log(err)   
}
  
}



  return (
    <div onClick={play} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={styles} >
        {(number.split('/')[1]).split('.')[0]}
        
    </div>
  )
}

export default Keys