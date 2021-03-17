import React, {Component} from "react";

import "./AdminSuccessMesg.css";

class  AdminSuccessMesg extends Component {
    constructor() {
        super();
        this.state = {
            showMesg: true
        }
    }

    handleClick = () => {
        this.setState({showMesg: false});
    }

    hideMesg = ()=> setTimeout(() => {
        this.setState({showMesg: false})
     }, 10000);


    render() {
        let adminSuccessMesg = "admin-success-mesg";
        if (!this.state.showMesg) {
            adminSuccessMesg+= " admin-hide-success-mesg-hide";
        }

        if(this.state.showMesg) {
            this.hideMesg();
        }

        return (
            <div className={adminSuccessMesg}>
              <p><span className="admin-check-mark">&#10003;</span> 
               Your Transaction was successful 
               <span className="admin-times-mark" onClick={this.handleClick}>&times;</span></p>
            </div>
        );
    }
   
}

export default AdminSuccessMesg;