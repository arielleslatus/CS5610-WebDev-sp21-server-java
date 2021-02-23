import React from 'react'
import {Link} from "react-router-dom";

const SubNavBarTable = () =>
    <thead className=" row container-xxl ats-sticky-list-bar">
        <tr className="col-2"></tr>
        <tr className="row container-lg">

            <th className="col-xs-11 col-sm-11 col-md-7">Title</th>
            <th className="col-2 d-none d-md-block">Owned by</th>
            <th className="col-2 d-none d-md-block">Last Modified</th>
            <th className="col-xs-1 col-sm-1">
                <i className="fas fa-sort-alpha-up-alt ats-icon-spacing"></i>
                <i className="fas fa-folder ats-icon-spacing"></i>
                <Link to="/courses/grid">
                    <i className="fas fa-table float-right"></i>
                </Link>
            </th>
        </tr>
    </thead>

export default SubNavBarTable