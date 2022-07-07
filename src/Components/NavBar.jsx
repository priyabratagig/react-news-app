import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { tailwindClass } from '../tailwind/expandClasses'

const label = tailwindClass`absolute top-[50%] -translate-y-1/2 right-2 text-4xl z-10 md:hidden`;
const nav = (() => {
  const main = tailwindClass`flex flex-col items-center gap-2 w-max absolute right-0 top-0 transition-[top] duration-500 border-2 p-4 rounded-md invisible -z-10 bg-white`;
  const md = tailwindClass`md:flex-row md:justify-around md:gap-[unset] md:w-full md:static me:transition-none md:border-0 md:p-[unset] md:rounded-none md:visible md:z-0`;
  const peer = tailwindClass`peer-checked:top-full peer-checked:visible peer-checked:z-10`;
  return main + ' ' + md + ' ' + peer;
})();
const link = ({ isActive }) => {
  let result = tailwindClass`text-lg`;
  result += ' ' + (isActive ? tailwindClass`border-b-2 border-b-red-400 scale-125 px-2 bg-slate-200 bg-opacity-25` : '');
  return result;
};

const checkboxRef = React.createRef(null);
const toggleCheckbox = () => {
  if (checkboxRef.current !== null)
    checkboxRef.current.checked = !checkboxRef.current.checked;
}

export const NavBar = ({ className = '' }) => (
  <>
    <header className={`border-b-2 sticky top-0 bg-white z-10 md:relative md:top-[unset] ${className}`}>
      <h1 className="py-4 text-center">
        <span className="text-5xl font-semibold inline-block rotate-[15deg] align-top text-blue-300">
          G
        </span>
        <span className="text-5xl font-semibold">Blog</span>
      </h1>
      <label htmlFor="nav-menu-toggle" className={label}>≡</label>
      <input type="checkbox" id="nav-menu-toggle" className="hidden peer" ref={checkboxRef} />
      <nav className={nav}>
        <NavLink to="/" className={link} onClick={toggleCheckbox}>Home</NavLink>
        <NavLink to="/tech" className={link} onClick={toggleCheckbox}>Technology</NavLink>
        <NavLink to="/bollywood" className={link} onClick={toggleCheckbox}>Bollywood</NavLink>
        <NavLink to="/hollywood" className={link} onClick={toggleCheckbox}>Hollywood</NavLink>
        <NavLink to="/fitness" className={link} onClick={toggleCheckbox}>Fitness</NavLink>
        <NavLink to="./food" className={link} onClick={toggleCheckbox}>Food</NavLink>
      </nav>
    </header>
    <Outlet />
  </>
);
export default NavBar;
