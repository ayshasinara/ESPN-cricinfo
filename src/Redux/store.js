import { applyMiddleware, legacy_createStore } from "redux"
import thunk from "redux-thunk"
import { compose } from "redux"
import {reducer} from "./reducer"
const store =legacy_createStore(reducer,compose(applyMiddleware(thunk)))
export {store}