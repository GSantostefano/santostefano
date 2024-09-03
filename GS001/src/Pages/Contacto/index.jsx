import { useState } from 'react';
import Layout from '../../Components/Layout';

function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Correo electrónico enviado correctamente');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Error al enviar el correo electrónico');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el correo electrónico');
    }
  };

  return (
    <Layout >
      <div className="flex justify-center items-center h-full " >
      <div className=" min-w-96 max-w-7xl mx-auto px-4 py-8 ">
        <h1 className="text-3xl  font-bold mb-6">Contacto</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium ">Nombre:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} requiyellow
              className="mt-1 block w-full  border-yellow-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium ">Correo Electrónico:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} requiyellow
              className="mt-1 block w-full  border-yellow-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium ">Mensaje:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} requiyellow
              className="mt-1 block w-full border-yellow-300  rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" />
          </div>
          <button type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
            Enviar
          </button>
        </form>
      </div>
      </div>
    </Layout>
  );
}

export default Contacto;
