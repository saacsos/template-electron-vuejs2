import { EventEmitter } from 'events'
import Firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};

let app = Firebase.initializeApp(config)
let db = app.database()
let emitter = new EventEmitter()

// Todo: firebase logic here




export default emitter
