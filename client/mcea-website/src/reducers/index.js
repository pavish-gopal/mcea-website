import { combineReducers } from "redux";
import home from './home.js';
import about from './about.js';
import events from "./events.js";
import history from "./history.js";
import user from "./user.js";
import contacts from "./contacts.js";
const reducer = combineReducers({
    home:home,
    about:about,
    events:events,
    history:history,
    user:user,
    contacts:contacts,
    
});
export default reducer;