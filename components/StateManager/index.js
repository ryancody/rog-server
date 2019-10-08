const redux = require('redux')
const createStore = redux.createStore

const initialState = {
    count: 0
}

function reducer (state = initialState, action) {
    console.log('reducer', state, action)

    switch (action.type) {
        case 'ONE':
            console.log(action.type)
            return {
                count: state.count + 1
            }
        default:
            return state
    }
}

const store = createStore(reducer)
store.dispatch({type:'ONE'})
store.dispatch({type:'test type'})
store.dispatch({type:'RESET'})
store.dispatch({type:'test type'})

exports.reducer = reducer

exports.store = store