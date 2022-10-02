import { useSelector } from "react-redux";
import UserComp from "./User";
import '../ComponentsStyle.css'

const UsersComp = () => {

  const storeUsers = useSelector(state => state.usersReducer)

  return (<div className="scroll-div">

    <div className="grid">

      {
        storeUsers.users.map(user => {
          return <UserComp userData={user} key={user._id} />
        })
      }
    </div>

  </div>

  )
}

export default UsersComp;