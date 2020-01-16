import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";
import { Context } from "../../Context";
import { CopyToClipboard } from "react-copy-to-clipboard";
import DisplayDreamBlog from "../../components/displaydreamblog/DisplayDreamBlog";

import Header from "../../components/header/Header";

function Dreamblog() {
  const { dreams, getPublicDreams, publicDreams, userHasLoggedIn } = useContext(
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
      <h1 className="no-dreams">You have no dreams yet.</h1>
      <Link to="/adddream">
        <button className="adddream-button">Add a Dream</button>
      </Link>
    </>
  );
  const displayDreams = (
    <>
      {userHasLoggedIn ? (
        <CopyToClipboard text={window.location.href}>
          <button onClick={() => alert("copied")}>Share</button>
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
      {dreams.length < 1 ? noDreams : displayDreams}
    </>
  );
}

export default Dreamblog;
