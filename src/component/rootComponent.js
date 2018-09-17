import React from 'react';
import FeedbackTitle from '../containers/FeedbackTitle';
import FeedbackDescription from '../containers/FeedbackDescription';

class RootComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                I'm root Component
                <p></p>
                <FeedbackTitle />
                <hr />
                <FeedbackDescription />
            </div>
         );
    }
}
 
export default RootComponent;