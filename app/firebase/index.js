import firebase from 'firebase';
  // Try Initialize Firebase multiple times, try catch block to make sure this is done only once.
try{
 var config = {
   apiKey: process.env.API_KEY,
   authDomain: process.env.AUTH_DOMAIN,
   databaseURL: process.env.DATABASE_URL,
   storageBucket: process.env.STORAGE_BUCKET
 };
 firebase.initializeApp(config);
} catch (e){
  console.log('Error Connecting to database');
}

export var firebaseRef = firebase.database().ref();
export default firebase; //exporting the root firebase library , they just need to import our config they wont need to import firebase
