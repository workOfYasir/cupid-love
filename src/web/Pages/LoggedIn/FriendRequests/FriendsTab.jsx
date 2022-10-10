import React, {useContext, useState} from 'react'
import { Observer } from "mobx-react-lite"
import SentRequests from "./SentRequests";
import RecievedRequest from "./RecievedRequest";
import {StoreContext} from "../../../store";


const FriendsTab = () => {
    const store = useContext(StoreContext);
    const [componentCount, setComponentCount] = useState([]);
    const onClickAddSentRequestComponent = event => {
        if(store.countFriendRequests===0){
            setComponentCount(componentCount.concat(<SentRequests/>));
            store.setCountFriendRequests(store.countFriendRequests++);
        }else if(store.countFriendRequests>0){
            setComponentCount(componentCount.splice(-1));
            store.setCountFriendRequests(0);
            setComponentCount(componentCount.concat(<SentRequests/>));
        }
    };
    const onClickAddRecievedRequestComponent = event => {
        if(store.countFriendRequests===0){
            setComponentCount(componentCount.concat(<RecievedRequest/>));
            store.setCountFriendRequests(store.countFriendRequests++);
        }else if(store.countFriendRequests>0){
            setComponentCount(componentCount.splice(-1));
            store.setCountFriendRequests(0);
            setComponentCount(componentCount.concat(<RecievedRequest/>));
        }
    };
    return (
        <Observer>
            {() => (
                <>
                    <div className="col-12">
                        <div className="justify-content-center">
                            <ul className="nav nav-tabs d-flex justify-content-center col-12 nav-tabs-02">
                                <li className="nav-item">
                                    <a className="btn text-light ms-0" onClick={onClickAddSentRequestComponent} >Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn text-light ms-0" onClick={onClickAddRecievedRequestComponent} >Dashboard</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    {componentCount}
                </>
            )}
        </Observer>
    )
}

export default FriendsTab