import React,{useContext} from 'react';
import './styles.css';
import Pusher from "pusher-js";
import './bootstrap'
import StoreContext from "./../../../store";
class Chatpanel extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            msg_list:[],
            user_list:[],
            active_user:[]
        }

        this.handleEve = this.handleEve.bind(this);
        this.subscribeToPusher = this.subscribeToPusher.bind(this);
        this.loadUsers = this.loadUsers.bind(this);
        this.loadChats = this.loadChats.bind(this);
        this.getActiveUser = this.getActiveUser.bind(this);

    }

    componentDidMount(){

        this.loadUsers();
        // this.subscribeToPusher();
    }

    getActiveUser(){
        if(this.state.active_user.length == 0){
            return;
        }
        else{
            return this.state.active_user[0];
        }
    }

    loadUsers(){
        let tok = localStorage.getItem("accessToken");
        console.log('tok===>>>>',tok)
        fetch('http://127.0.0.1:8000/api/fetchUsers',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${tok}`,
                'Accept':'application/json'
            }
        })
        .then(response => response.json())
        .then(dat => {
            let arr = [];
            for(var x=0;x<dat.length;x++){
                arr.push(dat[x]);
            }
            this.setState({user_list:this.state.user_list.concat(arr)});
        })
        .catch((error) => {
            console.error(error);
        });
    }

    loadChats(el_id){
        let clicked_user_id = el_id.target.id;
        clicked_user_id = clicked_user_id.substr(5,clicked_user_id.length);


        for(var eu=0;eu<this.state.user_list.length;eu++){
            if(this.state.user_list[eu].id == clicked_user_id){
                this.setState({active_user:this.state.active_user.splice(0,this.state.active_user.length)});
                this.setState({active_user:this.state.active_user.concat(this.state.user_list[eu])});
                break;
            }
        }
        let tok = localStorage.getItem("accessToken");

        fetch(`http://127.0.0.1:8000/api/fetchmessages?rec_id=${clicked_user_id}`
            ,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${tok}`,
                'Accept':'application/json'
            }
        })
        .then(response => response.json())
        .then(dat => {
            this.setState({
                //activeUser:this.state.activeUser.push(this.state.user_list[clicked_user_id
            });
            console.log(JSON.stringify(dat));
            let arr = [];
            for(var x=0;x<dat.length;x++){
                //console.log(JSON.stringify(dat[x].message));
                arr.push(dat[x]);
            }
            // this.setState({msg_list:[]});
            this.setState({
                msg_list:this.state.msg_list.splice(0,this.state.msg_list.length)
            });
            console.log('arrarrarrarrarrarrarr',arr)
            this.setState({
                msg_list:this.state.msg_list.concat(arr)
            });
        })
        .catch((error) => {

            console.error(error);
        });
    }


    handleEve(e){
        let msg = document.getElementById('chat_tbox').value;

        let tok = localStorage.getItem("accessToken");

        let activeUserId = this.state.active_user[0].id;

        fetch(`http://127.0.0.1:8000/api/messages?message=${msg}&rec_id=${activeUserId}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${tok}`,
                'Accept':'application/json'
            },
            //body:JSON.stringify(data)
        })
        .then(response => response.json())
        .then(dat => {
            console.log('from handleve : '+JSON.stringify(dat));
        })
        .catch((error) => {
            console.error(error);
        });

        this.subscribeToPusher();


    }

    subscribeToPusher(){

        let a_tok = localStorage.getItem("accessToken");
        //suscribing to pusher channel
        Pusher.logToConsole = true;
        var pusher = new Pusher('309d1b258d720b06a5de', {
            cluster: 'mt1',
        });
        var new_msg = [];
        let user = localStorage.getItem("user");
        var channel = pusher.subscribe('chat');
        channel.bind('message',(d) => {

            //checking sent message from sender side
            if(d.sender_id == JSON.parse(user)["id"]){
                if(this.state.active_user[0].id == d.rec_id){
                    //alert('you have sent message to this user.');
                    this.setState({msg_list:this.state.msg_list.concat(d)});
                }
            }

            //checking message has been received or not
            if(d.sender_id != JSON.parse(user)["id"]){
                if(this.state.active_user.length != 0){
                    if(this.state.active_user[0].id == d.sender_id){
                        //alert('you have sent message to this user.');
                        this.setState({msg_list:this.state.msg_list.concat(d)});
                    }
                    else{
                        var id_to_notify = document.getElementById('user_'+d.sender_id);
                    }
                }
                else{
                    alert('no active user, you got a new message : '+d.message);
                }
            }

        },channel.unbind('message'));
    }



    render(){
        let user = localStorage.getItem("user");
        let isAnyUserActive=false;
        if(this.state.active_user.length != 0){
            isAnyUserActive=true;
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <div id="chat_panel_container">
                            <div className="container">

                <div className="row no-gutters">
                    <div className="col-3">
                        <div className="card">
                            <div className="card-header">card header</div>
                            <div className="card-body">
                                <ul id="user_list" className="user_list list-group">
                                    {this.state.user_list.map((number) =>
                                    <a href="#">
                                        <li id={"user_"+number.id} onClick={this.loadChats} className=" text-dark list-group-item d-flex justify-content-between align-items-center" key={'user_'+number.id}>
                                            {number.first_name}
                                            <span className="badge badge-primary badge-pill">14</span>
                                        </li>
                                    </a>  )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">{isAnyUserActive?this.state.active_user[0].name:'no active'}</div>
                            <div className="card-body">
                                <ul id="chat_list" className="chat_list">
                                    {this.state.msg_list.map((msgs) =>
                                        (msgs.sender_id==JSON.parse(user)["id"])?
                                        <div className="sent" id={msgs.id} key={msgs.id}>{msgs.message}</div>
                                        :
                                        <div className="replies" id={msgs.id} key={msgs.id}>{msgs.message}</div>

                                    )}
                                </ul>
                            </div>
                            <div className="card-footer">
                                <input type="text" id="chat_tbox" className="form-control" placeholder="Enter message..." />
                                <input type="submit" className="btn btn-primary btn-sm" value="GO" onClick={this.handleEve} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <div id="chat_submit_container"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Chatpanel;
