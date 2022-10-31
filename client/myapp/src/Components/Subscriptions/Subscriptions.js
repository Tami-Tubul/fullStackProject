import { NavLink } from "react-router-dom";
import CardComp from "../../UI/Card";

const SubscriptionsComp = () => {

  return (

    <CardComp width="60%">
      <h2>Subscriptions</h2>
      <hr></hr>
      
      <nav>
        <ul>
          <li><NavLink to="members" className={navData => navData.isActive ? "active" : ''}>All Members</NavLink></li>
          <li><NavLink to="addMember" className={navData => navData.isActive ? "active" : ''}>Add Member</NavLink></li>
        </ul>

      </nav>

    </CardComp>

  )
}

export default SubscriptionsComp;