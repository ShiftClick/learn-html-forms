const html = require("./response/html");

const expectedKeys = ["name", "email", "tel", "message", "marketingConsent"];

exports.handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: html({ event, expectedKeys }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
