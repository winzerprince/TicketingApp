import Fullcalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import iterationPlugin from '@fullcalendar/interaction'

function Calendar() {
    return (<div>
        <Fullcalendar
            plugins={[dayGridPlugin, timeGridPlugin, iterationPlugin]}
            initialView={"dayGridMonth"}
            headerToolbar={{
                start: "today,preview,next",
                center: "title",
                end: "dayGridMonth,timeGridWeek,timeGridDay"
            }
            }
        />
    </div>)
}
export default Calendar