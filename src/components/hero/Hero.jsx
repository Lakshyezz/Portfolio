import './hero.scss'
import {motion} from "framer-motion"

const textVariants = { 
    initial: {
      x: -500,
      opacity:0,
    },
    animate: {
      x: 0,
      opacity:1,
      transition: {
        duration: 1,
        staggerChildren: .1,
      }
    },
    scrollButton:{
      opacity: 0,
      y: 10,
      transition:{
        duration:2,
        repeat: Infinity
      }
    }
}
const sliderVariants = { 
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%" ,
      transition: {
        repeatType: "mirror",
        duration: 20,
        repeat: Infinity,
      }
    },
}



const Hero = () => {
  return (
    <div className='hero'>
        <div className='wrapper'>
            <motion.div className='textContainer' variants={textVariants}
              initial = "initial"
              animate = "animate"
            >
              <motion.h2 variants={textVariants}>Hey! I am Lakshay</motion.h2>
              
              <motion.div variants={textVariants} className='developerText'>
              <motion.h3 variants={textVariants} className='app-web'>App and Web</motion.h3>
              <motion.h1 variants={textVariants}>Developer</motion.h1>
              </motion.div>
              <motion.div variants={textVariants} className='buttons'>
                  <motion.button variants={textVariants} className='button1'>See the Latest Works</motion.button>
                  <motion.button variants={textVariants} className='button2'>Contact Me</motion.button>
              </motion.div>
                  <motion.img animate = "scrollButton" variants={textVariants} src='/scroll.png'/>
              </motion.div>
              <motion.div className='slidingTextContainer'
              variants={sliderVariants}
               initial = "initial"
               animate = "animate">
                   Code Experience Design Live
              </motion.div>
            <div className='imageContainer'>
                <img  src='/pp.png'/>
            </div>
            
        </div>
    </div>
  )
}

export default Hero