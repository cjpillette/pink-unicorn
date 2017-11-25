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
  const myData = [
    {name: '10/11/2017', pv: 2500, uv: 2100},
    {name: '11/11/2017', pv: 3000, uv: 1850},
    {name: '12/11/2017', pv: 2800, uv: 1670},
    {name: '13/11/2017', pv: 2600, uv: 2100},
    {name: '14/11/2017', pv: 1700, uv: 1890},
    {name: '15/11/2017', pv: 2100, uv: 1650},
    {name: '16/11/2017', pv: 1500, uv: 1300}
  ]
  return (
    <div>
      <LineChart
        width={730}
        height={250}
        data={myData}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}
      >
          <XAxis dataKey="name" style={{ fontSize: '12px' }}/>
          <YAxis dataKey="value" type="number"/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  )
}
