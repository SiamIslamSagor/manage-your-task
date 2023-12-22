import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import auth from "../../firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);

  /// google Provider
  const googleProvider = new GoogleAuthProvider();

  //   create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login user
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  /// google user login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // sign out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update user
  const updateUserData = (userName, userPhotoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: userPhotoUrl,
    });
  };

  // go to top
  const gooTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // auth observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, presentUser => {
      //set the user in state
      console.log("user observe by onAuthStateChanged )::::> ", presentUser);
      setUser(presentUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, [loading, user?.email]);

  const data = {
    user,
    setLoading,
    loading,
    setUserLoading,
    userLoading,
    createUser,
    logIn,
    googleLogin,
    logOut,
    updateUserData,
    gooTop,
  };

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    </QueryClientProvider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
