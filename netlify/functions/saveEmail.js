// import axios from 'axios';
const axios = require('axios');



exports.handler = async function (event, context) {
    // console.log('API KEYYYYY:')
    // // console.log('Authorization:'+ `Bearer ${proces.env.REACT_APP_API_KEY}`)
    // console.log('Event:')
    // console.log(event);
    // console.log(context);


    try {
        const {name, email, surname } = event.queryStringParameters;
        
        const data = {
            records: [
                {
                    fields: {
                        email: email,
                        name: name,
                        surname: surname,
                    }
                }
                ]
        };

        const headers_ = {
            'Authorization': `Bearer ${proces.env.REACT_APP_API_KEY}`,
            'Content-Type': 'application/json'
        };

        const config = {
            headers: headers_,
        }

        // console.log('CONFIGG')
        // console.log(config);

        // const response = await axios.post(`https://api.airtable.com/v0/${APP_ID}/Sheet1`, data, config);

        const response = await fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_APP_ID}/Sheet1`,
        {
            method: 'POST',    
            body: JSON.stringify(data),
            headers: headers_
        })


        return { 
                statusCode: 200,
                body: JSON.stringify(response),
                ok:true
            };
    
    } catch (err) {
        throw {
                statusCode: 404,
                body: JSON.stringify(err),
                ok:false
            };
    };
};