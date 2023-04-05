import React from 'react'
import { apple, bill,google,star,coinbase,clangu,cplus,java, python } from "../assets";
import {Button} from "@mui/material"
import styles, { layout } from "../style";
import { imglinks } from '../constants';
const Converter = () => {
  return (
    <section id="features" className={layout.sectionReverse}>


    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}> Easily covert your code; <br className="sm:block hidden" /> 

      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Enter the code of your choice for conversion
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <a href="https://www.computerhope.com/">
        <img src={python} alt="python" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        </a>
        <img src={clangu} alt="c" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" onclick="https://ide.geeksforgeeks.org"/>
        <img src={cplus} alt="cplus" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
        <img src={java} alt="java" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
        
      </div>
      <div className="Input">
    <input placeholder="Code" className="py-4 px-6 box-shadow container text-gradient "floatLabelType="Auto"/>
    
    <div className="Button">
      <Button variant='contained' className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient  outline-none ${styles}`}>Submit</Button>
      </div>
      </div>
      
    </div>
  </section>
  )
}

export default Converter