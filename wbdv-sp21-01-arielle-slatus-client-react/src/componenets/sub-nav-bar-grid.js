import React from 'react'
import {Link} from "react-router-dom";
import '../style.css'


const SubNavBarGrid = () =>
    <thead className=" row container-xxl ats-sticky-list-bar">
        <tr className="row container-lg flex-nowrap ats-align-center-horizontal">

            <th className="col-xl-9 col-lg-8 col-md-8 col-sm-10 col-xs-10">Recent Documents</th>
            <th className="col-xl-2 col-lg-2 col-md-2 d-none d-md-table-cell">Owned by me</th>
            <th className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-2 ">
                <Link to="/courses/table">
                    <i className="fas fa-list float-right ats-sub-nav-bar-icon"></i>

                </Link>
                <i class="fas fa-folder ats-sub-nav-bar-icon float-right"></i>
                <i className="fas fa-sort-alpha-up-alt ats-sub-nav-bar-icon float-right"></i>


            </th>
        </tr>
    </thead>

export default SubNavBarGrid