// src/Pages/Home/index.jsx
import { useState } from 'react';
import Layout from '../../Components/Layout';
import SideNav from '../../Components/SideNav/SideNav';
import Preflop from '../../Components/Etapas/Preflop';
import Flop from '../../Components/Etapas/Flop';
import Turn from '../../Components/Etapas/Turn';
import River from '../../Components/Etapas/River';
import Maths from '../../Components/Componente/Maths';


function Home() {
  const [visibleComponent, setVisibleComponent] = useState('');

  const handleClick = (component) => {
    setVisibleComponent(visibleComponent === component ? '' : component);
  };

  return (
    <div>
      <Layout>
        <SideNav visibleComponent={visibleComponent} onClick={handleClick} />
        <div className='flex flex-col items-center text-pretty fixed text-neutral-300 w-8/12'>
          {visibleComponent === 'Preflop' && <Preflop />}
          {visibleComponent === 'Flop' && <Flop />}
          {visibleComponent === 'Turn' && <Turn />}
          {visibleComponent === 'River' && <River />}
          {visibleComponent === 'Maths' && <Maths />}
          
        </div>
       
      </Layout>
    </div>
  );
}

export default Home;
