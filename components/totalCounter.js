import Link from 'next/link'
import { useSelector } from 'react-redux'

import Counter from './counter'
import Clock from './clock'

function TotalCounter({ linkTo, NavigateTo, title }) {

  const counters = useSelector((state) => state.counters)
  const largerThanZeroCounter = counters.filter((c) => c.count > 0).length

  return (
    <div>
      <h1>Non-empty item count: {largerThanZeroCounter} </h1>
    </div>
  )
}

export default TotalCounter
