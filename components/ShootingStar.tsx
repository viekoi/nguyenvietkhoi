'use client'
import React,{useState,useEffect}from 'react'
import { cn } from '@/lib/utils';

interface ShootingStarProps{
  index:number
}


const ShootingStar:React.FC<ShootingStarProps>= ({index}) => {
 
  const[delay,setDelay] = useState( Math.random() * 10);
  const[duration,setDuration] = useState( Math.random()*4 + 6);
  const [top,setTop] = useState(Math.random()*50);




  
 
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDelay(Math.random()*7);
  //     setDuration(Math.random()*4 + 3)
  //     setTop(Math.random()*30)
  //     setleft(Math.random()*80)
  //   },14000);
  //   return () => clearInterval(interval);
  // }, []);

 
  
  

  return (
    <div className={cn(`themeBtn_stars`)} 
      style={{top:`${top}%`,left:`${index *10}%`,animationDelay:`${delay}s`,animationDuration:`${duration}s`}}
    />
  )
}

export default ShootingStar