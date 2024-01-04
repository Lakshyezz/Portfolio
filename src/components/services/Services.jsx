import { color, inView, motion ,useInView} from 'framer-motion' 
import "./services.scss"
import { useRef } from 'react'

const services = [
    {
        branding: "branding",
        para: "Magna esse commodo culpa ut.Deserunt nostrud aliquip Lorem anim cillum amet qui laboris eiusmod. Ipsum voluptate sunt eiusmod esse quis nostrud quis est. Sunt fugiat magna id reprehenderit cupidatat laboris ea in excepteur amet.",
        button: "GO"            
    },
    {
        branding: "branding",
        para: "Magna esse commodo culpa ut.Deserunt nostrud aliquip Lorem anim cillum amet qui laboris eiusmod. Ipsum voluptate sunt eiusmod esse quis nostrud quis est. Sunt fugiat magna id reprehenderit cupidatat laboris ea in excepteur amet.",
        button: "GO"            
    },
    {
        branding: "branding",
        para: "Magna esse commodo culpa ut.Deserunt nostrud aliquip Lorem anim cillum amet qui laboris eiusmod. Ipsum voluptate sunt eiusmod esse quis nostrud quis est. Sunt fugiat magna id reprehenderit cupidatat laboris ea in excepteur amet.",
        button: "GO"            
    },
    {
        branding: "branding",
        para: "Magna esse commodo culpa ut.Deserunt nostrud aliquip Lorem anim cillum amet qui laboris eiusmod. Ipsum voluptate sunt eiusmod esse quis nostrud quis est. Sunt fugiat magna id reprehenderit cupidatat laboris ea in excepteur amet.",
        button: "GO"            
    }
    
]
const getAlert = () => alert("ALERT")

const variants = {
    initial: {  
        x: -290,
        y: 100,
        opacity: 0
    },
    animate:{
        x: 0,
        y: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: .1,
        }
    }
}
const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref, {margin: "-100px"})

    return (
        <motion.div className="services"
        ref={ref}
         variants={variants} 
         initial="initial" 
        //  whileInView= "animate"
        animate = {isInView && "animate"}
         >
                <motion.div className="textContainer" 
                 variants={variants} > <p>
                I focus on building and designing products  
                <br/> to help your brand grow
                </p>
                <hr/>
                </motion.div>

                <motion.div className="titleContainer"  variants={variants} > 
                    <div className='title'>
                     <img src='/people.webp'/> 
                     <h1> <motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas</h1>
                    </div>
                    <div className='title'>
                     <h1> <motion.b whileHover={{color: "orange"}}>For Your</motion.b> Business</h1>
                     <button>WHAT WE DO</button>
                    </div>
                </motion.div>

                <motion.div className="listContainer"  variants={variants} > 
                {services.map((service,i) => 
                <motion.div key={i} className='box' whileHover={{background: "lightgray", color: "black"}}>
                    <h2>{service.branding}</h2>
                    <p>{service.para}</p>
                    <button onClick={getAlert}> {service.button} </button>
                </motion.div> 
                )}
                </motion.div>
        </motion.div>
    )
}

export default Services