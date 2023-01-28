const dotenv = require('dotenv')
const express = require('express');
const cookieParser = require("cookie-parser")
const app = express();
const bodyParser = require('body-parser') 
const stripe = require('stripe')('sk_test_51M6AduSJVCB993v3gA3C5zHfGtwHMRKfToujVBOPpSQedPRafEj9zsbMi8YTI2p8tMzRIVNv4SsTXtO9dxUfxsFN00DwhQu1hS')
var cors = require('cors')
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/checkout", async (req, res) => {
    
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "https://ecom-avez.netlify.app/success",
        cancel_url: "https://ecom-avez.netlify.app/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});
//During 7th Step Creating Separate folder for routes
app.use(express.json());
app.use(require('./routes/auth'))
app.use(cookieParser());
// During 4th Step Securing API key and PORT
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT;

//During 5th Step Creating Separate folder for Connection
require('./db/connection')




app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT} ` )
})