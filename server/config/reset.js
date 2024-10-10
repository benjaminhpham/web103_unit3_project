import { pool } from "./database.js";
import { musicEvents } from "../data/musicEvents.js";
import { locations } from "../data/locations.js";

const createLocationsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS locations;
    
    CREATE TABLE IF NOT EXISTS locations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      city VARCHAR(255) NOT NULL,
      state VARCHAR(255) NOT NULL,
      zip VARCHAR(255) NOT NULL,
      image TEXT NOT NULL
    );
  `;
  try {
    await pool.query(createTableQuery);
    console.log("Locations table created successfully");
  } catch (err) {
    console.log("Error creating location table", err);
  }
};

const createEventsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS events;
    
    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      date DATE NOT NULL,  
      time TIME NOT NULL, 
      location INTEGER NOT NULL,
      image TEXT NOT NULL 
    ); 
    `;

  try {
    await pool.query(createTableQuery);
    console.log("Event table created successfully");
  } catch (err) {
    console.error("Error creating event table", err);
  }
};

const seedLocationsTableWithData = async () => {
  await createLocationsTable();

  const insertQuery = `INSERT INTO locations(name, address, city, state, zip, image) VALUES ($1, $2, $3, $4, $5, $6)`;

  try {
    for (let location of locations) {
      const { name, address, city, state, zip, image } = location;
      const values = [name, address, city, state, zip, image];

      await pool.query(insertQuery, values);
      console.log(`${name} has been inserted successfully`);
    }
    console.log("---All location data has been inserted successfully---");
  } catch (err) {
    console.error("Error inserting location data", err);
  }
};

const seedEventsTableWithData = async () => {
  await createEventsTable();

  const insertQuery = `INSERT INTO events(title, date, time, location, image) VALUES ($1, $2, $3, $4, $5)`;

  try {
    for (const event of musicEvents) {
      const { title, date, time, location, image } = event;
      const values = [title, date, time, location, image];

      await pool.query(insertQuery, values);
      console.log(`${title} has been inserted successfully`);
    }
    console.log("---All events have been inserted successfully---");
  } catch (err) {
    console.error(`Error inserting events data`, err);
  }
};

seedLocationsTableWithData();
seedEventsTableWithData();
