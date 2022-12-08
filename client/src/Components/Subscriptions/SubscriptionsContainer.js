import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet, Route, Routes, useLocation } from "react-router-dom";
import CardComp from "../../UI/Card";
import utils from "../../Utilities/utils";
import EditMemberComp from "./EditMember";

const SubscriptionsContainerComp = () => {

  const dispatch = useDispatch();

  const url = useLocation().pathname;

  useEffect(() => {

    const getAllMembers = async () => {
      const resp = await utils.getAllItems("http://localhost:5000/api/members")
      dispatch({ type: "LOAD_MEMBERS", payload: resp.data })
    }
    getAllMembers()

  }, [dispatch])


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