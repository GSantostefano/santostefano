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
import SalesBaño from '../../Components/SalesBaño/SalesBaño';
import DecoConcreto from '../../Components/DecoConcreto/index';
import Velas from '../../Components/Velas/index';
import Promociones from '../../Components/Promociones';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/aboutme', element: <AboutMe /> },
    { path: '/contacto', element: <Contacto /> },
    { path: '/productos', element: <Productos /> },
    { path: '/jabones', element: <Productos /> },
    { path: '/promociones', element: <Promociones /> },
    { path: '/sales-de-baño', element: <SalesBaño /> },
    { path: '/velas', element: <Velas /> },
    { path: '/deco-concreto', element: <DecoConcreto /> },
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
