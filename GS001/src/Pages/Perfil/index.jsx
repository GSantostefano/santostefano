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
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
          Editar
        </button>
          </div>
    </Layout>
  )
}

export default Perfil