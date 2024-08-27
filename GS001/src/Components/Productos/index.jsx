

const Componente = () => {


  return (
    <div className="flex p-5">
    <div
    className='bg-stone-950/30 ml-5 cursor-pointer w-56 h-60 rounded-lg hover:bg-stone-950/10 hover:shadow-black hover:shadow-lg'
      >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-stone-950/90 rounded-lg  text-xs m-2 px-3 py-0.5'>BlackRose</span>
        <img className='w-full h-full object-cover rounded-lg' src='../../../public/blackrose.jpg' alt=''/>
       
      </figure>
      <p className='flex justify-between items-center'>
        <span className='text-sm font-light p-2'>Jabón</span>
        <span className='text-lg font-medium p-2'>$3500</span>
      </p>
    </div>

<div
className='bg-stone-950/30 ml-5 cursor-pointer w-56 h-60 rounded-lg hover:bg-stone-950/10 hover:shadow-black hover:shadow-lg'
  >
  <figure className='relative mb-2 w-full h-4/5'>
    <span className='absolute bottom-0 left-0 bg-stone-950/40 rounded-lg  text-xs m-2 px-3 py-0.5'>Daily Repose</span>
    <img className='w-full h-full object-cover  rounded-lg' src='../../../public/dailyrepose.jpg' alt=''/>
   
  </figure>
  <p className='flex justify-between items-center'>
    <span className='text-sm font-light p-2'>Jabón</span>
    <span className='text-lg font-medium p-2'>$3500</span>
  </p>
</div>

<div
className='bg-stone-950/30 ml-5 cursor-pointer w-56 h-60 rounded-lg hover:bg-stone-950/10 hover:shadow-black hover:shadow-lg'
  >
  <figure className='relative mb-2 w-full h-4/5'>
    <span className='absolute bottom-0 left-0 bg-stone-950/40 rounded-lg  text-xs m-2 px-3 py-0.5'>ColdMint</span>
    <img className='w-full h-full object-cover rounded-lg' src='coldmint.jpg' alt=''/>
   
  </figure>
  <p className='flex justify-between items-center'>
    <span className='text-sm font-light p-2'>Jabón</span>
    <span className='text-lg font-medium p-2'>$3500</span>
  </p>
</div>

</div>
  )
}

export default Componente