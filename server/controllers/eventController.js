import { pool } from "../config/database.js";
import {
  format,
  differenceInMonths,
  differenceInDays,
  differenceInYears,
} from "date-fns";

const getRemaining = (inputDate) => {
  const startDate = new Date();
  const endDate = new Date(inputDate);

  const years = differenceInYears(endDate, startDate);
  const months = differenceInMonths(endDate, startDate) % 12;
  const days = differenceInDays(endDate, startDate) % 30;

  return {
    years,
    months,
    days,
  };
};

const formatDate = (date) => {
  return format(date, "MMM dd, yyyy");
};

const formatTime = (time) => {
  return parseInt(time.replace(/:/g, "").slice(0, 4));
};

const getEvents = async (req, res) => {
  const query = `SELECT id, title, date, time, location, image FROM events;`;
  try {
    const results = await pool.query(query);
    const data = results.rows.map((row) => ({
      ...row,
      time: formatTime(row.time),
      date: formatDate(row.date),
      remaining: getRemaining(row.date),
    }));

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getEventById = async (req, res) => {
  const { event_id } = req.params;
  const query = `SELECT id, title, date, time, location, image FROM events WHERE id = $1;`;
  try {
    const results = await pool.query(query, [event_id]);
    const data = {
      ...results.rows[0],
      time: formatTime(results.rows[0].time),
      date: formatDate(results.rows[0].date),
      remaining: getRemaining(results.rows[0].date),
    };

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getEventsByLocationId = async (req, res) => {
  const { location_id } = req.params;
  const query = `SELECT * FROM events WHERE location = $1`;
  try {
    const results = await pool.query(query, [parseInt(location_id)]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default { getEvents, getEventById, getEventsByLocationId };
