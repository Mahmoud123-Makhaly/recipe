import React from 'react'
import { GiHamburger, GiChopsticks } from "react-icons/gi"
import { FaPizzaSlice, FaGlassMartini } from "react-icons/fa";
import "./Category.css"
import { NavLink } from 'react-router-dom';
const Category = () => {
    return (
        <div className='category d-flex justify-content-center align-items-center'>
            <NavLink to="/cussine/Italian" className="category-item">
                <GiHamburger />
                <h6>Italian</h6>
            </NavLink>
            <NavLink to="/cussine/American" className="category-item">
                <FaPizzaSlice />
                <h6>American</h6>
            </NavLink>
            <NavLink to="/cussine/Thai" className="category-item">
                <FaGlassMartini />
                <h6>Thai</h6>
            </NavLink>
            <NavLink to="/cussine/Japanese" className="category-item">
                <GiChopsticks />
                <h6>Japanese</h6>
            </NavLink>
        </div>
    )
}

export default Category