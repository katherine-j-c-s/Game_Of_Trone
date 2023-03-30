import {createStore, applyMiddleware} from 'redux'
import {devToolsEnhancer} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

const store= createStore(
    rootReducer,
    devToolsEnhancer(applyMiddleware(thunk))
)

export default store