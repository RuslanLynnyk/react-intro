import {  NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app">
    <header className="header">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
    </header>
    <div className="content">
      <aside className="aside"></aside>

       <main>
        Layout component
        <Outlet />
    
      </main> 
    </div>
    <footer className="footer">
      <p>footer</p>
    </footer>
    </div>
  )
}

export default Layout