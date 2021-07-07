import './App.css';
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';

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

export default App;
