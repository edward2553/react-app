import { BrowserRouter, NavLink } from 'react-router-dom';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className='main-layout'>
            <nav>
                <img src={logo} alt='React logo' />
                <ul>
                    <li>
                        <NavLink to={'/home'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/users'}>Users</NavLink>
                    </li> 
                </ul>
            </nav>
        </div>
    </BrowserRouter>
  )
}
