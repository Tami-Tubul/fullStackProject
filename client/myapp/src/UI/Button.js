import Button from '@mui/material/Button';

function ButtonComp(props) {
  return (
    <> 
       <Button type={props.typeBtn} variant="contained">{props.textBtn}</Button>
    </>
  );
}

export default ButtonComp;