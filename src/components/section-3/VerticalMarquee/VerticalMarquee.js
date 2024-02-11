//npm install react-fast-marquee --save
import Marquee from "react-fast-marquee";
import styles from "./VerticalMarquee.module.css";

export default function VerticalMarquee() {
  return (
    <div className={styles.marquee}>
      <Marquee direction="down" speed={30}>
        <p>Complementary colors are the colors that sit on opposite sides of the color wheel ●&nbsp;</p>
      </Marquee>
    </div>
  );
}