import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import RenderSmoothImage from "render-smooth-image-react";

//Components
import Form from "../components/Form";
import Copyright from "../components/Copyright";

const variants1 = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, when: "beforeChildren" },
  },
  exit: { y: 20, opacity: 0 },
};

const variants0 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren" },
  },
};

export default function Home() {
  const handleSubmit = (age, message, pronouns) => {
    //Validation
    age.trim();

    //Animations
    if (age === "") {
      document.querySelector("#age").classList.add("error");
      setTimeout(
        () => document.querySelector("#age").classList.remove("error"),
        1000
      );
    }

    if (pronouns.length < 1) {
      document.querySelector("#pronouns").classList.add("error");
      setTimeout(
        () => document.querySelector("#pronouns").classList.remove("error"),
        1000
      );
    }

    if (message === "") {
      document.querySelector("#message").classList.add("error");
      setTimeout(
        () => document.querySelector("#message").classList.remove("error"),
        1000
      );
    }

    // Send Message
    if (age && message && pronouns.length < 1) {
      const testimonio = {
        age: age,
        message: message,
        pronous: pronouns,
        date: new Date(),
      };

      console.log(testimonio);
    }
  };

  return (
    <>
      <Head>
        <title>Girl, andá a terapia</title>
      </Head>
      <motion.div
        variants={variants0}
        initial="hidden"
        animate="visible"
        className="app"
      >
        <motion.div
          variants={variants1}
          initial="hidden"
          animate="visible"
          className="card"
          exit="exit"
        >
          <motion.div variants={variants1} className="info">
            <motion.div variants={variants1} className="oiga-podcast">
              <RenderSmoothImage src={"/img/oigaPodcast.png"} />
            </motion.div>
            <motion.div variants={variants1} className="logo">
              <RenderSmoothImage src={"/img/Logo.png"} />
            </motion.div>
            <div className="links">
              <div className="link">
                <a
                  target="_blank"
                  href="https://open.spotify.com/show/1WjEo53591zEBLfEL4Zhl2?si=83HtsCgUR4-qmLyG2mZ4rQ"
                >
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/spotify-2.svg"
                    alt=""
                  />
                </a>
              </div>
              <div className="link">
                <a
                  target="_blank"
                  href="https://open.spotify.com/show/1WjEo53591zEBLfEL4Zhl2?si=83HtsCgUR4-qmLyG2mZ4rQ"
                >
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/apple.svg"
                    alt=""
                  />
                </a>
              </div>
              <div className="link">
                <a
                  target="_blank"
                  href="https://open.spotify.com/show/1WjEo53591zEBLfEL4Zhl2?si=83HtsCgUR4-qmLyG2mZ4rQ"
                >
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/google-podcasts.svg"
                    alt=""
                  />
                </a>
              </div>
              <div className="link">
                <a
                  target="_blank"
                  href="https://open.spotify.com/show/1WjEo53591zEBLfEL4Zhl2?si=83HtsCgUR4-qmLyG2mZ4rQ"
                >
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/tunein-icon.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </motion.div>
          <Form handleSubmit={handleSubmit} />
        </motion.div>

        <Copyright />
      </motion.div>
    </>
  );
}
