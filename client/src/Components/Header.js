import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <span>HostelCanteen</span>
        <ul className='nav'>
            <li className='prod'>
                <Link to='/Breakfast'>BreakfastPage</Link>
            </li>
            <li className='prod1'>
                <Link to='/Cart'>CartPage</Link>
            </li>

        </ul>
    </div>

  )
}

export default Header