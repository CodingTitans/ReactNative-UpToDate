import auth from '@react-native-firebase/auth';

const authF = auth();

const authChannel = callback => {
  const subscriber = authF.onAuthStateChanged(callback);
  return subscriber;
};

const createUser = (email, pswd) => {
  authF
    .createUserWithEmailAndPassword(email, pswd)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });

  return true;
};

const validateUser = (email, pswd) => {
  console.log(email, pswd);
  authF
    .signInWithEmailAndPassword(email, pswd)
    .then(() => {
      console.log('user verified');
      return true;
    })
    .catch(error => {
      console.error(error);
      return false;
    });
};

const logoutUser = () => {
  authF.signOut().then(() => console.log('User signed out!'));

  return true;
};

export {authChannel, createUser, validateUser, logoutUser};
