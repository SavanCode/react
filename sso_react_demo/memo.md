### 项目创建

1. `yarn create-react-app sso_react_demo`
2. `yean add axios react-router react-router-dom`

### 环境配置文件

+ 安装`dotenv-cli`包

  `yarn global add dotenv-cli`

+ `.env`

  ```
  REACT_APP_SSO_URL='http://10.1.18.172/sso'
  ```

  *变量名只能以 `REACT_APP_`  开头*

  在代码中使用`process.env.REACT_APP_SSO_URL`读取配置内容

+ `.env.testing`

  ```
  REACT_APP_SSO_URL='https://goon.csci.com.hk/sso-test'
  ```


### 编写页面

+ `Home.jsx`
+ `Sso.jsx`

### 路由配置

+ `src/routes/index.js`

  ```js
  import Home from '../views/Home'
  import Sso from '../views/Sso'
  
  let routes = [
    { path: '/home', component: Home },
    { path: '/sso', component: Sso },
    { path: '/', component: Home },
  ]
  
  export default routes
  ```

  

+ 修改`App.js`

  ```js
  function App() {
    return (
      <div className="App">
        {/*这里要包裹一个Router组件才能使用Switcha或withRouter高阶组件*/}
        <BrowserRouter>
          <Switch>
            {
              routes.map((route) => <Route key={route.path} path={route.path} component={route.component} />)
            }
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  ```

+ 