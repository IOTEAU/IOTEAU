import { dbRef,firebaseAuth, user} from '../Config/connectFirebase'

  export function logIn(email, pw) {
    return firebaseAuth().signInWithEmailAndPassword(email, pw)
  }
  
  export function logOut() {
    return firebaseAuth().signOut()
  }