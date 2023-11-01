import {motion} from "framer-motion"

const variants = {
  open: {
    transition: {
      staggerChildren: .15,
    }
  },
  closed: {
    transition: {
      staggerChildren: .05,
      staggerDirection: -1,
    }
  }
}
const itemVariants = {
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: 50,
    opacity: 0
  }
}

const Links = () => {

  const items = [
    "Home",
    "Experience",
    "Projects",
    "Contact"
  ]

  return (
    <motion.div className='links' variants={variants}>
      {items.map((item) =>
        <motion.a key={item} href={`#${item}` }
        whileHover={{scale: 1.1}}
        whileTap={{scale:0.9}}
          variants={itemVariants}
        >{item}</motion.a>
      )}
    </motion.div>
  )
}

export default Links