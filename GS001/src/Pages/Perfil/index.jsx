import Layout from '../../Components/Layout'

function Perfil() {
  return (
    <Layout>
      <div className="mt-5">
        
      <div className="mb-4">
          <h3 className="text-lg font-semibold">Usuario:</h3>
          <p className="text-sm">Gabosan@gmail.com</p>
          </div>    
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Contraseña</h3>
          <p className="text-sm">***********</p>
          </div>
          <button
          className="inline-flex justify-center py-2 px-4 border shadow-sm text-sm font-medium rounded-md text-black border-black bg-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 hover:text-white hover:border-black focus:ring-green-600">
          Editar
        </button>
          </div>
    </Layout>
  )
}

export default Perfil