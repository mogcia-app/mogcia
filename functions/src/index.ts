import * as functions from "firebase-functions";

// 🚀 テストAPI
export const helloWorld = functions.https.onRequest((request, response) => {
  console.log("🐛 helloWorld endpoint hit!");
  response.send("Hello from Firebase Functions!");
});
