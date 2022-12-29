import {  SkipNext, SkipPrevious } from '@mui/icons-material'
import { Switch } from '@mui/material'
import React,{useEffect, useState} from 'react'

function Controller({instrument,setInstrument,checked,setChecked}) {
    const [stat,setStat]=useState('OFF');
    const [pos,setPos]=useState(0)
    
   
  const styles={
    width:'50%',
    height:'2%',
    backgroundColor:`${stat === 'OFF'?'red':'green'}`,
    position:'relative',
    flex:'1',
    margin:'20px',
    boxShadow:'0 0 10px ',
    borderRadius:'10%',
    textAlign:'center'
  }
  const handleSkip=(num)=>{
    if(num ===-1){

       pos > 0 && setPos(pos-1)
    }
    else if(num ===1){
        pos < 3 && setPos(pos+1)
    }
    
  };
  const handleChange = ()=>{
    setChecked(!checked)
}
const instruments = ['drum','piano','guitar','snare'];
useEffect(()=>{
    setInstrument(instruments[pos])
},[pos])
useEffect(()=>{
    checked? setStat("ON"):setStat("OFF")
},[checked])

    return (
    <div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%'}}>
        <div  style={{flex:'1',borderRadius:'15%',boxShadow:'0 0 6px',backgroundColor:'limegreen',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'10px'}}>
            <div>
                {instrument}
            </div>
            <div >
            <button disabled={!checked} onClick={()=>handleSkip(-1)} style={{margin:'2px'}}><SkipPrevious/></button>
            <button disabled={!checked} onClick={()=>handleSkip(1)}><SkipNext/></button>
            </div>
        </div>
        
        <div style={{flex:'1',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'10px'}}>
    <div style={styles}>
        {stat}
    </div>
    <div style={{flex:'6'}}>
        <button> <Switch checked={checked} onChange={handleChange} /></button>
    </div>
        </div>
    </div>
  )
}

export default Controller