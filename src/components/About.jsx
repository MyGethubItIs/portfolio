import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (

  <Tilt className="xs:w-[250px] w-full">
    <motion.div
    variants={fadeIn("right", "spring", 0.5 *index, 0.75)}
    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
<div
options={{
  max: 45,
  scale: 1,
  speed: 450
}}
className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly item-center flex-col"
>
<img src={icon} alt={title}
className="w-160 h-16 object-contain" />
<h3 className="text-white text-[20px]
font-bold text-center">{title}</h3>
</div>

</motion.div>
  </Tilt>

  )
}

const About = () => {
  return (
  <>
  <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>Overview.</h2>
  </motion.div>
  <motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
  >
   As a data analyst with a penchant for turning numbers into narratives, I navigate the wild world of data like a detective on a mission—complete with a magnifying glass and a cup of coffee strong enough to fuel a small rocket. I specialize in uncovering hidden trends and insights that can transform businesses, all while ensuring I don't lose my sanity in the process. My skills extend to frontend development, where I craft websites that not only look good but also make data dance across the screen, creating a user experience that leaves visitors wondering if they’ve stumbled into a digital wonderland.
    When I'm not crunching numbers or coding, you can find me weaving words into compelling content that informs and entertains. I believe every dataset has a story to tell, and I’m here to be its storyteller—though I promise my jokes are better than your average spreadsheet. Whether it's developing interactive dashboards or creating eye-catching designs, I thrive on making data accessible and engaging—because who says analytics can't have a sense of humor? In a world full of data, I aim to be the friendly guide who makes the complex simple and the boring a little less so.
  </motion.p>

  <div className="mt-20 flex flex-wrap gap-10">
    {services.map((service, index) =>(
      <ServiceCard key={service.title} index={ index} { ...service} />
    ))}
  </div>
  
  </>
  )
}

export default SectionWrapper (About, "about") 
