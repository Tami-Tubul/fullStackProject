import { Box } from "@material-ui/core";


const BoxComp = (props) => {


    return (

        <Box sx={{
            width: 350,
            height: 300,
            border: '2px solid red',
            borderRadius: "20px",
            backgroundColor: 'white',
            '&:hover': {
                backgroundColor: 'pink',
                opacity: [0.9, 0.8, 0.7],
            },
        }}>
            {props.children}
        </Box >


    )
}

export default BoxComp;