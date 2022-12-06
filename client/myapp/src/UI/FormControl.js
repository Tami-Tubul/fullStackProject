import { Input, FormLabel, FormControl, TextField } from '@material-ui/core';

const FormControlComp = (props) => {
    return (
        <>
            <FormControl>
                <TextField id={props.id} type={props.type} {...props} onChange={props.onChange} label={props.label} variant="outlined" style={{ width: "80%", margin: "auto" }} />
            </FormControl>
            <br />
        </>
    );
}

export default FormControlComp;