import { useState } from 'react';
import Layout from '../../Components/Layout';
import SideNav from '../../Components/SideNav/SideNav';
import ControlStock from '../../Components/Componente/ControlStock';
import LibroDiario from '../../Components/Componente/LibroDiario';
import ProveedoresCRUD from '../../Components/Componente/ProveedoresCRUD';
import Inventario from '../../Components/Componente/Inventario';

import ClientesCRUD from '../../Components/Componente/ClientesCRUD';
import PedidosClientesCRUD from '../../Components/Componente/PedidosClientesCRUD';
import CuentasCRUD from '../../Components/Componente/CuentasCRUD';
import LibroDiarioMayor from '../../Components/Componente/LibroDiarioMayor';
import GestionCompras from '../../Components/Componente/GestionCompras';
// import 456CuentasCRUD from '../../Components/Componente/456CuentasCRUD';
// import 678CuentasCRUD from '../../Components/Componente/678CuentasCRUD';
// import 90CuentasCRUD from '../../Components/Componente/90CuentasCRUD';
function Home() {
  const [visibleComponent, setVisibleComponent] = useState('');

  const handleClick = (component) => {
    setVisibleComponent(visibleComponent === component ? '' : component);
  };

  return (
    <Layout>
      <SideNav visibleComponent={visibleComponent} onClick={handleClick} />
      <div className='flex flex-col items-center text-pretty text-black w-8/12'>
        {visibleComponent === 'Libro Diario' && <Preflop />}
        {visibleComponent === 'ControlStock' && <ControlStock />}
        {visibleComponent === 'LibroDiario' && <LibroDiario/>}
        {visibleComponent === 'LibroDiarioMayor' && <LibroDiarioMayor />}
        {visibleComponent === 'ProveedoresCRUD' && <ProveedoresCRUD />}
        {visibleComponent === 'Inventario' && <Inventario />}
        {visibleComponent === 'PedidosClientesCRUD' && <PedidosClientesCRUD />}
        {visibleComponent === 'ClientesCRUD.jsx' && <ClientesCRUD />}
        {visibleComponent === 'CuentasCRUD' && <CuentasCRUD />}
        
        
         {visibleComponent === 'GestionCompras' && <GestionCompras />}
       {/* {visibleComponent === '456CuentasCRUD' && <456CuentasCRUD />}
        {visibleComponent === '678CuentasCRUD' && <67890CuentasCRUD />}
        {visibleComponent === '90CuentasCRUD' && <90CuentasCRUD />} */}
      </div>
    </Layout>
  );
}

export default Home;
