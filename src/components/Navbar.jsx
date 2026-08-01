
import { Link, NavLink } from 'react-router';
import user from '../assets/user.png'
import { use } from 'react';
import { AuthContext } from '../provider/AuthContext';

const Navbar = () => {

    const {user} = use(AuthContext)

    return (
        <div className='flex justify-between items-center'>
            <div className='text-accent-content font-semibold'>{user?.name || 'Name'}</div>
            <div className='text-accent text-lg flex gap-5'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className='flex justify-center items-center gap-3'>
                <img className='cursor-pointer' src={user} alt="" />
                <Link to={'/auth/login'} className='btn btn-primary px-8 font-medium text-lg'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;