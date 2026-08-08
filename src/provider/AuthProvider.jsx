import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
   const updateProfileFunc = (displayName, photoURL) => {
     return updateProfile(auth.currentUser, {
       displayName,
       photoURL,
     });
   };
  const logOutUser = () => {
    return signOut(auth);
  };
  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = ()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubSignIn = ()=>{
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  const emailVerification = () =>{
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    logOutUser,
    loginUser,
    loading,
    setLoading,
    updateProfileFunc,
    googleSignIn,
    githubSignIn,
    emailVerification,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
