var url = 'http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf110/greeting'

var sendPost = (options, callback) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      name: options.username,
      message: options.usermessage
    }),
    headers: {
      "Content-Type": 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      return response.text();
    }
    throw new Error('Request failed!');
  }, networkError => console.log(networkError.message))
    .then(responsetext => {
      console.log(responsetext)
      callback(responsetext);
    })
}

export default sendPost

// import $ from "jquery";


// var sendPost = (options, callback) => {
//   $.ajax({
//     type: 'POST',
//     url: 'http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf110/greeting',
//     contentType: 'application/json',
//     data: JSON.stringify({
//       name: options.username,
//       message: options.usermessage
//     }),
//     success: (data) => {
//       console.log('success')
//       callback(data);
//     },
//     error: (error) => {
//       console.error(error)
//     }
//   })
// }