let form = document.getElementById('contact-form');
let button = document.getElementById('submit');
let succes = document.getElementById('success');
let failure = document.getElementById('failure');

const headers_ = {
    'Authorization': 'Bearer keyoGVRavQjrgVp6e',
    'Content-Type': 'application/json'
};

const SubForm = (e) => {
    e.preventDefault();

    fetch("https://api.airtable.com/v0/appITs3uxExXOohSN/Sheet1",
        {
            method: 'POST',    
            body: JSON.stringify(
                {
                    records: [
                      {
                        fields: {
                            email: `${e.target.email.value}`,
                            name: `${e.target.name.value}`,
                            surname: `${e.target.surname.value}`
                        }
                      }
                    ]
                  }),
            headers: headers_
        })
        .then((resp) => {
            console.log(resp)
            form.style.display='none';
            succes.style.display='flex';
        })
        .catch(function (error) {
            console.log(error);
            form.style.display='none';
            failure.style.display='flex';
        });
};



form.addEventListener('submit', SubForm);

// Authorization: Bearer $keyoGVRavQjrgVp6e

