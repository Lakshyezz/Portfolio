// import insta from "/"
import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () =>{

   return(
    <div className="navbar"> 
        <Sidebar/>

        <div className="wrapper">
        {/* <motion.img className="logo-image"
         initial = {{opacity: 0, scale:.5}}
            animate = {{opacity: 1 , scale: 1}}
            transition={{duration: .5}}
        src="/designCode.png"/> */}
            <motion.span
            initial = {{opacity: 0, scale:.5}}
            animate = {{opacity: 1 , scale: 1}}
            transition={{duration: .5}}
            > Lakshay </motion.span>
            <div className="social">    
            {/* https://www.linkedin.com/in/lakshay-deep-270a96195/ */}
                <a href=""> <img src="/instagram.png"/></a>
                <a href="https://www.linkedin.com/in/lakshay-deep-270a96195/"> <img src="/linkedin.png"/></a>
                <a href="#"> <img src="/github.png"/></a>
                <a href="#"> <img src="/behance.png"/></a>
            </div>
        </div>
    </div>
   )
}



export default Navbar