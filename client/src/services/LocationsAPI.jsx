import { useLocation } from "react-router-dom";

const URL = "http://localhost:3000/api/locations";

const getAllLocations = async () => {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
};

const getLocationById = async (id) => {
  const res = await fetch(`${URL}/${id}`);
  const data = await res.json();
  return data;
};

export default { getAllLocations, getLocationById };
