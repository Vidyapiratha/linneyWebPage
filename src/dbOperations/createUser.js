import { db } from "../firebase/firebase";
import { collection, addDoc, setDoc } from "firebase/firestore";

const createUser = async (email, password) => {
  try {
    const docRef = await addDoc(collection(db, "users"),
      {
        email,
        password
      },
      { merge: true }
    );
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default createUser;
