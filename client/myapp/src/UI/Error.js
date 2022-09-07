import './Error.css'

const ErrorComp = (props) => {


    return(
        <span className="error">
            {props.errorMessage}
        </span>
    )
}

export default ErrorComp;