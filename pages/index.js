import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import RenderSmoothImage from "render-smooth-image-react";

// Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SendIcon from "@material-ui/icons/Send";

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
  const [message, setMessage] = useState("");
  const [age, setAge] = useState(0);
  const [pronouns, setPronouns] = useState({});

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
          <motion.div variants={variants1} className="form">
            <div className="top-form">
              <div className="age active">
                <input placeholder="Edad" type="text" />
              </div>
              <div className="pronouns">
                Pronombres
                <ExpandMoreIcon />
              </div>
            </div>
            <div className="message">
              <textarea
                placeholder="Testimonio"
                name="testimonio"
                id="testimonio"
              ></textarea>
            </div>
            <div className="submit">
              <SendIcon />
              Enviar
            </div>
          </motion.div>
        </motion.div>
        <div className="copyright">
          <h4>Crafted with </h4>
          <div className="heart">
            <RenderSmoothImage src={"/img/heart-rainbow.png"} />
          </div>
          <h4>
            <a target="_blank" href="http://joaquinsant.ar">
              by Joaquín Santarcángelo
            </a>
          </h4>
        </div>
      </motion.div>
    </>
  );
}
