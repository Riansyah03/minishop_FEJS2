import { combineReducers, createStore } from 'redux'

// import folder product file reducer
// productReducer yang akan menjadi value di product const reducers
import productReducer from './Product/Reducer'
import cartReducer from './cart/reducer'

// middleware redux
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducers = combineReducers({
    // meendata dari store
    product: productReducer,
    cart: cartReducer
})

// membuat store dengan function dari const reducers diatas
const store = createStore(reducers)

export default store