import React, { useEffect } from "react";
import urlParse from "../utils/urlParse.js";

const Sso = () => {
  //相当于生命周期函数componentDidMount
  useEffect(() => {
    let token = urlParse.getUrlKey("token", window.location.href);
    if (token) {
      window.sessionStorage.accessToken = token;
      let i = document.location.href.lastIndexOf("/");
      document.location.href = document.location.href.substring(0, i);
    } else {
      let url = process.env.REACT_APP_SSO_URL + "/api/Login?appid=111&redirecturl=" + encodeURI(document.location.href);
      console.log("redirect to", url);
      document.location.href = url;
    }
  }, []);

  return (
    <div>
      <header> SSO </header>
    </div>
  );
};

export default Sso;
