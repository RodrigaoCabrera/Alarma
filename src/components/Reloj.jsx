import React, { useRef, useEffect, useState } from "react";
import audio from '../media/audio.mp3';
import IcrementDecrement from './IcrementDecrement'
export default function Reloj() {
  const [s, setS] = useState('00');
  const [m, setM] = useState('25');
  const [pause, setPause] = useState(true);
  const [sesion, setSesion] = useState(25);
  const [time, setTime] = useState(5);
  
  
  let intervalRef = useRef();
  const decreaseNum = () => {
  setS((prev) => {
    if(prev === '00'){
      return 59;
      
    }else if(prev > 10){
      return prev - 1;
    }
    else if(Number(prev) < 11 && Number(prev) > 0){
      return '0'.concat(String(prev - 1))
    }
  })
  
}
useEffect(() => {
  if(s === '00' && m === '00'){
    setM('0'.concat(String(time)))
    setS('00')
    const audio = document.getElementById('audio')
    audio.play();
  }
  if(s === 59 ){
    setM((prev) => '0'.concat(String(Number(prev) - 1)))
  }
  
  }, [s])

  useEffect(() => {
    if(m === 0 && s === 0 && time === 0){
      clearInterval(intervalRef.current);
    }
  }, [time])
  
 
  const handleClick = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(decreaseNum, 1000);
    }
    setPause((prev) => !prev);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setS('00');
    setM('25');
    setTime(5);
    setSesion(25)
    
  };

  const handleIncrementDecrement = (e) => {
    if(e.target.id === 'decrement' && Number(m) > 0){
        if(Number(m) > 10){
          setM(Number(m)-1);
          setSesion(sesion - 1);
        }else{
          setM('0'.concat(String(Number(m)-1)))
          setSesion(sesion - 1)
        }
      }else if(e.target.id === 'increment'){
        if(Number(m) > 10){
          setM(Number(m)+1);
          setSesion(sesion + 1);
        }else{
          setM('0'.concat(String(Number(m)+1)))
          setSesion(sesion + 1)
        }
      }else{return}
  };

  const IncrDecrTime = (e) => {
    if(e.target.id === 'decrement' && Number(time) > 0){
        setTime(time - 1);
    }else{
      setTime(time + 1);
    }
  };

  

  return (
    <div>
      <h1 className='text-center'>Alarma</h1>
      <div>{time}</div>
      <IcrementDecrement IncrDecrTime={IncrDecrTime} />
      <div>{sesion}</div>
      <IcrementDecrement handleIncrementDecrement={handleIncrementDecrement} />
      <div>{m}:{s}</div>
      <button onClick={handleClick} className="bg-green-500 hover:bg-green-700 text-white font-bold px-2 rounded">{pause ? 'Iniciar' : 'Detener'}</button>
      <button onClick={handleReset} className="outline-none rounded hover:bg-red-700 hover:text-white px-2 border">Reiniciar</button>
      <audio id='audio' src={audio}></audio>
    </div>
  );
}