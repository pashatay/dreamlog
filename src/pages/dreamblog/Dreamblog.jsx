import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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

  const noDreams = (
    <>
      {userHasLoggedIn ? (
        <>
          <h1 className="no-dreams">You have no dreams yet.</h1>
          <Link to="/adddream">
            <button className="adddream-button">Add a Dream</button>
          </Link>
        </>
      ) : (
        <h1 className="no-dreams">No dreams yet.</h1>
      )}
    </>
  );
  const displayDreams = (
    <>
      {userHasLoggedIn ? (
        <CopyToClipboard text={window.location.href}>
          <button className="share-blog-button" onClick={() => alert("copied")}>
            <h3>Share </h3> <i class="ri-share-forward-fill"></i>
          </button>
        </CopyToClipboard>
      ) : (
        false
      )}
      <section className="allDreamsBlog">{allDreams}</section>
    </>
  );
  return (
    <>
      <Header />
      {publicDreams.length < 1 ? noDreams : displayDreams}
    </>
  );
}

export default Dreamblog;
