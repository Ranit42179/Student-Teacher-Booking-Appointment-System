// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getDatabase,
  ref,
  child,
  get,
  set,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvmvs6DoLAvdfi3Q9O1pbsMKOGvAbjp_s",
  authDomain: "student-teacher-appointm-4de14.firebaseapp.com",
  projectId: "student-teacher-appointm-4de14",
  storageBucket: "student-teacher-appointm-4de14.appspot.com",
  messagingSenderId: "1075146277861",
  appId: "1:1075146277861:web:edff269df5a6912af2e50c",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);



const addbtn = document.getElementById("add-teacher-btn");

addbtn.addEventListener("click", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let idno = document.getElementById("id-no").value;
  let dept = document.getElementById("depertment").value;
  let sub = document.getElementById("subject").value;

  set(ref(db, "TeacherList/" + idno), {
    Id_No: idno,
    Name: name,
    Depertment: dept,
    Subject: sub,
  })
    .then(() => {
      alert("Teacher Added Successfully");
    })
    .catch((error) => {
      alert("Unsussessfull");
      console.log(error);
    });
});

const updatebtn = document.getElementById("update-teacher-btn");

updatebtn.addEventListener("click", function (event) {
  event.preventDefault();

  let name = document.getElementById("name1").value;
  let idno = document.getElementById("id-no1").value;
  let dept = document.getElementById("depertment1").value;
  let sub = document.getElementById("subject1").value;

  update(ref(db, "TeacherList/" + idno), {
    Name: name,
    Depertment: dept,
    Subject: sub,
  })
    .then(() => {
      alert("Teacher Updated Successfully");
    })
    .catch((error) => {
      alert("Unsussessfull");
      console.log(error);
    });
});

const deletebtn = document.getElementById("delete-teacher-btn");

deletebtn.addEventListener("click", function (event) {
  event.preventDefault();

  let idno = document.getElementById("id-no2").value;

  remove(ref(db, "TeacherList/" + idno))
    .then(() => {
      alert("Teacher Deleted Successfully");
    })
    .catch((error) => {
      alert("Unsussessfull");
      console.log(error);
    });
});
