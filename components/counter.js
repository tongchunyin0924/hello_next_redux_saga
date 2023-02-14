import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
import { increment, decrement, reset, loadData } from '../actions'

const Counter = (props) => {

  const selectCountSelector = createSelector(
    (state) => state.counters,
    (counters) => counters.filter((c) => c.id === props.id)[0]
  )

  const counter = useSelector(selectCountSelector)
  const dispatch = useDispatch()

  console.log('Rending ID: ', props.id, counter)
  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      {/* <h1>
        Count: <span>{count}</span>
      </h1> */}
      {/* <button onClick={() => dispatch(loadData())}>Load</button> */}
      <h3>id: {props.id}, value: {counter.count} </h3>
      <button onClick={() => dispatch(increment(props.id))}>+1</button>
      <button onClick={() => dispatch(decrement(props.id))}>-1</button>
      {/* <button onClick={() => dispatch(reset())}>Reset</button> */}
    </div>
  )
}

export default Counter
