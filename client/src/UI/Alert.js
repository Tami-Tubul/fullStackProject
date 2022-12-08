import Alert from '@mui/material/Alert';


const AlertComp = (props) => {


    return(
      <>
      <Alert severity={props.severity} style={{ width: "75%", margin: "auto" }} >{props.message}</Alert>
      </>
    )
}

export default AlertComp;