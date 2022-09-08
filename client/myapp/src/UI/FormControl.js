import {Input, FormLabel, FormControl } from '@material-ui/core';

function FormControlComp(props) {
  return (
    <>
        <FormControl>
          <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
          <Input id={props.id} type={props.type} placeholder={props.label} required onChange={props.onChange} />
        </FormControl>
        <br/>
    </>
  );
}

export default FormControlComp;