import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../Home/index';
import AboutMe from '../AboutMe';
import Contacto from '../Contacto';
import NotFound from '../NotFound';
import Productos from '../Productos';
import NavBar from '../../Components/Navbar';
import Perfil from '../Perfil';
import Footer from '../../Components/Footer';
import Preguntas from '../../Components/Componente/Preguntas';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/aboutme', element: <AboutMe /> },
    { path: '/contacto', element: <Contacto /> },
    { path: '/productos', element: <Productos /> },
    { path: '/jabones', element: <Productos /> },
    { path: '/velas', element: <Productos /> },
    { path: '/sales-de-baño', element: <Productos /> },
    { path: '/deco-concreto', element: <Productos /> },
    { path: '/preguntas', element: <Preguntas /> },
    { path: '/perfil', element: <Perfil /> },
    { path: '/*', element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex   flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <AppRoutes />
          
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
