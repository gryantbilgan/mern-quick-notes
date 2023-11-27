// const mongoose = require('mongoose');

// mongoose.connect(process.env.DATABASE_URL);

// const db = mongoose.connection;

// db.on('connected', function () {
//   console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
// });

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
// Event listener for connection error
db.on('error', function (err) {
  console.error(`Error connecting to the database: ${err}`);
});
// Event listener for successful connection
db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});



// Event listener for disconnection
db.on('disconnected', function () {
  console.log('Disconnected from the database');
});

// Event listener for process termination, to close the database connection
process.on('SIGINT', function () {
  db.close(function () {
    console.log('Database connection closed due to application termination');
    process.exit(0);
  });
});

