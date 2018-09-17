import React from 'react';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import selectFeedback from '../actions/index';

class FeedbackTitle extends React.Component {

    displayAllTiles(){
        
        return this.props.feedbacktitles.map((fb)=>{
            return (<li key={fb.id} onClick={()=>{console.log(this.props.selectFeedback(fb))}} >
                        {fb.title}
                    </li>)
        })
    }
    
    render() { 
        return ( 
            <div>
                {this.displayAllTiles()}
            </div>
         );
    }
}

function connectStoreToComponentAsProps(copyOfStore) {
    console.log(copyOfStore)
    return {
            feedbacktitles:copyOfStore.allFB
    }
}

function bindActionCreatorToComponentAsProps(dispatch){
    return bindActionCreators({selectFeedback:selectFeedback}, dispatch)
}

 
export default connect(connectStoreToComponentAsProps, bindActionCreatorToComponentAsProps)(FeedbackTitle);