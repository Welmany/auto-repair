import React from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from '../../constants/MenuItems'
import './dropdown.css'

function DropDown() {
    return (
        <ul className='dropdown-menu'>
            {MenuItems.map((item, index) => {
                return (
                    <li key={index}>
                        <Link className='menu-items' to={item.path}>
                            {item.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    )
}

export default DropDown;