import React from 'react'
import {
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  Legend,
  Line,
  Bar
} from 'recharts'

export default function Graph1({}) {
  const data = [{name: 'a', value: 12}, {name: 'b', value: 24}, {name: 'c', value: 50}]
  return(
    <ComposedChart width={730} height={250} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#f5f5f5" />
      <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
    </ComposedChart>
  )
}
