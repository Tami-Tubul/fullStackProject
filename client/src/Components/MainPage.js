import { useSelector } from "react-redux";
import welcomeGif from "../Images/welcome.gif"
import CardComp from "../UI/Card";


const MainPageComp = () => {

    const storeUsers = useSelector(state => state.usersReducer)

    return (<CardComp>
        <h2 style={{ color: "#E82041" }}>Hi {storeUsers.connectedUser.firstName}</h2>
        <img src={welcomeGif} alt="welcome"/>
    </CardComp>

    )
}

export default MainPageComp;