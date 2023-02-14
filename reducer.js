import { actionTypes } from './actions'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null,
  counters: [
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
    { id: 4, count: 0 },
    { id: 5, count: 0 }],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload }
    }

    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      }

    case actionTypes.INCREMENT: {

      let id = action.id
      let counters = [...state.counters]
      
      let newCounters = counters.map(function(d){
        if (d.id === id) {
          return {
            ...d,
            ...{count: d.count + 1}
          }
        }
        return d
      })

      return {
        ...state,
        ...{
          counters: newCounters
        }
      }
    }
    case actionTypes.DECREMENT: {

      let id = action.id
      let counters = [...state.counters]
      
      let newCounters = counters.map(function(d){
        if (d.id === id && d.count > 0) {
          return {
            ...d,
            ...{count: d.count - 1}
          }
        }
        return d
      })

      return {
        ...state,
        ...{
          counters: newCounters
        }
      }
    }
    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: initialState.count },
      }

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      }

    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light },
      }

    default:
      return state
  }
}

export default reducer
