import './Card.css'

const CardComp = (props) => {

    return (
        <div className='card'>
            {props.children}
        </div>
    )
}

export default CardComp;