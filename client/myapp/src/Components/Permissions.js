import { Checkbox, FormControlLabel } from "@material-ui/core";

const PermissionsComp = () => {

    return (
        <fieldset>
            <legend>Permissions:</legend>
            <FormControlLabel control={<Checkbox color="default"/>} label="View Subscriptions" />
            <FormControlLabel control={<Checkbox color="default"/>} label="Create Subscriptions" />
            <FormControlLabel control={<Checkbox color="default"/>} label="Delete Subscriptions" />
            <FormControlLabel control={<Checkbox color="default"/>} label="Update Subscriptions" />
            <FormControlLabel control={<Checkbox color="default"/>} label="View Movies" />
            <FormControlLabel control={<Checkbox color="default"/>} label="Create Movies" />
            <FormControlLabel control={<Checkbox color="default"/>} label="Delete Movies" />
            <FormControlLabel control={<Checkbox color="default"/>} label="Update Movies" />

        </fieldset>
    )
}

export default PermissionsComp;