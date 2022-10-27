const axios = require("axios");

exports.handler = async function (event, context) {
  // console.log('EVENTTTTT')
  // console.log(event);
  // console.log('CONTEXTT')
  // console.log(context);
  
  try {
    const id = event.queryStringParameters.id || '1';
    const url = `${process.env.REACT_APP_TODO_BASE_URL}/${id}`;
    console.log(url);

    const response = await axios.get(`${process.env.REACT_APP_TODO_BASE_URL}/${id}`);

    // console.log("RESPONSSE")
    console.log(response);

    return {
      statusCode: 200,
      body: JSON.stringify({ title: response.data.title }),
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};