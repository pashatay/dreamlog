import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import { Context } from "../../Context";
import { CopyToClipboard } from "react-copy-to-clipboard";
import DisplayDreamBlog from "../../components/displaydreamblog/DisplayDreamBlog";

import Header from "../../components/header/Header";

function Dreamblog() {
  const { getPublicDreams, publicDreams, userHasLoggedIn } = useContext(
    Context
  );
  const { id } = useParams();

  useEffect(() => {
    getPublicDreams(id);
  }, []);

  const allDreams = publicDreams.map((dream, i) => {
    return <DisplayDreamBlog data={dream} key={i} />;
  });

  return (
    <div>
      <Header />
      {userHasLoggedIn ? (
        <CopyToClipboard text={window.location.href}>
          <button onClick={() => alert("copied")}>Share</button>
        </CopyToClipboard>
      ) : (
        false
      )}
      <section className="allDreamsBlog">{allDreams}</section>
    </div>
  );
}

export default Dreamblog;
