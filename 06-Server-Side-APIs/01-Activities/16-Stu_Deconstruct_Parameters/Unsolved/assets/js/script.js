fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.

//Per_page = 10 results per page
//state = issues that are in an open state
//sort = how the results are sorted (based on creation date)
//direction = decending or ascending

//A query string is a part of a uniform resource locator (URL) that assigns values to specified parameters
//the portion of a URL where data is passed to a web application and/or back-end database.
