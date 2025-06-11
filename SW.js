// const cheerio = require('cheerio');



// (async () => {
//   const url = 'https://www.example.com';
//   const response = await fetch(url);

//   const $ = cheerio.load(await response.text());
//   console.log($.html());

// })();

const cheerio = require('cheerio');
const fs = require('fs');
const XLSX = require('xlsx');

(async () => {
  const url = 'https://www.example.com';
  const response = await fetch(url);
  const $ = cheerio.load(await response.text());

  // Example: Extracting all <h2> texts from the page
//   const data = [];
//   $('h2').each((i, el) => {
//     data.push({ Title: $(el).text().trim() });
//     console.log(data)
//   });

  // Convert to worksheet and workbook
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  // Write to file
  XLSX.writeFile(workbook, 'scraped_data.xlsx');
  console.log('Data saved to scraped_data.xlsx');
})();
