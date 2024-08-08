import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[res, setRes]=useState('')
  const [display, setDisplay] = useState('')
  const handleClickbutton =(value)=>{
    if(value === 'C'){
      setRes('')
      setDisplay('')
    }
    else if (value === '='){
      try{
        setDisplay(eval(res).toString())
       
      }catch{
        setRes('')
        setDisplay('Error')
      }
    }
    else{
      setRes(res+value)
    }
   
  }

  // const buttonData = ['7','8','9','+','4','5','6','-','1','2','3','*','C','0','=','/']
  return (
    <div className='layout'>
      <h1>React Calculator</h1>
      <input value={res} type='text' style={{border:'1px black solid', width:'200px',margin:'20px', height:'25px'}}/>
      <div>{display}</div>

      
      <div style={{display:'flex'}}> 
    <button  onClick={()=>handleClickbutton('7')}>7</button>
    <button  onClick={()=>handleClickbutton('8')}>8</button>
    <button  onClick={()=>handleClickbutton('9')}>9</button>
    <button  onClick={()=>handleClickbutton('+')}>+</button>

     </div>
    
     <div style={{display:'flex'}}> 
     <button  onClick={()=>handleClickbutton('4')}>4</button>
     <button  onClick={()=>handleClickbutton('5')}>5</button>
     <button  onClick={()=>handleClickbutton('6')}>6</button>
     <button  onClick={()=>handleClickbutton('-')}>-</button>

     </div>

     <div style={{display:'flex'}}> 
     <button  onClick={()=>handleClickbutton('1')}>1</button>
     <button  onClick={()=>handleClickbutton('2')}>2</button>
     <button  onClick={()=>handleClickbutton('3')}>3</button>
     <button  onClick={()=>handleClickbutton('*')}>*</button>

     </div>

     <div style={{display:'flex'}}> 
     <button  onClick={()=>handleClickbutton('C')}>C</button>
     <button  onClick={()=>handleClickbutton('0')}>0</button>
     <button  onClick={()=>handleClickbutton('=')}>=</button>
     <button  onClick={()=>handleClickbutton('/')}>/</button>
     </div>

    </div>
  );
}

export default App;
