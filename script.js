
// <script type="module">
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
//   import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyDTiDI4K6w_8ILfOPZ-w-VtevSCj_6NEsw",
//     authDomain: "insta-clone-a1487.firebaseapp.com",
//     projectId: "insta-clone-a1487",
//     storageBucket: "insta-clone-a1487.appspot.com",
//     messagingSenderId: "700387185880",
//     appId: "1:700387185880:web:dd442f0e216620048133ad",
//     measurementId: "G-L8Z3RYNSC4"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

//   const db = getDatabase(app);



// document.getElementById('clickableImage').addEventListener('click', function() {
//     document.getElementById('loginPopup').style.display = 'block';
//     document.getElementById('overlay').style.display = 'block'; // Show the overlay
// });

// document.getElementById('closeIcon').addEventListener('click', function() {
//     document.getElementById('loginPopup').classList.add('hidden');
//     document.getElementById('overlay').classList.add('hidden');
// });


// document.getElementById('submitBtn').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevents form submission for demonstration
//     set(ref(db, 'user/' + document.getElementById("username").value),
//               {
   
//                 username: document.getElementById("username").value,
//                 email: document.getElementById("email").value,
//                 PhoneNumber: document.getElementById("phone").value

//                 });
//             })
//             </script>
