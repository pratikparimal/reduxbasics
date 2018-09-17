import React from 'react';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';

import updateTitle  from '../actions/updateTitleAction';

class FeedbackDescription extends React.Component {

    constructor(){
        super();
        this.state={
            updatedFB : {}
        }
        this.updateTitleInContainer = this.updateTitleInContainer.bind(this)
        this.dispatchNewTitle = this.dispatchNewTitle.bind(this)
    }
    
    dispatchNewTitle(){
        this.props.updatedTitle(this.state.updatedFB)
    }

    updateTitleInContainer(e){
        const temp_updateFB = Object.assign({},this.props.selectedFBprops,{title:e.target.value})
        this.setState({updatedFB:temp_updateFB})
        console.log(this.state.updatedFB)
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
                
                <form onSubmit={this.dispatchNewTitle}>
                        Update title:
                        <input type="text"
                               value={this.state.updatedFB.title} 
                               onChange={this.updateTitleInContainer}
                        />
                        <button type="submit">Update Title</button>
                </form>
            </div>
         );
    }
}

function connectStateToComponentAsProps(state) {
    return ({
        selectedFBprops:state.oneFB
        })
    }

function connectActionToComponentAsProps(dispatch){
    return bindActionCreators({updateTitle: updateTitle}, dispatch)
}

export default connect(connectStateToComponentAsProps, connectActionToComponentAsProps)(FeedbackDescription);