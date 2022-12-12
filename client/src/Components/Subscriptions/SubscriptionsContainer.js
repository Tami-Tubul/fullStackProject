import { useEffect } from "react";
import { NavLink, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import CardComp from "../../UI/Card";
import EditMemberComp from "./EditMember";

const SubscriptionsContainerComp = () => {

  const navigate = useNavigate()

  const url = useLocation().pathname;

  useEffect(() => {

    navigate("/subscriptions/members") // active the all members tab

  },[])


  return (

    <CardComp width="60%">
      <h2>Subscriptions</h2>
      <hr></hr>
      {
        !url.includes("editMember") ?
        <>
          <nav>
            <ul>
              <li><NavLink to="members" className={navData => navData.isActive ? "active" : ''}>All Members</NavLink></li>
              <li><NavLink to="addMember" className={navData => navData.isActive ? "active" : ''}>Add Member</NavLink></li>
            </ul>
          </nav>
 
          <Outlet />
      </>
      :

      <Routes>
        <Route path="editMember/:id" element={<EditMemberComp/>}></Route>
      </Routes>
      }

    </CardComp >

  )
}

export default SubscriptionsContainerComp;