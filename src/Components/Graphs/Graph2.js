import React from 'react'
import {
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Bar
} from 'recharts'

export default function Graph1({}) {
  const myData = [
    {name: '10/11/2017', rouge: 2500, blanc: 2100},
    {name: '11/11/2017', rouge: 3000, blanc: 1850},
    {name: '12/11/2017', rouge: 2800, blanc: 1670},
    {name: '13/11/2017', rouge: 2600, blanc: 2100},
    {name: '14/11/2017', rouge: 1700, blanc: 1890},
    {name: '15/11/2017', rouge: 2100, blanc: 1650},
    {name: '16/11/2017', rouge: 1500, blanc: 1300}
  ]
  return(
    <ComposedChart width={400} height={200} data={myData}>
      <XAxis dataKey="name" style={{ fontSize: '12px' }}/>
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#f5f5f5" />
      <Bar dataKey="rouge" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="blanc" stroke="#ff7300" />
    </ComposedChart>
  )
}
