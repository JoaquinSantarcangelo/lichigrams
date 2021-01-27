import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import { db } from "../src/firebase";
import { useToast } from "@chakra-ui/react";

//Material Icons
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";

//Components
import Form from "../components/Form";
import Copyright from "../components/Copyright";

//Framer Motion Variants
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

export default function Home() {
  //Firebase Add Document
  const addDocument = (testimonio) => {
    db.collection(collection)
      .add(testimonio)
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  //Toast Notification
  const toast = useToast();

  //Handle Submit
  const handleSubmit = (age, message, pronouns) => {
    //Validation

    console.log("Sending message");
    const testimonio = {
      age: age,
      message: message,
      pronouns: pronouns,
      date: new Date(),
    };

    toast({
      title: "Testimonio enviado",
      description: "Gracias por tu aporte 💗",
      status: "success",
      position: "top",
      duration: 3000,
      isClosable: true,
    });

    addDocument(testimonio);
  };

  //--Hooks--//
  const [collection, setCollection] = useState("deciloDeUnaVez");

  //Collapse Hooks (future feature)
  const [cardCollaped, setCardCollaped] = useState(false);

  return (
    <>
      <Head>
        <title>Lichigrams</title>
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
            <div className="selector">
              <div
                onClick={() => setCollection("consultrolo")}
                className={
                  collection === "consultrolo"
                    ? "collection active"
                    : "collection"
                }
              >
                Consultrolo
              </div>
              <div
                onClick={() => setCollection("deciloDeUnaVez")}
                className={
                  collection === "deciloDeUnaVez"
                    ? "collection active"
                    : "collection"
                }
              >
                Decilo de una vez
              </div>
            </div>
            <motion.div variants={variants1} className="title">
              {collection === "consultrolo" && (
                <motion.h1 variants={variants0}>Consultrolo</motion.h1>
              )}
              {collection === "deciloDeUnaVez" && (
                <motion.h1 variants={variants0}>Decilo de una vez</motion.h1>
              )}
            </motion.div>
          </motion.div>
          <Form handleSubmit={handleSubmit} />
        </motion.div>

        <Copyright />
      </motion.div>
    </>
  );
}
