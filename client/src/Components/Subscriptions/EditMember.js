import { FormGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ButtonComp from "../../UI/Button";
import FormControlComp from "../../UI/FormControl";
import utils from "../../Utilities/utils";
import toast from 'toast-me';


const EditMemberComp = () => {


  const updateMember = (e) => {
      e.preventDefault();
  }
  
  const cancelFunc = () => {
    navigate("/subscriptions/members")
  }




  return (<>
    <h3>Edit Member</h3>
    <div className="scroll-div">
      <form className="form" onSubmit={updateMember}>
        <FormGroup>
          <FormControlComp id="name" type="text" label="Name:" value={movie?.name} required onChange={e => setMovie({ ...movie, name: e.target.value })} />
          <FormControlComp id="genres" type="text" label="Genres:" value={movie?.genres} required onChange={e => setMovie({ ...movie, genres: e.target.value })} />
          <FormControlComp id="image" type="text" label="Image Url:" value={movie?.image} required onChange={e => setMovie({ ...movie, image: e.target.value })} />
          <FormControlComp id="premiered" type="date" label="Premiered:" value={movie?.premiered} required onChange={e => setMovie({ ...movie, premiered: e.target.value })} />

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