import { FormGroup } from "@mui/material";
import { useDebugValue, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonComp from "../../UI/Button";
import FormControlComp from "../../UI/FormControl";
import utils from "../../Utilities/utils";
import toast from 'toast-me';

const AddMemberComp = () => {

   const permissions = useSelector(state => state.usersReducer.connectedUser.permissions)

   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [member, setMember] = useState({ name: "", email: "", city: "" })


   const addMemberFunc = async () => {

      try {
         let status = await utils.addItem("http://localhost:5000/api/members", member)

         if (status.data.message == "created!") {

            dispatch({ type: "ADD_MEMBER", payload: { ...member, _id: status.data.memberID } })

            toast("The member was created!", { duration: 3000 })

            navigate(-1)
         }
      } catch (error) {
         toast(error.response.data.message, { duration: 3000 })
      }
   }

   const cancelFunc = () => {
      navigate("/subscriptions/members")
   }

   return (<>
      {permissions.find(perm => perm === 'Create Subscriptions') ?

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
         </> : "No permissions to add members for this user"}
   </>
   )
}

export default AddMemberComp;