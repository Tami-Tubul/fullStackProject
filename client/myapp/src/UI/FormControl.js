import {Input, FormLabel, FormControl } from '@material-ui/core';

const FormControlComp = (props) => {
  return (
    <>
        <FormControl>
          <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
          <Input id={props.id} type={props.type} {...props} onChange={props.onChange} />
        </FormControl>
        <br/>
    </>
  );
}

export default FormControlComp;