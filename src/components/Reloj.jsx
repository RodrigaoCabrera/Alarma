import React, { useRef, useEffect, useState } from "react";
import audio from '../media/piano-scary-hallowen.mp3';
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
      setM((prev) => {
        if(m > 10){
          return prev - 1
        }else{
          return '0'.concat(String(Number(prev) - 1))
      }
    })
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
    setSesion(25);
    setPause(true)
    
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
    }else if(e.target.id === 'increment'){
      setTime(time + 1);
    }else{return}
  };

  

  return (
    <div className="flex flex-col bg-green-300 h-full justify-center">
      
      <h1 className='text-center text-5xl font-bold'>Alarma</h1>

      <div className='flex md:flex-row flex-col text-center md:justify-around'>

        <div>
          <div className="text-center mb-2 text-2xl">{time}</div>
          <IcrementDecrement IncrDecrTime={IncrDecrTime} />
        </div>
        <div>
          <div className='text-center mb-2 text-2xl'>{sesion}</div>
          <IcrementDecrement handleIncrementDecrement={handleIncrementDecrement} />
        </div>

      </div>


      <div className="flex self-center text-white justify-center w-1/3 bg-gray-600 my-8 py-5 rounded-full">
        <div>
          <h1 className="text-center text-xl mb-2">Cuenta regresiva</h1>
          <div className="text-center text-3xl">{m}:{s}</div>
        </div>
      </div>

      <div className="self-center">
        <button onClick={handleClick} className="mx-2 bg-green-500 hover:bg-green-700 text-white font-bold px-2 rounded">{pause ? 'Iniciar' : 'Detener'}</button>
        <button onClick={handleReset} className="outline-none rounded hover:bg-red-700 hover:text-white px-2 border">Reiniciar</button>
        <audio id='audio' src={audio}></audio>
      </div>

    </div>
  );
}