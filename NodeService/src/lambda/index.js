var aws = require("aws-sdk");
var ses = new aws.SES({ region: "eu-central-1" });

const prettyPrintProduct = (product) => {
  return `
ID: ${product.id}
Name: ${product.name}
Description: ${product.description}\n`;
}

exports.handler = async function (event) {
  
  event.Records.forEach(record => {
    const order = JSON.parse(record.body);
    const user = order.user;
    const products = order.products;
  
    const emailText = `Dear ${user},

We've received your order with the following items:\n
${products
  .map(product =>  prettyPrintProduct(product))
  .reduce((prev, next) => 
`${prev}
${next}
------------------`,
"------------------")}\n\n
Thank you for shopping with us!

The Distributed Programming Demo Team.`;
  
  console.log(emailText);
  
  var params = {
    Destination: {
      ToAddresses: ["vladnemes5@gmail.com"],
    },
    Message: {
      Body: {
        Text: { Data: emailText },
      },

      Subject: { Data: "[DP] Your order at DP Demo" },
    },
    Source: "dt-demo@varadymobex.ro",
  };
  ses.sendEmail(params);
  });
 
  return true; 
};