import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <section id="Converter" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <a href="Converter">
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        </a>
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
  </section>
);

export default GetStarted;