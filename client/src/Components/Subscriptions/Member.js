import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ButtonComp from '../../UI/Button'
import utils from '../../Utilities/utils';
import toast from 'toast-me';
import WatchedMoviesComp from '../Movies/WatchedMovies';

const MemberComp = ({ memberData }) => {

  const permissions = useSelector(state => state.usersReducer.connectedUser.permissions)


  const navigate = useNavigate()
  const dispatch = useDispatch()

  const deleteMember = async () => {
    if (window.confirm("Are you sure?")) {
      let status = await utils.deleteItem("http://localhost:5000/api/members", memberData._id)
      if (status.data == "deleted!") {
        dispatch({ type: "DELETE_MEMBER", payload: memberData._id })
        toast("The member was deleted!", { duration: 3000 })
        navigate("/subscriptions/members")
      }
    }
  }

  return (

    <div className="content-box">

      <div className="text-box">
        <h3>{memberData.name}</h3>
        <p><strong>Email:</strong> {memberData.email}</p>
        <p><strong>City:</strong> {memberData.city}</p>
      </div>

      <div className="actions-box">
        {permissions.find(perm => perm === 'Update Subscriptions') &&
          <ButtonComp type="button" width="20%" height="27px" onClick={() => navigate("/subscriptions/editMember/" + memberData._id)}>Edit</ButtonComp>
        }{" "}
        {permissions.find(perm => perm === 'Delete Subscriptions') &&
          <ButtonComp type="button" width="20%" height="27px" onClick={deleteMember} >Delete</ButtonComp>
        }
      </div>

      <WatchedMoviesComp memberID={memberData._id} />

    </div>
  )
}

export default MemberComp;