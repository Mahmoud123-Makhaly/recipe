import React from 'react'
 import Veggie from './../components/Veggie/Veggie';
import Popular from './../components/popular/Popular';
import { motion } from 'framer-motion';

 const Home = () => {
  return (
    <motion.div  animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{ ease: "easeOut", duration: .5}}>
     <Veggie/>
    <Popular/>
    </motion.div>
  )
}

export default Home
