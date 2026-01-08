const functions = require("firebase-functions");
const app = require("./app");

// Export the Express app as a Cloud Function named 'api'
exports.api = functions.https.onRequest(app);
