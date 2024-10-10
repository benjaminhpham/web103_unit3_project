import React, { useEffect, useState } from "react";
import Event from "../components/Event";
import EventsAPI from "../services/EventsAPI";
import EventFilters from "../components/EventFilters";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await EventsAPI.getEvents();
      setEvents(data);
      setFilteredEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="all-events-main">
      <EventFilters events={events} setFilteredEvents={setFilteredEvents} />
      <div className="all-events">
        {filteredEvents.map((event) => (
          <Event key={event.id} id={event.id} />
        ))}
      </div>
    </div>
  );
}
