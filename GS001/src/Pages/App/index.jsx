
import { useRoutes,BrowserRouter, Route } from 'react-router-dom';
import Home from '../Home/index';
import AboutMe from '../AboutMe';
import Contacto from '../Contacto';
import NotFound from '../NotFound';
import Productos from '../Productos';
import NavBar from '../../Components/Navbar';

const AppRoutes = () => {
let routes = useRoutes([
  {path: '/', element: <Home/>},
  {path: '/aboutme', element: <AboutMe/>},
  {path: '/contacto', element: <Contacto/>},
  {path: '/productos', element: <Productos/>},
  {path: '/*', element: <NotFound/>},
])
return routes
}

const  App = () => {
  return (
<BrowserRouter>
<NavBar/>
<AppRoutes/>
</BrowserRouter>
  )
}

export default App
