// import axios from 'axios';
const axios = require('axios');



const handler = async (event) => {
    // console.log('API KEYYYYY:')
    // // console.log('Authorization:'+ `Bearer ${proces.env.REACT_APP_API_KEY}`)
    // console.log('Event:')
    // console.log(event);
    // console.log(context);


    try {

    
        const name = event.queryStringParameters.name || 'test';
        const email =  event.queryStringParameters.email || 'test';
        const surname =  event.queryStringParameters.surname || 'test@test.tes';
        
        const data = {
            records: [
                {
                    fields: {
                        email: email,
                        name: name,
                        surname: surname
                    }
                }
                ]
        };

        const headers_ = {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            'Content-Type': 'application/json'
        };

        const config = {
            headers: headers_
        }

        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_API_ID}/Sheet1`;

        const response = await axios.post(url, data, config);


        return { 
                statusCode: 200,
                body: JSON.stringify(response.data),
                ok:true
            };
    
    } catch (err) {
        return {
                statusCode: 404,
                body: err.toString(),
                ok:false
            };
    };
};

module.exports = { handler }
