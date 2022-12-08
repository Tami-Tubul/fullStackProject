const CardComp = (props) => {

    return (
        <div className='card' style={{padding: "1rem",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.24)",
            borderRadius: "14px",
            backgroundColor: "rgb(255, 255, 255)",
            width: `${props.width ? props.width : "40%"}`,
            margin: "auto",
            marginTop: "2.5%",
            minWidth: "300px",
            minHeight: "400px"}}>
            {props.children}
        </div>
    )
}

export default CardComp;