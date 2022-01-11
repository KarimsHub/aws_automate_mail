const AWS = require('aws-sdk');
AWS.config.update({
    region: 'eu-central-1'
})
const ses = new AWS.SES();

exports.handler = async (event) => {
    const params = {
        Destination: {
            ToAddresses: ['insertemailaddres']
        },
        Message: {
            Subject: {Data: 'Test Email'},
            Body: {
                Text: {Data: 'Hello: \n\n this is just a test message!'}
            }
        },
        Source: 'insertemailaddres'
    };

    await ses.sendEmail(params).promise().then(response => {
        console.log('Successfully sent email!');

    }, error => {
        console.error('An error occurred while attempting to send mail: ', error);
    })
}