import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import './firebase'

const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
createUserWithEmailAndPassword(auth, 'email@gmail.com', 'password123')
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorCode,errorMessage)
  });