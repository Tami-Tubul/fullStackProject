import { FormGroup } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonComp from "../../UI/Button";
import FormControlComp from "../../UI/FormControl";

const AddMemberComp = () => {

   const navigate = useNavigate()
   const [member, setMember] = useState({ name: "", email: "", city: "" })


  const addMemberFunc = () => {

  }

  const cancelFunc = () => {
     navigate("/subscriptions/members")
 }

   return (
      <>
      <h3>Add Member</h3>
      <div className="scroll-div">
        <form className="form" onSubmit={addMemberFunc}>
        <FormGroup>
          <FormControlComp id="name" type="text" label="Name:" required onChange={e => setMember({ ...member, name: e.target.value })} />
          <FormControlComp id="email" type="email" label="Email:" required onChange={e => setMember({ ...member, email: e.target.value })} />
          <FormControlComp id="city" type="text" label="City:" required onChange={e => setMember({ ...member, city: e.target.value })} />

          <br />

          <ButtonComp typeBtn='submit' variant="contained" color="default" >Update</ButtonComp><br />
          <ButtonComp typeBtn='button' variant="contained" color="default" onClick={cancelFunc}>Cancel</ButtonComp><br />

        </FormGroup>
        </form>
      </div>
    </>
   )
}

export default AddMemberComp;