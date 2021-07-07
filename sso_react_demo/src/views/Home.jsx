import React, { useState, useEffect } from "react";
import axios from "axios";

// 跨域请求携带用户凭据(cookie等)
axios.defaults.withCredentials = true;

const Home = () => {
  const baseUrl = process.env.REACT_APP_SSO_URL;
  const [state, setState] = useState({
    username: "",
    realName: "",
  });
  
  //相当于生命周期函数componentDidMount
  useEffect(() => {
    init();
  }, []);

  function init() {
    axios.get(`${baseUrl}/api/currentuser`).then(
      (res) => {
        if (res.data) {
          setState({
            ...state,
            username: res.data.username,
            realName: res.data.realName,
          });
        } else {
          setState({ ...state, username: null, realName: null });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  function logout() {
    axios
      .get(`${baseUrl}/api/logout`)
      .then((res) => {
        setState({ ...state, username: null, realName: null });
        alert("已登出");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <p>
        当前用户：<span>{state.username}</span>
        <span style={{ marginLeft: "10px" }}>{state.realName}</span>
        {state.username ? null : (
          <a href="sso" v-if="!username">
            单点登录
          </a>
        )}
        <br />
      </p>
      <button className="btn" onClick={logout}>
        登出
      </button>
    </div>
  );
};

export default Home;
