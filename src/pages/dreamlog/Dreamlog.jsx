import React, { useEffect, useContext } from "react";
import { Context } from "../../Context";
import DisplayDreamLog from "../../components/displaydreamlog/DisplayDreamLog";
import styles from "./styles.css";

import Header from "../../components/header/Header";
import Modal from "../../components/displaydreamlog/Modal";

function Dreamlog() {
  const { getAllDreams, dreams } = useContext(Context);

  useEffect(() => {
    getAllDreams();
  }, []);

  const allDreams = dreams.map((dream, i) => {
    return <DisplayDreamLog data={dream} key={i} />;
  });

  return (
    <div>
      <Header />
      <section className="allDreams">
        {allDreams}
        <Modal data={dreams} />
      </section>
    </div>
  );
}

export default Dreamlog;
