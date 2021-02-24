import React from 'react'
import {Link} from "react-router-dom";

const SubNavBarTable = () =>
    <thead className=" row container-xxl ats-sticky-list-bar">
        <tr className="row container-lg flex-nowrap ats-align-center-horizontal">
            <th scope="col" className="col-lx-4 col-lg-4 col-md-7 col-sm-7 col-xs-11">Title</th>
            <th scope="col" className="col-xl-3 col-lg-3 col-md-3 col-sm-3 d-none d-sm-table-cell">Owned by</th>
            <th scope="col" className="col-xl-4 col-lg-3 d-none d-lg-table-cell">Last Modified</th>
            <th scope="col" className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-2 float-left flex-nowrap">
                <Link to="/courses/grid">
                    <i className="fas fa-table float-right ats-sub-nav-bar-icon"></i>
                </Link>
                <i className="fas fa-folder ats-sub-nav-bar-icon float-right"></i>
                <i className="fas fa-sort-alpha-up-alt ats-sub-nav-bar-icon float-right"></i>
            </th>
        </tr>
    </thead>

export default SubNavBarTable