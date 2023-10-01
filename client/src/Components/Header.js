import React , {useContext} from 'react';
import {Link} from 'react-router-dom';
import './Style.css';
import { Cart } from '../Context';

const Header = () => {
    const {cart} = useContext(Cart);
  return (
    <div>
        <span className='header'>HostelCanteen</span>
        <ul className='nav'>
            <li >
                <Link to='/Breakfast'>BreakfastPage</Link>
            </li>
            <li >
                <Link to='/Lunch'>LunchPage</Link>
            </li>
            <li >
                <Link to='/Dinner'>DinnerPage</Link>
            </li>
            <li >
                <Link to='/Cart'>cart ({cart.length})
                </Link>
            </li>

        </ul>
    </div>

  )
}

export default Header