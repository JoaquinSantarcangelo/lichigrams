import React from "react";

const Copyright = () => {
  return (
    <div className="copyright">
      <h4>Hecho con </h4>
      <div className="heart">
        <img src={"/img/heart-rainbow.png"} />
      </div>
      <h4>
        <a target="_blank" href="http://joaquinsant.ar">
          por Joaquín Santarcángelo
        </a>
      </h4>
    </div>
  );
};

export default Copyright;
