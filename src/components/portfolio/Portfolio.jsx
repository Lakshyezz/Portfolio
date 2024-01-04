import { useRef } from 'react';
import './portfolio.scss';
import {motion, useScroll ,useSpring, useTransform}  from 'framer-motion'; 


const items = [
  { 
    id: 1,
    title: "React Commerce",
    img:"https://imgs.search.brave.com/jAHWlC07H1_C9WwxCqVQqFJyJ-rhA9OSd-s84DmocG0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC85a3dOMlJB/LmpwZw",
    desc: "Aliqua sint laboris elit veniam non. Dolore occaecat excepteur nulla enim magna magna non eu amet consequat. Nostrud do eu quis excepteur velit cupidatat incididunt aute qui ea occaecat est ex Lorem. Enim est cupidatat ipsum ullamco laborum veniam cupidatat nulla esse eiusmod nostrud sunt. Laborum ad veniam fugiat in. Eiusmod voluptate commodo amet fugiat cillum cillum proident sit quis labore veniam irure. In pariatur id mollit reprehenderit deserunt dolor mollit eu exercitation eiusmod dolore."
  },
  { 
    id: 2,
    title: "Angular BluBlu",
    img:"https://imgs.search.brave.com/tg0v7hlFGafV4e-pMiaQstrAhCaxkKZnJyN-EbtWsUE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5tZWVyby5jb20v/YmxvZy1tZWRpYS83/NTkvNWJhYzViZjMt/OTI0Zi00ODI1LWFk/MjAtYmEwNDhkM2Y5/MDFiLmpwZw",
    desc: "Aliqua sint laboris elit veniam non. Dolore occaecat excepteur nulla enim magna magna non eu amet consequat. Nostrud do eu quis excepteur velit cupidatat incididunt aute qui ea occaecat est ex Lorem. Enim est cupidatat ipsum ullamco laborum veniam cupidatat nulla esse eiusmod nostrud sunt. Laborum ad veniam fugiat in. Eiusmod voluptate commodo amet fugiat cillum cillum proident sit quis labore veniam irure. In pariatur id mollit reprehenderit deserunt dolor mollit eu exercitation eiusmod dolore."
  },
  { 
    id: 3,
    title: "Vanila Icecream",
    img:"https://imgs.search.brave.com/1pib9R9rHqtJy_azebvhSc2O01sYd_M6wRpR2wxIXA8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/NDEzMjY1OC9waG90/by91cmJhbi1za3ls/aW5lLWFuZC1saWdo/dC10cmFpbHMtYWdh/aW5zdC1jbGVhci1z/a3ktYXQtbmlnaHQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUhyTzlZRThKQmhE/RksyQXZGdm9DeGJ0/RkZ4SDQ3bmJ1dkdm/cW9NRURjR3M9",
    desc: "Aliqua sint laboris elit veniam non. Dolore occaecat excepteur nulla enim magna magna non eu amet consequat. Nostrud do eu quis excepteur velit cupidatat incididunt aute qui ea occaecat est ex Lorem. Enim est cupidatat ipsum ullamco laborum veniam cupidatat nulla esse eiusmod nostrud sunt. Laborum ad veniam fugiat in. Eiusmod voluptate commodo amet fugiat cillum cillum proident sit quis labore veniam irure. In pariatur id mollit reprehenderit deserunt dolor mollit eu exercitation eiusmod dolore."
  },
  { 
    id: 4,
    title: "Guilty af for bla bla bla",
    img:"https://imgs.search.brave.com/oB82w0NPsc3UO6jJhFVoPz2GzSFnll1kIQxs2p8FawU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzllL2Nl/L2Y3LzllY2VmNzZm/YTFmNDZkYTFjY2Fj/MDlkNjhhOWJkNDU5/LmpwZw",
    desc: "Aliqua sint laboris elit veniam non. Dolore occaecat excepteur nulla enim magna magna non eu amet consequat. Nostrud do eu quis excepteur velit cupidatat incididunt aute qui ea occaecat est ex Lorem. Enim est cupidatat ipsum ullamco laborum veniam cupidatat nulla esse eiusmod nostrud sunt. Laborum ad veniam fugiat in. Eiusmod voluptate commodo amet fugiat cillum cillum proident sit quis labore veniam irure. In pariatur id mollit reprehenderit deserunt dolor mollit eu exercitation eiusmod dolore."
  },
]

const Single = ({item}) =>{
  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target:ref, 
  })

  const y = useTransform(scrollYProgress, [0,1] , [-150, 150])

  return (<section > 
      <div className='container'>
        <div className='wrapper'>
       <div className='imageContainer' ref={ref}>
       <img src={item.img}></img>
       </div>
          <motion.div className='textContainer'
           style={{y}}
           >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
   </section>
   )
}

const Portfolio = () => {
   
  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target:ref, 
    offset:["end end", "start start"]
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className='portfolio' 
    ref={ref}
    >
    <div className='progress'>
      <h1>Personal Projects</h1>
      <motion.div style={{ scaleX }} className='progressBar'></motion.div>
    </div>
      {items.map(item => <Single item={item} key={item.id}/>
        )
      }
    </div>
  )
}

export default Portfolio;