import Button from '@mui/material/Button';
import { memo } from 'react';

const ButtonComp = memo((props) => {
  return (
    <> 
       <Button type={props.typeBtn} variant="contained">{props.textBtn}</Button>
    </>
  );
})

export default ButtonComp;