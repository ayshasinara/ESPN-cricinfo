import {
    applyMiddleware, legacy_createStore as createStore,
    combineReducers
} from "redux"
import thunk from "redux-thunk"
import { compose } from "redux"
import { reducer as AppDataReducer } from "./data/reducer"
import { reducer as filter } from "./filter/reducer"
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const rootReducer = combineReducers({ filter, AppDataReducer });

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),)

export { store };


