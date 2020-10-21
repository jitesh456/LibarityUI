import {createStore} from 'redux';
import liberityRedducer from './Reducer/liberityReducer'

const store=createStore(liberityRedducer)
export default store;