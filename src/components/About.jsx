import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`} style={{ margin: '100px 0px' }}>
          About Me
        </h2>
        <br/>
        <br/>
        <p className={`${styles.sectionSubText} text-center`} style={{ margin: '0 100px' }}>
        Saya adalah seorang yang sangat tertarik dengan dunia teknologi dan komputer. Khususnya web, saya mempunyai
        pengalaman dalam mengembangkan aplikasi web yang efisien dan responsif menggunakan berbagai teknologi seperti HTML, CSS, Mysql, React, Laravel dan JavaScript. Selain itu, saya juga memiliki 
        pemahaman tentang konsep desain web yang menarik dan pengalaman pengguna yang baik. Saya percaya bahwa dengan kemampuan saya dalam pengembangan web, saya dapat memberikan 
        kontribusi yang berarti dalam lingkungan kerja yang dinamis dan membantu client mencapai tujuan mereka melalui solusi web yang inovatif dan kreatif. Saya selalu bersemangat untuk 
        terus belajar 
        dan mengikuti perkembangan terbaru dalam industri teknologi, dan siap untuk menjadi bagian dari tim yang berdedikasi dalam menciptakan solusi web yang luar biasa.
        </p>
      </motion.div>
    </>
  );
}

export default SectionWrapper(About, "about");
