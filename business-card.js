/*
   After you have deployed your Function, head to your phone number and configure the inbound SMS handler to point at this Function
*/

exports.handler = function(context, event, callback) {
    let twiml = new Twilio.twiml.MessagingResponse();
    let msg = "Yourname\nJobrole, Job title @ Company\youremail@example.com\n";
    const body = event.Body ? event.Body.toLowerCase() : null;
    switch (body) {
        case 'help':
            twiml.message("You can text the conference name to get my contact info");
            break;
        case 'shakacon':
            twiml.message(msg+"shakacon@example.com");
            break;
        case 'reinvent':
        case 're:invent':
            twiml.message(msg+'reinvent@example.com');
            break;
        case 'derbycon':
            twiml.message(msg+'derbycon@example.com')
            break;
        case 'blog':
            twiml.message(msg);
            break;
        default:
            twiml.message("Sorry, I don't understand you.  Try texting the conference name as input.");
            break;
    }

    callback(null, twiml);
};
