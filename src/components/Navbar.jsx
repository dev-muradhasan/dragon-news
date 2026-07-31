
import { NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='w-40'></div>
            <div className='text-accent text-lg flex gap-5'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className='flex justify-center items-center gap-3'>
                <img src={user} alt="" />
                <button className='btn btn-primary px-8 font-medium text-lg'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;