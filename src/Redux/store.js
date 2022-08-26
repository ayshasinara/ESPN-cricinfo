import {
    legacy_createStore as createStore,
    combineReducers,
    compose,
    applyMiddleware
} from "redux"
import thunk from "redux-thunk"
import { reducer as filter} from "../Redux/filter/reducer";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
// const rootReducer = combineReducers({filter});

const store = createStore(
    filter,
    composeEnhancers(applyMiddleware(thunk)),)
    export default store;