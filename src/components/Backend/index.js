import React, { Component } from 'react'

import '../../assets/extra-libs/c3/c3.min.css';
 import '../../assets/libs/chartist/dist/chartist.min.css';
import '../../assets/extra-libs/jvector/jquery-jvectormap-2.0.2.css';
import '../../assets/dist/css/style.min.css';

// // import '../../assets/libs/jquery/dist/jquery.min.js';
// // import '../../assets/libs/popper.js/dist/umd/popper.min.js';
// // import '../../assets/libs/bootstrap/dist/js/bootstrap.min.js';
// // import '../../assets/dist/js/app-style-switcher.js';
// // import '../../assets/dist/js/feather.min.js';
// // import '../../assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js';
// import '../../assets/dist/js/sidebarmenu.js';
// import '../../assets/dist/js/custom.min.js';
// // import '../../assets/extra-libs/c3/d3.min.js';
// // import '../../assets/extra-libs/c3/c3.min.js';
// // import '../../assets/libs/chartist/dist/chartist.min.js';
// // import '../../assets/libs/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.min.js';
// // import '../../assets/extra-libs/jvector/jquery-jvectormap-2.0.2.min.js';
// // import '../../assets/extra-libs/jvector/jquery-jvectormap-world-mill-en.js';
// import '../../assets/dist/js/pages/dashboards/dashboard1.min.js';
import logo from '../../assets/images/logo-icon.png'
import logotext from '../../assets/images/logo-text.png';


