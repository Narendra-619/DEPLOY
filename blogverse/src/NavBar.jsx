import { Link } from 'react-router-dom'
import {Bomb} from 'lucide-react'

const NavBar = () => {
    return (
        <div className="h-full flex justify-around items-center border-1 bg-gray-900 border-gray-200 sm:w-full md:w-5/6 3xl:w-3/4 sm:py-2 md:py-4 3xl:py-8 text-x1">
            <div className='flex absolute sm:static md:relative 3xl:relative'>
                <Bomb className='relative right-1 top-2 text-yellow-50 sm:right-0 sm:top-1 md:right-2 md:top-4 3xl:right-4 3xl:top-8'/>
                <p className="text-white text-sm md:text-3xl 3xl:text-5xl sm:text-xs">BlogVerse</p>
            </div>
            <div className='relative flex right-70 sm:static md:relative 3xl:relative'>
                <Link to="/" className="text-purple-500 px-5 py-2 rounded-lg sm:px-2 sm:py-1 md:px-6 md:py-3 3xl:px-12 3xl:py-6">Home</Link>
                <Link to="/ProductCard" className="text-purple-500 font-semibold px-4 py-2 rounded-lg sm:px-2 sm:py-1 md:px-6 md:py-3 3xl:px-12 3xl:py-6">Product Card</Link>
            </div>
            <div className="items-center flex gap-5 relative left-60 sm:gap-2 md:gap-8 3xl:gap-16 sm:left-0 md:left-10 3xl:left-20">
                <div>
                    <Link to="/Login" className="text-purple-500 font-semibold sm:text-xs md:text-base 3xl:text-xl">Login</Link>
                </div>
                <div>
                    <Link to="/SignUp" className="text-purple-500 font-semibold px-4 py-2 rounded-lg sm:px-2 sm:py-1 md:px-6 md:py-3 3xl:px-12 3xl:py-6">Sign Up</Link>
                </div>
            </div>
        </div>
    )
}
export default NavBar;