import { useSelector } from "react-redux";
import MemberComp from './Member';

const MembersComp = () => {

    const storeSubscriptions = useSelector(state => state.subscriptionsReducer)
    return (

        <div className="scroll-div">

            <div className="grid">
                {

                    storeSubscriptions.members.map(member => {
                        return <MemberComp memberData={member} key={member._id} />
                    })
                }
            </div>
        </div>
    )
}

export default MembersComp;