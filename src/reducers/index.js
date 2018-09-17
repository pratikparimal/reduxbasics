import { combineReducers } from "redux";

import allFeedbacks from "./feedbackReducer";
import allUsers  from "./usersReducer";
import feedbackClicked from './feedbackClickedReducer';
import feedbackUpdated from './changeDescriptionReducer';

const allReducers = combineReducers({
    allFB:allFeedbacks,
    allU:allUsers,
    oneFB:feedbackClicked,
    updatedFB:feedbackUpdated
})

export default allReducers;