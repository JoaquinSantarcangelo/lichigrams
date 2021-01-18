import Head from "next/head";
import { useState } from "react";

// Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function Home() {
  const [message, setMessage] = useState("");
  const [age, setAge] = useState(0);
  const [pronouns, setPronouns] = useState([]);

  return (
    <>
      <Head>
        <title>Girl, andá a terapia</title>
      </Head>
      <div className="app">
        <div className="card">
          <div className="info">
            <div className="oiga-podcast">
              <img src="/img/oigaPodcast.png" alt="" />
            </div>
            <div className="logo">
              <img src="/img/Logo.png" alt="" />
            </div>
            <div className="links">
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
            </div>
          </div>
          <div className="form">
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
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="submit">Enviar</div>
          </div>
        </div>
        <div className="copyright">
          <h4>Crafted with </h4>
          <img src="/img/heart-rainbow.png" alt="" />
          <h4>
            <a target="_blank" href="http://joaquinsant.ar">
              by Joaquín Santarcángelo
            </a>
          </h4>
        </div>
      </div>
    </>
  );
}
