import React from 'react';
import { connect } from "react-redux";

class FeedbackDescription extends React.Component {

    constructor(props){
        super(props);
        this.state={
            changeValue : {}
        }

    }
    
    onSubmitChangeDescription(){

    }

    render() { 
        if(!this.props.selectedFBprops){
            return(
                <div>Click on any title..!!</div>
            )
        }
        return ( 
            <div>
                Respective Description :
                <ul>
                    <li>ID : {this.props.selectedFBprops.id}</li>
                    <li>Title : {this.props.selectedFBprops.title}</li>
                    <li>Description : {this.props.selectedFBprops.description}</li>
                    <li>URL : {this.props.selectedFBprops.url}</li>
                </ul>
                <div><img src={this.props.selectedFBprops.imageUrl} alt="icons"/></div>
                Change Description Below :
                <form onSubmit={this.onSubmitChangeDescription}>
                    <input type="text" placeholder="Enter data" />
                    <input type="submit" value="Change Descrition" />
                </form>
            </div>
         );
    }
}

function connectStoreToComponentAsProps(state) {
    return {
        selectedFBprops:state.oneFB
        }
    }



export default connect(connectStoreToComponentAsProps)(FeedbackDescription);