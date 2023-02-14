import Link from 'next/link'
import { useSelector } from 'react-redux'

import Counter from './counter'
import TotalCounter from './totalCounter'
import Clock from './clock'

function Page({ linkTo, NavigateTo, title }) {
  
  const customEqual = (oldValue, newValue) => {
    if (oldValue.length === newValue.length) {
      return true
    }
    return false
  }

  const counters = useSelector((state) => state.counters, customEqual)
  return (
    <div>
      <TotalCounter/>
      {counters.map((c) => (
        <Counter key={c.id} id={c.id}/>
      ))}

    </div>
  )
}

export default Page
