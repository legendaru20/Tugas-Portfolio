 import React from "react";
 import './style.css';
 import { SectionWrapper } from "../hoc";
 import { motion } from "framer-motion";
 import { textVariant } from "../utils/motion";

 function Works () {
    return (
      <motion.div
      className="container" variants={textVariant()}>
            <h1 className="title-text">Some of Skill that I Have </h1>

            <div className="skill-box">
                <span className="title">HTML</span>
                <div className="skill-bar">
                    <span className="skill-per html">
                        <span className="tooltip">85%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">CSS</span>
                <div className="skill-bar">
                    <span className="skill-per css">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">JavaScript</span>
                <div className="skill-bar">
                    <span className="skill-per javascript">
                        <span className="tooltip">50%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Mysql</span>
                <div className="skill-bar">
                    <span className="skill-per mysql">
                        <span className="tooltip">60%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">ReactJS</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs">
                        <span className="tooltip">60%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Laravel</span>
                <div className="skill-bar">
                    <span className="skill-per Laravel">
                        <span className="tooltip">75%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Tailwind and Bootstrap</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs">
                        <span className="tooltip">60%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">PHP</span>
                <div className="skill-bar">
                    <span className="skill-per PHP">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Adobe Premiere Pro</span>
                <div className="skill-bar">
                    <span className="skill-per premiere">
                        <span className="tooltip">90%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Adobe After Effect</span>
                <div className="skill-bar">
                    <span className="skill-per ae">
                        <span className="tooltip">70%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Corel</span>
                <div className="skill-bar">
                    <span className="skill-per corel">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">3D Blender</span>
                <div className="skill-bar">
                    <span className="skill-per blender">
                        <span className="tooltip">40%</span>
                    </span>
                </div>
            </div>
        </motion.div>
    )
 }

 export default SectionWrapper(Works, "work");