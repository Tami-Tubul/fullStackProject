import { useNavigate } from 'react-router-dom';
import ButtonComp from '../../UI/Button'

const MemberComp = ({ memberData }) => {

const navigate = useNavigate()

const deleteMember = () => {

}

    return (

        <div className="content-box">
          <div className="text-box">
            <p><strong>Email:</strong>{memberData.email}</p>
            <p><strong>City:</strong> {memberData.city}</p>
          </div>
    
          <div className="actions-box">
            <ButtonComp type="button" width="20%" height="27px" onClick={() => navigate("/subscriptions/editMember/" + memberData._id)}>Edit</ButtonComp>{" "}
            <ButtonComp type="button" width="20%" height="27px" onClick={deleteMember} >Delete</ButtonComp>
          </div>
    
        </div>
      )
}

export default MemberComp;