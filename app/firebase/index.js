import firebase from 'firebase';
  // Try Initialize Firebase multiple times, try catch block to make sure this is done only once.
try{
 var config = {
   apiKey: "AIzaSyBDeX3Ha0BJtC2y_nW64KIJ2XRQhdBfz-A",
   authDomain: "ghucl-f6653.firebaseapp.com",
   databaseURL: "https://ghucl-f6653.firebaseio.com",
   storageBucket: "ghucl-f6653.appspot.com",
   messagingSenderId: "853128599219"
 };
 firebase.initializeApp(config);
} catch (e){
  console.log('Error Connecting to database');
}

export var firebaseRef = firebase.database().ref();
export default firebase; //exporting the root firebase library , they just need to import our config they wont need to import firebase
