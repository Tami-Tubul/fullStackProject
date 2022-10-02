import Button from '@mui/material/Button';
import { memo } from 'react';

const ButtonComp = memo((props) => {
    return (
        <>
            <Button type={props.typeBtn} variant="contained" sx={{
                height:`${props.height ? props.height : "40px"}`,
                marginTop: 2,
                backgroundColor: "#2E1C98",
                border: "1px solid transparent",
                "&:hover": {
                    backgroundColor: "rgba(57, 28, 152, 0.9)",
                    border: "1px solid #E82041",
                }, width:`${props.width ? props.width : "80%"}`, margin: "auto"
            }} onClick={props.onClick}>{props.children}</Button>
        </>
    );
})

export default ButtonComp;