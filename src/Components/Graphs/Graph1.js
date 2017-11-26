import React from 'react'
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from 'recharts'

export default function Graph1({}) {
  const data = [
      {name: '03/02/17', uv: 4000, pv: 2400, amt: 2400},
      {name: '04/02/17', uv: 3000, pv: 1398, amt: 2210},
      {name: '05/02/17', uv: 2000, pv: 9800, amt: 2290},
      {name: '06/02/17', uv: 2780, pv: 3908, amt: 2000},
      {name: '07/02/17', uv: 1890, pv: 4800, amt: 2181},
      {name: '08/02/17', uv: 2390, pv: 3800, amt: 2500},
      {name: '09/02/17', uv: 3490, pv: 4300, amt: 2100},
]

  	return (
    	<LineChart width={400} height={200} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name" style={{ fontSize: '12px' }}/>
       <YAxis/>

       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#8884d8" />
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    )

}
