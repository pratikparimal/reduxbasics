import { combineReducers } from "redux";

import allFeedbacks from "./feedbackReducer";
import allUsers  from "./usersReducer";
import feedbackClicked from './feedbackClickedReducer';

const allReducers = combineReducers({
    allFB:allFeedbacks,
    allU:allUsers,
    oneFB:feedbackClicked
})

export default allReducers;