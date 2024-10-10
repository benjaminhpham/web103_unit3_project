const URL = "http://localhost:3000/api/events";

const getEvents = async () => {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
};

const getEventsById = async (id) => {
  const res = await fetch(`${URL}/${id}`);
  const data = await res.json();
  return data;
};

const getEventsByLocation = async (id) => {
  const res = await fetch(`${URL}/locations/${id}`);
  const data = await res.json();
  return data;
};

export default { getEvents, getEventsById, getEventsByLocation };
