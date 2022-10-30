import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer'

const middleWare = applyMiddleware(thunk)
export const store = createStore(reducer,middleWare)