import { appleImg, bagImg, searchImg } from '../../utils';
import { navLists } from '../../constants';

const Navbar = () => {
  return (
    <header className='w-full py-5 max-sm:px-11 px-5 flex justify-between items-center'>
        <nav className='flex w-full screen-max-width'>   
            <a href="#hero">
                <img src={appleImg} alt="logo" width={24} height={18}/>
            </a>
            <div className='flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((nav) => (
                    <div key={nav} className='px-5 text-md cursor-pointer text-gray hover:text-white hover:font-semibold transition-all'>
                        {nav}
                    </div>
                ))}
            </div>
            <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                <img className='cursor-pointer' src={searchImg} alt="search" width={18} height={18}/>
                <img className='cursor-pointer' src={bagImg} alt="bag" width={18} height={18}/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar