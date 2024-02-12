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
    Hello there! I'm a passionate developer who finds joy in crafting innovative solutions within the realm of web development. I thrive on the creative aspects of my work, constantly seeking new and exciting ways to bring ideas to life through coding. Beyond the digital realm, I wear multiple hats as a writer and poet, expressing my thoughts and emotions through the art of words. Music is another avenue where I see my future unfolding, as I aspire to become a singer. When not immersed in the world of technology and creativity, you'll often find me behind the lens, capturing moments through photography, or embarking on exciting journeys because, above all, I am an avid traveler who cherishes the beauty of exploration. Life is a canvas, and I relish the opportunity to fill it with a vibrant palette of experiences.
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