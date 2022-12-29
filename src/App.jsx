import React,{ useState } from 'react'
import Controller from './components/Controller'
import Player from './components/Player'



function App() {
  const [instrument,setInstrument]=useState('')
  const [checked,setChecked]=useState(false);
const  styles = {
    display:'flex',
    backgroundColor:`rgba(215,235,244,.6)`,
    alignItems:'center',
    justifyContent:'center',
   width:'100%',
   height:'100%',
    position:'absolute',
  flexDirection:'column'

  }

  return (
   
   <div style={styles}>
    <div>
    <h1 style={{fontFamily:'Courier',textShadow:'0 0 30px red'}}>Rico Studios</h1>
    </div>
     <div style={{width:'40%',height:'40%',backgroundColor:'lightblue',display:'flex',flexDirection:'row',boxShadow:'4px 4px 5px 2px',borderRadius:'1%',padding:'20px'}}>
          
          <div style={{flex:'3',backgroundColor:`rgba(122,223,224,.6)`}}>
          <Player checked={checked}  instrument={instrument}/>
          </div>
          <div style={{flex:'1'}}>

        <Controller instrument={instrument} setChecked={setChecked} checked={checked} setInstrument={setInstrument}/>
          </div>
     </div>
    </div>
  )
}

export default App
