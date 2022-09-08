import Alert from '@mui/material/Alert';


const AlertComp = (props) => {


    return(
      <>
      <Alert severity="error">
          {props.errorMessage}
        </Alert>
      </>
    )
}

export default AlertComp;