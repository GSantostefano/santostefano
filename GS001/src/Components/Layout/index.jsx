

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col items-center text-pretty text-neutral-300 min-h-[100vh] mt-20'>
      {children}
    </div>
  )
}

export default Layout