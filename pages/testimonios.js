import React, { useEffect, useState } from "react";
import Head from "next/head";
import StarIcon from "@material-ui/icons/Star";
import { AnimatePresence, motion } from "framer-motion";
import { db } from "../src/firebase";
import { Spinner } from "@chakra-ui/react";

import Copyright from "../components/Copyright";

const variantsTestimonio = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15,
    },
  }),
  hidden: { opacity: 0 },
};

const Testimonio = ({ t, i }) => {
  return (
    <motion.div
      custom={i}
      initial="hidden"
      animate="visible"
      variants={variantsTestimonio}
      key={t.id}
      className="testimonio"
    >
      <div className="header">
        <div className="wrapper">
          <div className="age">
            <span>🎂</span>
            {t.data.age}
          </div>
          <div className="pronouns">Ella/El</div>
        </div>
        {/* <div className="addFav">
          <StarIcon />
        </div> */}
      </div>
      <div className="message">{t.data.message}</div>
    </motion.div>
  );
};

const testimonios = () => {
  const [testimonios, setTestimonios] = useState([]);

  const fetchMessages = () => {
    db.collection("testimonios")
      .orderBy("date", "desc")
      .limit(5)
      .get()
      .then(function (snapshot) {
        setTestimonios(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <>
      <Head>
        <title>Testimonios • Girl anda a terapia</title>
      </Head>
      <div className="testimonios">
        <div className="overlay"></div>
        <div className="top-header">
          <div className="title">Testimonios</div>
          {/* <div className="favoritos">
          <StarIcon />
          <span>Favoritos</span>
        </div> */}
        </div>
        <div className="wrapper">
          <AnimatePresence exitBeforeEnter>
            {testimonios.map((t, i) => {
              return <Testimonio t={t} i={i} />;
            })}
          </AnimatePresence>
          {testimonios.length < 1 && (
            <Spinner thickness="4px" size="xl" color="brand.100" />
          )}
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default testimonios;
