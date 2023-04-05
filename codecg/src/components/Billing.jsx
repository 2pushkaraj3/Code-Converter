import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { Button } from "@mui/material";
const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className="Input">
    <input placeholder="Code" className="py-4 px-6 box-shadow container text-gradient "floatLabelType="Auto"/>
    
    <div className="Button">
      <Button variant='contained' className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient  outline-none ${styles}`}>Submit</Button>
      </div>
      </div>
  
  </section>
);

export default Billing;