import { useSelector } from "react-redux";
import MemberComp from './Member';

const MembersComp = () => {

    const permissions = useSelector(state => state.usersReducer.connectedUser.permissions)
    const storeSubscriptions = useSelector(state => state.subscriptionsReducer)

    return (<>

        {permissions.find(perm => perm === 'View Subscriptions') ?
            <div className="scroll-div">
                <div className="grid">
                    {

                        storeSubscriptions.members.map(member => {
                            return <MemberComp memberData={member} key={member._id} />
                        })
                    }
                </div>
            </div> : "No permissions to show subscriptions for this user"}
    </>)
}

export default MembersComp;