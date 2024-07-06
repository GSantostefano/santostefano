import { useState } from 'react';
import Layout from '../../Components/Layout';
import SideNav from '../../Components/SideNav/SideNav';
import Preflop from '../../Components/Etapas/Preflop';
import Flop from '../../Components/Etapas/Flop';
import LibroDiario from '../../Components/Componente/LibroDiario';
import TodoList from '../../Components/Componente/TodoList';
import MyCalendar from '../../Components/Componente/MyCalendar';

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
        {visibleComponent === 'Flop' && <Flop />}
        {visibleComponent === 'LibroDiario' && <LibroDiario/>}
        {visibleComponent === 'TodoList' && <TodoList />}
        {visibleComponent === 'MyCalendar' && <MyCalendar />}
      </div>
    </Layout>
  );
}

export default Home;
