import React, { useEffect, useState } from 'react'
import Coffee from './Coffee.jsx'
const CoffeeList = () => {
  const [data, setData] = useState([])
  const getData = async () => {
    const resp = await fetch('https://api.sampleapis.com/coffee/hot')
    const json = await resp.json()
    setData(json)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='coffeeList grid  sm:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 mt-8 place-items-center gap-2 '>
      {data.slice(0, 6).map((item, index) => (
        <Coffee
          key={index}
          name={item.title}
          image={item.image}
          stars={item.stars}
          votes={item.votes}
          price={item.price}
        />
      ))}
    </div>
  )
}

export default CoffeeList
