/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Footer.module.css";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
export default function Footer() {
  const open = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.container}>
      <p className={styles.credit}>
        Designed by{" "}
        {/* <a
          href="https://dribbble.com/shots/19328654-NFT-Marketplace-Website"
          target="_blank"
          rel="noreferrer"
        >
          Emon Pixel
        </a>{" "} */}
      </p>
      <div className={styles.socials}>
        <span>
          <FaLinkedinIn
            className={styles.icon}
            onClick={() => open("https://www.linkedin.com/in/shivam-kumar-singh-8b35131a9")}
          />
          <AiFillGithub
            className={styles.icon}
            onClick={() => open("https://github.com/shiv8115")}
          />
          <FaTwitter
            className={styles.icon}
            onClick={() => open("https://twitter.com/Shivams8115")}
          />
        </span>
        <a
          href="https://portfolio-tau-eight-48.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          ShivamSingh.com
        </a>
      </div>
      <div className={styles.logo}>
        <img src="https://i.imgur.com/UhzOw1n.png" alt="logo" />
        <h2>OpenRiver</h2>
      </div>
    </div>
  );
}
