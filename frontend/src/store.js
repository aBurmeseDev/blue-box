import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducers,
  productDetailReducers,
} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducers } from './reducers/userReducers'

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailReducers,
  cart: cartReducer,
  userLogin: userLoginReducers,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initiateState = {
  cart: { cartItems: cartItemsFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initiateState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
