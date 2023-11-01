import { useRef } from 'react'
import  './parallax.scss'
import {motion, useScroll, useTransform}  from 'framer-motion'

const Parallax = ({type}) => {

    // using useScroll to monitor scroll progress for parallax
    // and parallax is this div that classname of "parallax"
   
    // we can have reference to that div with the help of useRef hook from react
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"]
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
    const yPlanet = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className='parallax'
    ref={ref}
        style={{background:type=== "services" ?
         "linear-gradient(180deg,#041321,#01060B)"
         : "linear-gradient(180deg,#01060B,#293136"}}>
        <motion.h1
          style={{ y: yBg }}
          >
          {type== "services" ? "What We Do?": "What We Did"}
        </motion.h1>

        <motion.div  className='mountains'></motion.div>
        <motion.div  style = {{ y: yPlanet ,
        backgroundImage: `url(${type === "services" ? "/planets.png": "/sun.png"})`}}
          className='planets'></motion.div>
        <motion.div style={{x: yPlanet}} className='stars'></motion.div>
    </div>
  )
}

export default Parallax