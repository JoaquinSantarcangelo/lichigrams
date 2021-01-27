import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ClickAwayListener } from "@material-ui/core";

// Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SendIcon from "@material-ui/icons/Send";

//Framer Motion Variants
const variants0 = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.5, when: "beforeChildren" },
  },
  exit: { y: 20, opacity: 0 },
};

const variants1 = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0, when: "beforeChildren" },
  },
  exit: { y: 20, opacity: 0 },
};

//Validation & Animations
const validation = (age, message, pronouns) => {
  let validated = true;

  //Animations & Validation
  if (age === "") {
    document.querySelector("#age").classList.add("error");
    setTimeout(
      () => document.querySelector("#age").classList.remove("error"),
      1000
    );
    validated = false;
  }

  if (pronouns.length < 1) {
    document.querySelector("#pronouns").classList.add("error");
    setTimeout(
      () => document.querySelector("#pronouns").classList.remove("error"),
      1000
    );
    validated = false;
  }

  if (message === "") {
    document.querySelector("#message").classList.add("error");
    setTimeout(
      () => document.querySelector("#message").classList.remove("error"),
      1000
    );
    validated = false;
  }

  return validated;
};

const Form = ({ handleSubmit, collection }) => {
  // Form State
  const [message, setMessage] = useState("");
  const [age, setAge] = useState("");
  const [pronouns, setPronouns] = useState({
    ella: false,
    elle: false,
    el: false,
    otro: "",
  });

  // Modal Pronouns State
  const [pronounsBox, setPronounsBox] = useState(false);

  const onSubmit = () => {
    age.trim();
    const auxPronouns = [];
    if (pronouns.ella) auxPronouns.push("Ella");
    if (pronouns.elle) auxPronouns.push("Elle");
    if (pronouns.el) auxPronouns.push("El");
    if (pronouns.otro !== "") auxPronouns.push(pronouns.otro);

    if (validation(age, message, auxPronouns)) {
      handleSubmit(age, message, auxPronouns);

      // Reset Form
      setAge("");
      setMessage("");
      setPronouns({ ella: false, elle: false, el: false, otro: "" });
    }
  };

  return (
    <motion.div
      variants={variants0}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="form"
    >
      {/* Topform */}
      <AnimatePresence exitBeforeEnter>
        {collection === "consultrolo" && (
          <motion.div
            variants={variants1}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="top-form"
          >
            {/* Age */}
            <div id="age" className="age active">
              <input
                onChange={(e) => setAge(e.target.value)}
                value={age}
                placeholder="Edad"
                type="number"
              />
            </div>
            {/* Pronouns */}
            <div className="pronouns">
              <div
                id="pronouns"
                onClick={() => setPronounsBox(!pronounsBox)}
                className="wrapper"
              >
                Pronombres
                <ExpandMoreIcon />
              </div>
              <AnimatePresence exitBeforeEnter>
                {pronounsBox && (
                  <ClickAwayListener onClickAway={() => setPronounsBox(false)}>
                    <motion.div
                      variants={variants1}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="pronouns-box"
                    >
                      <div
                        onClick={() =>
                          setPronouns({
                            ...pronouns,
                            ella: !pronouns.ella,
                          })
                        }
                        className={pronouns.ella ? "pronoun active" : "pronoun"}
                      >
                        <div className="circle" />
                        Ella
                      </div>
                      <div
                        onClick={() =>
                          setPronouns({
                            ...pronouns,
                            elle: !pronouns.elle,
                          })
                        }
                        className={pronouns.elle ? "pronoun active" : "pronoun"}
                      >
                        <div className="circle" />
                        Elle
                      </div>
                      <div
                        onClick={() =>
                          setPronouns({
                            ...pronouns,
                            el: !pronouns.el,
                          })
                        }
                        className="pronoun"
                        className={pronouns.el ? "pronoun active" : "pronoun"}
                      >
                        <div className="circle" />
                        El
                      </div>
                      <div className="pronoun">
                        <input
                          onChange={(e) =>
                            setPronouns({ ...pronouns, otro: e.target.value })
                          }
                          placeholder="Otro"
                          value={pronouns.otro}
                          type="text"
                        />
                      </div>
                    </motion.div>
                  </ClickAwayListener>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Message */}
      <div id="message" className="message">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Testimonio"
          name="message"
        ></textarea>
      </div>
      {/* Submit Button */}
      <div onClick={() => onSubmit()} className="submit">
        <SendIcon />
        Enviar
      </div>
    </motion.div>
  );
};

export default Form;
