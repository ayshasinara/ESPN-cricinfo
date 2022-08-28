import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import thunk from "redux-thunk"
import { compose } from "redux"
import { reducer as AppDataReducer } from "./data/reducer"
export const rootReducer = combineReducers({AppDataReducer});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
export { store }