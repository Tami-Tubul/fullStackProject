import { Link, Outlet} from "react-router-dom";
import { useSelector } from 'react-redux';
import {Tabs } from "@material-ui/core";
import { useState } from "react";
import * as React from 'react';


const MainPageComp = () => {


    const storeData = useSelector(state => state)

    const [tabColor, setTabColor] = useState({})

    return (<>

        {storeData.loginUser && <h2> Welcome {storeData.loginUser.firstName + " " + storeData.loginUser.lastName}</h2>}

        <Tabs style={{ display: "inline-flex" }} centered >
            <Link to="movies" onClick={() => setTabColor({movies: "gold" })} style={{ textDecoration: "none", padding: "10px", border: "1px solid black", margin: "5px" ,background:tabColor.movies}}>Movies</Link>
            <Link to="subscriptions" onClick={() => setTabColor({subscriptions: "gold" })} style={{ textDecoration: "none", padding: "10px", border: "1px solid black", margin: "5px" ,background:tabColor.subscriptions}}>Subscriptions</Link>
            {storeData.loginUser?.userName === "Admin" && <Link to="userManagement" onClick={() => setTabColor({userManagement: "gold" })} style={{ textDecoration: "none", padding: "10px", border: "1px solid black", margin: "5px" ,background:tabColor.userManagement}}>User Management</Link>}
            <Link to="/" style={{ textDecoration: "none", padding: "10px", border: "1px solid black", margin: "5px" }}>Log Out</Link>
        </Tabs>

        <Outlet />

    </>)
}

export default MainPageComp;
