
import { NavLink } from 'react-router-dom';
import profile from '../../../assets/Logo.png'

const Navbar = () => {
   
    return (
        <div className='bg-slate-300 mt-4'>
            <nav className="flex justify-between items-center p-4 px-5">
                <img className='lg:w-40 w-20' src={profile} alt="" />
            <ul className='flex gap-10'>
                <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }
                >
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/donations"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }
                >
                    Donation
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/statistics"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }
                >
                    Statistics
                </NavLink>
                </li>
            </ul>
            </nav>
        </div>




    );
};

export default Navbar;