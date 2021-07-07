import Home from '../views/Home'
import Sso from '../views/Sso'

let routes = [
  { path: '/home', component: Home },
  { path: '/sso', component: Sso },
  { path: '/', exact: true, component: Home },
]

export default routes
