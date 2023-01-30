import React from 'react';
import {Link} from 'react-router-dom';
import './Style.css';

const Header = () => {
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
                <Link to='/Cart'>CartPage</Link>
            </li>

        </ul>
    </div>

  )
}

export default Header