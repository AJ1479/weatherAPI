const request = require('request');
const { argv } = require('yargs');
require('dotenv').config();

const apiKey = process.env.API_KEY;
const city = argv.c || 'portland';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

request(url, (err, response, body) => {
  if (err) {
    console.log('error:', err);
  } else {
    const weather = JSON.parse(body);
    const message = `It's ${weather.main.temp} degrees in ${weather.name}`;
    console.log(message);
  }
});
