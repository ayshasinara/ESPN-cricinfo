import { applyMiddleware, legacy_createStore as createStore,
    combineReducers } from "redux"
import thunk from "redux-thunk"
import { compose } from "redux"
import {reducer} from "./reducer"
import { reducer as filter} from "../Redux/filter/reducer";
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const rootReducer = combineReducers({filter,reducer});

const store = createStore(
    rootReducer ,
    composeEnhancers(applyMiddleware(thunk)),)
    export  {store};