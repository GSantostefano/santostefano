import { useState } from 'react';
import Layout from '../../Components/Layout';
import SideNav from '../../Components/SideNav/SideNav';
import TransactionLog from '../../Components/Componente/TransactionLog';
import LibroDiario from '../../Components/Componente/LibroDiario';
import TodoList from '../../Components/Componente/TodoList';
import MyCalendar from '../../Components/Componente/MyCalendar';

import LibroContable from '../../Components/Componente/LibroContable';
import InversionesActivosIntangibles from '../../Components/Componente/InversionesActivosIntangibles';
import CuentasCRUD from '../../Components/Componente/CuentasCRUD';
function Home() {
  const [visibleComponent, setVisibleComponent] = useState('');

  const handleClick = (component) => {
    setVisibleComponent(visibleComponent === component ? '' : component);
  };

  return (
    <Layout>
      <SideNav visibleComponent={visibleComponent} onClick={handleClick} />
      <div className='flex flex-col items-center text-pretty text-neutral-300 w-8/12'>
        {visibleComponent === 'Libro Diario' && <Preflop />}
        {visibleComponent === 'TransactionLog' && <TransactionLog />}
        {visibleComponent === 'LibroDiario' && <LibroDiario/>}
        {visibleComponent === 'TodoList' && <TodoList />}
        {visibleComponent === 'MyCalendar' && <MyCalendar />}
        {visibleComponent === 'InversionesActivosIntangibles' && <InversionesActivosIntangibles />}
        {visibleComponent === 'LibroContable.jsx' && <LibroContable />}
        {visibleComponent === 'CuentasCRUD' && <CuentasCRUD />}
        
      </div>
    </Layout>
  );
}

export default Home;
