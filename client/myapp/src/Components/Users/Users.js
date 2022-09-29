import { useSelector } from "react-redux";
import UserComp from "./User";

const UsersComp = () => {

  const storeUsers = useSelector(state => state.usersReducer)


  return (<div>
    {
      storeUsers.users.map(user => {
        return <> <UserComp userData={user} key={user._id} /><br /> </>
      })
    }

  </div>

  )
}

export default UsersComp;