import { FormGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ButtonComp from "../../UI/Button";
import FormControlComp from "../../UI/FormControl";
import utils from "../../Utilities/utils";
import toast from 'toast-me';
import authService from "../../Utilities/authService";


const EditMemberComp = () => {

  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const members = useSelector(state => state.subscriptionsReducer.members)

  const [member, setMember] = useState({ name: "", email: "", city: "" })


  const updateMember = async (e) => {
    e.preventDefault();
    try {
      const token = authService.getToken();

      let status = await utils.editItem("http://localhost:5000/api/members", params.id, member,token)

      if (status.data == "updated!") {

        dispatch({ type: "UPDATE_MEMBER", payload: member })

        toast("The member was updated!", { duration: 3000 })

        navigate("/subscriptions/members")
      }
    } catch (error) {
      toast(error.response.data.message, { duration: 3000 })
    }
  }

  const cancelFunc = () => {
    navigate(-1)
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