import { BrowserRouter,Route,Switch} from "react-router-dom"; 
import Header from '../components/header'
import Home from '../components/home'
import AccountListPage from '../components/AccountListPage'
import AccountDetailPage from '../components/AccountDetailPage'
import AddAccountPage from '../components/addAcountPage'
import NotFoundPage from '../components/notFoundPage' 

const Routes =()=> (
    <BrowserRouter>
          <Header />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/view"  component={AccountListPage} />
              <Route exact path="/account/:id"  component={AccountDetailPage} />
               <Route exact path="/create"  component={AddAccountPage} />
              <Route component={NotFoundPage} />
            </Switch>
    </BrowserRouter>
   )

   export default Routes
 