import React from "react";
import {Button} from "@material-ui/core"
const Button = ({ styles }) => (
  <Button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </Button>
);

export default Button;