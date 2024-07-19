 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDvmvs6DoLAvdfi3Q9O1pbsMKOGvAbjp_s",
    authDomain: "student-teacher-appointm-4de14.firebaseapp.com",
    projectId: "student-teacher-appointm-4de14",
    storageBucket: "student-teacher-appointm-4de14.appspot.com",
    messagingSenderId: "1075146277861",
    appId: "1:1075146277861:web:edff269df5a6912af2e50c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database=getDatabase(app);
  const auth=getAuth();


//submit
const submit = document.getElementById('submit');
submit.addEventListener("click",
  function(event){
    event.preventDefault()

    //inputs
    const name = document.getElementById('name').value;
    const roll = document.getElementById('roll').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
  .then(()=> {
    set(ref(database, 'students/' + roll),{
      Name: name,
      Roll: roll,
      Email: email,
      Password: password
    })

    alert("Account Created Successfully")
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage)
  });
}

)