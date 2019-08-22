import { combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DICREMENT':
            return state - 1
    
        default:
            return state;
    }
}

const redusers = combineReducers({
    count: countReducer,
    form: formReducer
})

export const store = createStore(redusers, composeWithDevTools())
