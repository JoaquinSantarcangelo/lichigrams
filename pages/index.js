import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import RenderSmoothImage from "render-smooth-image-react";
import { db } from "../src/firebase";

//Material Icons
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";

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

const variantsCard = {
  hidden: { y: "-100vh" },
  visible: {
    y: 0,
    transition: { delay: 0.1, duration: 0.4, when: "beforeChildren" },
  },
  exit: { y: "-100vh", opacity: 0 },
};

const variants0 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren" },
  },
};

const addDocument = (testimonio) => {
  db.collection("testimonios")
    .add(testimonio)
    .then(function () {
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
};

export default function Home() {
  const handleSubmit = (age, message, pronouns) => {
    //Validation

    console.log("Sending message");
    const testimonio = {
      age: age,
      message: message,
      pronous: pronouns,
      date: new Date(),
    };

    addDocument(testimonio);
  };

  const [cardCollaped, setCardCollaped] = useState(false);

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
        {/* Open Card Button */}
        <motion.div
          variants={variantsCard}
          onClick={() => setCardCollaped(false)}
          initial="hidden"
          animate={cardCollaped ? "visible" : "hidden"}
          className="open-card-button"
        >
          <SendIcon />
        </motion.div>
        <motion.div
          variants={variantsCard}
          initial="hidden"
          animate={cardCollaped ? "hidden" : "visible"}
          className="card"
          exit="exit"
        >
          {/* Close Button */}
          {/* <div onClick={() => setCardCollaped(true)} className="close-button">
            <CloseIcon />
          </div> */}
          <motion.div
            variants={variants1}
            initial="hidden"
            animate="visible"
            className="info"
          >
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
