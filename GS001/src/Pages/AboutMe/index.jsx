import Layout from '../../Components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faCss3Alt, faJs, faReact, faGit, faNodeJs } from '@fortawesome/free-brands-svg-icons'; // íconos de marcas
import { faDatabase, faCode, faServer } from '@fortawesome/free-solid-svg-icons'; // íconos sólidos
import perfilImage from '../../assets/perfil2.JPG'; // Ajusta la ruta según la ubicación de tu imagen


function AboutMe() {
  return (
    <Layout>
      <div className=' w-9/12'>
      <img src={perfilImage} alt="Perfil" className="rounded-full w-5/12 h-auto mx-auto mb-4" />

        <h1 className='text-red-600 text-lg'>About Me</h1>
        <section>
          <p>Hello! 👋🏻 I'm Gabriel, and I have a background in information systems engineering and business administration.</p>
        </section>

        <section>
          <h2 className='text-red-600 mt-5 text-lg'>Professional Growth</h2>
          <p>
            I'm passionate about personal and professional growth, with a strong focus on teamwork. In 2023, I made a significant decision to reinvent myself professionally by diving into an area I've always been enthusiastic about - programming.
          </p>
        </section>

        <section>
          <h2 className='mt-5 text-red-600 text-lg'>Web Development Skills</h2>
          <p>As part of my journey in web development, I have honed my skills in various technologies, including:</p>
          <ul className="mt-5 flex space-x-4 mb-4">
            <li >HTML <FontAwesomeIcon icon={faHtml5} /></li>
            <li>CSS <FontAwesomeIcon icon={faCss3Alt} /></li>
            <li>JavaScript <FontAwesomeIcon icon={faJs} /></li>
            <li>Git <FontAwesomeIcon icon={faGit} /></li>
            <li>NodeJS <FontAwesomeIcon icon={faNodeJs} /></li>
            <li>Express <FontAwesomeIcon icon={faServer} /></li>
            <li>React <FontAwesomeIcon icon={faReact} /></li>
            <li>Redux <FontAwesomeIcon icon={faCode} /></li> {/* Aquí se usa faCode */}
            <li>SQL <FontAwesomeIcon icon={faDatabase} /></li> {/* Aquí se usa faDatabase */}
            <li>Sequelize <FontAwesomeIcon icon={faDatabase} /></li> {/* Aquí se usa faDatabase */}
          </ul>
        </section>

        <section>
          <h2 className='text-red-600  mt-5 text-lg'>Passion for Web Application Development</h2>
          <p>
            I'm truly passionate about web application development, with a keen focus on creating innovative and scalable solutions to tackle real-world challenges. I have a problem-solving mindset and a strong work ethic to drive projects forward.
          </p>
        </section>

        <section>
          <h2 className='text-red-600 mt-5 text-lg'>Business Administration Experience</h2>
          <p>
            My background in business administration is an asset, enabling me to contribute a comprehensive understanding of production processes and a range of experiences, including:
          </p>
          <ul>
            <li>Customer service (both internal and external)</li>
            <li>Business creation</li>
            <li>Project development</li>
            <li>Accounting processes</li>
          </ul>
        </section>

        <section>
          <p className='text-lime-500  mt-5  text-lg'>Feel free to connect with me, and let's explore opportunities for collaboration and growth!</p>
          <div className="mt-5 flex space-x-4 mb-4">
            <a href="https://github.com/GSantostefano" target="_blank" rel="noopener noreferrer" className=" hover:text-lime-500 ">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-santostefano/" target="_blank" rel="noopener noreferrer" className=" hover:text-lime-500 ">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.instagram.com/gacho.santoss/" target="_blank" rel="noopener noreferrer" className=" hover:text-lime-500 ">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://wa.me/5493435066052" target="_blank" rel="noopener noreferrer" className="hover:text-lime-500  ">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </div>
        </section>
        

      </div>
    </Layout>
  );
}

export default AboutMe;
