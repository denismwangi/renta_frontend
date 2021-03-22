import './navbar.css'


const Navbar = ({sidebarOpen, openSidebar})=> {
    return (
        <nav className="navbar">
            <div className="nav-icon" onClick={() =>openSidebar()}>
                <i className="fa fa-bars"></i>

            </div>
            <div className="navbar-left">
                <a href="#">users</a>
                <a href="#">users</a>
                <a className="active-link" href="#">Admin</a>
                </div>
            <div className="navbar-right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a><a href="#">
                    <img width="30"  />
                </a>
                


            </div>

        </nav>
    )
}
export default Navbar;