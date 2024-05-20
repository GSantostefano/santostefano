// Layout.jsx
const Layout = ({ children }) => {
  return (
    <div className='flex flex-col items-center text-pretty text-neutral-300 mt-20 w-full'>
      <div className="flex items-center border-t border-red-600 w-3/4 mb-5"></div>
      <div className="flex-grow w-full flex">
        {children}
      </div>
    </div>
  )
}

export default Layout;
