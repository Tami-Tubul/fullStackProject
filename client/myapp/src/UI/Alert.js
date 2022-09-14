import Alert from '@mui/material/Alert';


const AlertComp = (props) => {


    return(
      <>
      <Alert severity={props.severity}>{props.message}</Alert>
      </>
    )
}

export default AlertComp;