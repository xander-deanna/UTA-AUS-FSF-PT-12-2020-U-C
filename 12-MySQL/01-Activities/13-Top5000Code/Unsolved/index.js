const mysql = require("mysql")
const inquirer = require("inquirer")

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: 'P455w0rd?',
    database: 'top_songsDB',
  });

// query to search by artist
const queryArtist = (selArtist) => {
    connection.query('SELECT * FROM top5000 WHERE artist = ?', [selArtist], (err, res) => {
        console.log('Your Artist Search:')
        res.forEach(({ position, song, artist}) => {
        console.log(`${position} | ${song} | ${artist}`);
      });
      console.log('-----------------------------------\n\n');
    });
};

// query to search by if artist appears on top 5000 multiple times
const multipleHits = (showHits) => {
    connection.query('SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1', [showHits], (err, res) => {
        console.log('Your Top Duplicates Search:')
        if (err) throw err;
        res.forEach(({ position, song, artist}) => {
        console.log(`${position} | ${song} | ${artist}`);
        });
        console.log('-----------------------------------\n\n');
    });
};

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    queryArtist("Bing Crosby")
    multipleHits()
});
  