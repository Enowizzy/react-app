/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Dashboard from '../dashboard/Dashboard';
import Footer from '../footer/Footer';
import Logout from '../logout/Logout';
import Sidebar from '../sidebar/Sidebar';
import Topbar from '../topbar/Topbar';
import './AminHome.css';

function AdminHome() {

    return (
        <div>
            <body id="page-top">

                {/*  <!-- Page Wrapper --> */}
                <div id="wrapper">

                    <Sidebar />

                    {/*  <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/*  <!-- Main Content --> */}
                        <div id="content">

                            <Topbar />

                            <Dashboard />

                        </div>
                        {/*   <!-- End of Main Content -->

                        <!-- Footer --> */}
                        <Footer />
                        {/* <!-- End of Footer --> */}

                    </div>
                    {/*  <!-- End of Content Wrapper --> */}

                </div>
                {/*  <!-- End of Page Wrapper -->

                <!-- Scroll to Top Button--> */}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

                {/*  <!-- Logout Modal--> */}
                <Logout />
                {/*  <!-- Logout Modal--> */}

            </body>
        </div>
    )
}

export default AdminHome;
