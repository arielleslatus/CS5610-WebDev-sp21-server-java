import React from 'react'
import {Link} from "react-router-dom";

const SubNavBarTable = () =>
    <thead className=" row container-xxl ats-sticky-list-bar">
        <tr className="col-md-2 col-sm-1 col-xs-0 d-none d-lg-table-cell"></tr>
        <tr className="row container-lg flex-nowrap">

            <th scope="col" className="col-lx-6 col-lg-6 col-md-7 col-sm-7 col-xs-11">Title</th>
            <th scope="col" className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-table-cell">Owned by</th>
            <th scope="col" className="col-xl-2 col-lg-2 d-none d-lg-table-cell">Last Modified</th>
            <th scope="col" className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 float-left flex-nowrap">
                <i className="fas fa-sort-alpha-up-alt ats-icon-spacing float-left"></i>
                <i className="fas fa-folder ats-icon-spacing float-left"></i>
                <Link to="/courses/grid" className="float-left">
                    <i className="fas fa-table float-left"></i>
                </Link>
            </th>
        </tr>
    </thead>

export default SubNavBarTable