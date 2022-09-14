import { useSelector } from "react-redux"
import UserComp from "./User"

const UsersComp = () => {

  const users = useSelector(state => state.usersReducer.users)

  return (

    <>
      {
        users?.map(item => {
          return <UserComp key={item._id} userData={item} />
        })
      }
    </>
  )
}

export default UsersComp;