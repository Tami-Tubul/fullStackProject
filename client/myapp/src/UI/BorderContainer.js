import './style.css'

const BorderContainer = (props) => {


    return (
        <div className='borderContainer'>
            {props.children}
        </div>
    )
}

export default BorderContainer;