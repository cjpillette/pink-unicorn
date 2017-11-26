import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import Events from './Events'

BigCalendar.momentLocalizer(moment)
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

export default function MainCalendar({}) {

  return(
    <div style={{ margin: 'auto', maxWidth: '660px', paddingTop: '50px'}}>
      <BigCalendar
        views={allViews}
        step={60}
        events={Events}
        defaultDate={new Date(2017, 10, 10)} />
    </div>
  )
}
