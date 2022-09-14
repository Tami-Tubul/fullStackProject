import Button from '@mui/material/Button';
import { memo } from 'react';

const ButtonComp = memo((props) => {
  return (
    <> 
       <Button type={props.typeBtn} variant="contained" onClick={props.onClick}>{props.textBtn}</Button>
    </>
  );
})

export default ButtonComp;