export class index extends Component {
    render() {
        return (
            <div>
        <header className="topbar" data-navbarbg="skin6">
  <nav className="navbar top-navbar navbar-expand-md">
    <div className="navbar-header" data-logobg="skin6">
      {/* This is for the sidebar toggle which is visible on mobile only */}
      <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i className="ti-menu ti-close" /></a>
      {/* ============================================================== */}
      {/* Logo */}
      {/* ============================================================== */}
      <div className="navbar-brand">
        {/* Logo icon */}
        <a href="index.html">
          <b className="logo-icon">
            {/* Dark Logo icon */}
            <img src={logo} alt="homepage" className="dark-logo" />
            {/* Light Logo icon */}
            <img src={logo} alt="homepage" className="light-logo" />
          </b>
          {/*End Logo icon */}
          {/* Logo text */}
          <span className="logo-text">
            {/* dark Logo text */}
            <img src={logotext} alt="homepage" className="dark-logo" />
            {/* Light Logo text */}
            <img src={logotext} className="light-logo" alt="homepage" />
          </span>
        </a>
      </div>
      {/* ============================================================== */}
      {/* End Logo */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* Toggle which is visible on mobile only */}
      {/* ============================================================== */}
      <a className="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="ti-more" /></a>
    </div>
    {/* ============================================================== */}
    {/* End Logo */}
    {/* ============================================================== */}
    <div className="navbar-collapse collapse" id="navbarSupportedContent">
      {/* ============================================================== */}
      {/* toggle and nav items */}
      {/* ============================================================== */}
      <ul className="navbar-nav float-left mr-auto ml-3 pl-1">
        {/* Notification */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle pl-md-3 position-relative" href="javascript:void(0)" id="bell" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span><i data-feather="bell" className="svg-icon" /></span>
            <span className="badge badge-primary notify-no rounded-circle">5</span>
          </a>
          <div className="dropdown-menu dropdown-menu-left mailbox animated bounceInDown">
            <ul className="list-style-none">
              <li>
                <div className="message-center notifications position-relative">
                  {/* Message */}
                  <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                    <div className="btn btn-danger rounded-circle btn-circle"><i data-feather="airplay" className="text-white" /></div>
                    <div className="w-75 d-inline-block v-middle pl-2">
                      <h6 className="message-title mb-0 mt-1">Luanch Admin</h6>
                      <span className="font-12 text-nowrap d-block text-muted">Just see
                        the my new
                        admin!</span>
                      <span className="font-12 text-nowrap d-block text-muted">9:30 AM</span>
                    </div>
                  </a>
                  {/* Message */}
                  <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                    <span className="btn btn-success text-white rounded-circle btn-circle"><i data-feather="calendar" className="text-white" /></span>
                    <div className="w-75 d-inline-block v-middle pl-2">
                      <h6 className="message-title mb-0 mt-1">Event today</h6>
                      <span className="font-12 text-nowrap d-block text-muted text-truncate">Just
                        a reminder that you have event</span>
                      <span className="font-12 text-nowrap d-block text-muted">9:10 AM</span>
                    </div>
                  </a>
                  {/* Message */}
                  <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                    <span className="btn btn-info rounded-circle btn-circle"><i data-feather="settings" className="text-white" /></span>
                    <div className="w-75 d-inline-block v-middle pl-2">
                      <h6 className="message-title mb-0 mt-1">Settings</h6>
                      <span className="font-12 text-nowrap d-block text-muted text-truncate">You
                        can customize this template
                        as you want</span>
                      <span className="font-12 text-nowrap d-block text-muted">9:08 AM</span>
                    </div>
                  </a>
                  {/* Message */}
                  <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                    <span className="btn btn-primary rounded-circle btn-circle"><i data-feather="box" className="text-white" /></span>
                    <div className="w-75 d-inline-block v-middle pl-2">
                      <h6 className="message-title mb-0 mt-1">Pavan kumar</h6> <span className="font-12 text-nowrap d-block text-muted">Just
                        see the my admin!</span>
                      <span className="font-12 text-nowrap d-block text-muted">9:02 AM</span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <a className="nav-link pt-3 text-center text-dark" href="javascript:void(0);">
                  <strong>Check all notifications</strong>
                  <i className="fa fa-angle-right" />
                </a>
              </li>
            </ul>
          </div>
        </li>
        {/* End Notification */}
        {/* ============================================================== */}
        {/* create new */}
        {/* ============================================================== */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i data-feather="settings" className="svg-icon" />
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item d-none d-md-block">
          <a className="nav-link" href="javascript:void(0)">
            <div className="customize-input">
              <select className="custom-select form-control bg-white custom-radius custom-shadow border-0">
                <option selected>EN</option>
                <option value={1}>AB</option>
                <option value={2}>AK</option>
                <option value={3}>BE</option>
              </select>
            </div>
          </a>
        </li>
      </ul>
      {/* ============================================================== */}
      {/* Right side toggle and nav items */}
      {/* ============================================================== */}
      <ul className="navbar-nav float-right">
        {/* ============================================================== */}
        {/* Search */}
        {/* ============================================================== */}
        <li className="nav-item d-none d-md-block">
          <a className="nav-link" href="javascript:void(0)">
            <form>
              <div className="customize-input">
                <input className="form-control custom-shadow custom-radius border-0 bg-white" type="search" placeholder="Search" aria-label="Search" />
                <i className="form-control-icon" data-feather="search" />
              </div>
            </form>
          </a>
        </li>
        {/* ============================================================== */}
        {/* User profile and search */}
        {/* ============================================================== */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="assets/images/users/profile-pic.jpg" alt="user" className="rounded-circle" width={40} />
            <span className="ml-2 d-none d-lg-inline-block"><span>Hello,</span> <span className="text-dark">Jason Doe</span> <i data-feather="chevron-down" className="svg-icon" /></span>
          </a>
          <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
            <a className="dropdown-item" href="javascript:void(0)"><i data-feather="user" className="svg-icon mr-2 ml-1" />
              My Profile</a>
            <a className="dropdown-item" href="javascript:void(0)"><i data-feather="credit-card" className="svg-icon mr-2 ml-1" />
              My Balance</a>
            <a className="dropdown-item" href="javascript:void(0)"><i data-feather="mail" className="svg-icon mr-2 ml-1" />
              Inbox</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="javascript:void(0)"><i data-feather="settings" className="svg-icon mr-2 ml-1" />
              Account Setting</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="javascript:void(0)"><i data-feather="power" className="svg-icon mr-2 ml-1" />
              Logout</a>
            <div className="dropdown-divider" />
            <div className="pl-4 p-3"><a href="javascript:void(0)" className="btn btn-sm btn-info">View
                Profile</a></div>
          </div>
        </li>
        {/* ============================================================== */}
        {/* User profile and search */}
        {/* ============================================================== */}
      </ul>
    </div>
  </nav>
</header>

  
  

            </div>
        )
    }
}

export default index
