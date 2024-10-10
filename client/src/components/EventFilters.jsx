import React from "react";

export default function EventFilters({ events, setFilteredEvents }) {
  const filterEvents = (e) => {
    setFilteredEvents(
      e.target.value === "all"
        ? events
        : events.filter((event) => event.location === parseInt(e.target.value))
    );
  };

  const showAllEvents = () => {
    setFilteredEvents(events);
  };

  return (
    <div className="event-filters">
      <select name="" id="" onChange={filterEvents}>
        <option name="See events at ..." value="all">
          See events at ...
        </option>
        <option name="The Echo Lounge & Music Hall" value={1}>
          The Echo Louge & Music Hall
        </option>
        <option name="House of Blues" value={2}>
          House of Blues
        </option>
        <option name="The Pavilion at Toyota Music Factory" value={3}>
          The Pavilion at Toyota Music Factory
        </option>
        <option name="American Airlines Center" value={4}>
          American Airlines Center
        </option>
      </select>
      <button onClick={showAllEvents}>Show All Events</button>
    </div>
  );
}
