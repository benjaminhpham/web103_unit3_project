import { pool } from "../config/database.js";

const getLocations = async (req, res) => {
  const query = `SELECT * FROM locations`;
  try {
    const results = await pool.query(query);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getLocationById = async (req, res) => {
  const { location_id } = req.params;
  const query = `SELECT * FROM locations WHERE id = $1`;
  try {
    const results = await pool.query(query, [parseInt(location_id)]);
    res.status(200).json(results.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default { getLocations, getLocationById };
