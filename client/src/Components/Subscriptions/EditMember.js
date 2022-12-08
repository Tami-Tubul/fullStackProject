import { FormGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ButtonComp from "../../UI/Button";
import FormControlComp from "../../UI/FormControl";
import utils from "../../Utilities/utils";
import toast from 'toast-me';


const EditMemberComp = () => {

  const params = useParams()
  const navigate = useNavigate()
  const members = useSelector(state => state.subscriptionsReducer.members)

  const [member, setMember] = useState({ name: "", email: "", city: "" })


  const updateMember = (e) => {
    e.preventDefault();
  }

  const cancelFunc = () => {
    navigate("/subscriptions/members")
  }

  useEffect(() => {
       let memberForEdit = members.find(member => member._id === params.id)
       setMember(memberForEdit)
  }, [])


  return (<>
    <h3>Edit Member</h3>
    <div className="scroll-div">
      <form className="form" onSubmit={updateMember}>
        <FormGroup>
          <FormControlComp id="name" type="text" label="Name:" value={member?.name} required onChange={e => setMember({ ...member, name: e.target.value })} />
          <FormControlComp id="email" type="email" label="Email:" value={member?.email} required onChange={e => setMember({ ...member, email: e.target.value })} />
          <FormControlComp id="city" type="text" label="City:" value={member?.city} required onChange={e => setMember({ ...member, city: e.target.value })} />

          <br />

          <ButtonComp typeBtn='submit' variant="contained" color="default" >Update</ButtonComp><br />
          <ButtonComp typeBtn='button' variant="contained" color="default" onClick={cancelFunc}>Cancel</ButtonComp><br />

        </FormGroup>
      </form>
    </div>
  </>
  )
}

export default EditMemberComp;