

const Componente = () => {


  return (
    <div className="flex p-5">
    <div
    className='bg-black/30 ml-5 cursor-pointer w-56 h-60 rounded-lg hover:bg-black/10 hover:shadow-black hover:shadow-lg'
      >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-black/40 rounded-lg  text-xs m-2 px-3 py-0.5'>Producto</span>
        <img className='w-full h-full object-cover rounded-lg' src='https://images.pexels.com/photos/6214479/pexels-photo-6214479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
       
      </figure>
      <p className='flex justify-between items-center'>
        <span className='text-sm font-light p-2'>Web Design</span>
        <span className='text-lg font-medium p-2'>$300</span>
      </p>
    </div>

<div
className='bg-black/30 ml-5 cursor-pointer w-56 h-60 rounded-lg hover:bg-black/10 hover:shadow-black hover:shadow-lg'
  >
  <figure className='relative mb-2 w-full h-4/5'>
    <span className='absolute bottom-0 left-0 bg-black/40 rounded-lg  text-xs m-2 px-3 py-0.5'>Producto</span>
    <img className='w-full h-full object-cover rounded-lg' src='https://images.pexels.com/photos/6214479/pexels-photo-6214479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
   
  </figure>
  <p className='flex justify-between items-center'>
    <span className='text-sm font-light p-2'>Web Design</span>
    <span className='text-lg font-medium p-2'>$300</span>
  </p>
</div>

<div
className='bg-black/30 ml-5 cursor-pointer w-56 h-60 rounded-lg hover:bg-black/10 hover:shadow-black hover:shadow-lg'
  >
  <figure className='relative mb-2 w-full h-4/5'>
    <span className='absolute bottom-0 left-0 bg-black/40 rounded-lg  text-xs m-2 px-3 py-0.5'>Producto</span>
    <img className='w-full h-full object-cover rounded-lg' src='https://images.pexels.com/photos/6214479/pexels-photo-6214479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
   
  </figure>
  <p className='flex justify-between items-center'>
    <span className='text-sm font-light p-2'>Web Design</span>
    <span className='text-lg font-medium p-2'>$300</span>
  </p>
</div>

</div>
  )
}

export default Componente