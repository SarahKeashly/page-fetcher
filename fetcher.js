

const fs = require('fs')

const request = require('request');

// request('http://www.example.edu/', function(error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });
// console.log(process.argv);

//array destructuring  - 
//Garrett Barr = [5,6,7]  a = arr[0] b = arr[1] c = arr[2]
//is the same as above => const [a, b, c] = arr

//_ // last two are the only two I'm interested in.  anything with _ is used to just say that linter doesn't need to worry about it
const [_node, _src, url, filepath] = process.argv
// const filePath = './index.html'
//go get content from url step
// const fetchDescription = function(url, callback) {

request(url, (error, response, body) => {
  //it is requests job to run the callback
  if (error) {
    console.log("error");
    return;
  }
  //get the body into the file that corresponds to the file variable

  // console.log('response', response);
  // console.log('body', body);
  // console.log("url", url);
  // console.log("error", error);

  fs.writeFile(filepath, body, err => {
    if (err) {
      console.log('error', err);
    }

  })


})



// }

// fetchDescription(url);
// download the content on the page from the url
// put that downloaded content into a variable
// create a new file and put in the content that was downloaded(write file)
// output that it was downloaded and saved with how many bytes.