/* --- Global --- */
import {useEffect, useState} from 'react';

/* --- Local --- */
import {withFirebase} from '@horizin/firebase-system';
import {firebase} from '@settings/firebase';
import {github} from '@settings/firebase.auth.providers.js';

/* --- GithubLogin : Component --- */
const GithubLogin = props => {
  const firebaseProvider = withFirebase();
  const [loginRequest, setLoginRequest] = useState(false);

  const userSignOut = async () => {
    try {
      firebase.auth().signOut();
      firebaseProvider.userSignOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loginRequest) {
      try {
        firebase
          .auth()
          .signInWithPopup(github)
          .then(function(result) {
            var user = result.user;
            firebaseProvider.userSet(user);
          })
          .catch(function(error) {});
      } catch (error) {}
    }
  }, [loginRequest]);
  return firebaseProvider.user ? (
    <UserProfile
      photoURL={firebaseProvider.user.photoURL}
      displayName={firebaseProvider.user.displayName}
      signOut={userSignOut}
    />
  ) : (
    <Atom.Button
      white
      rounded
      type="button"
      onClick={setLoginRequest}
      sx={{width: '100%'}}>
      <Atom.Image
        src="https://img.favpng.com/4/20/21/github-computer-icons-icon-design-png-favpng-KaDTwuHWgG8D1qn47QW2hK7Gj.jpg"
        sx={{
          borderRadius: 99999,
          width: 20,
        }}
      />
      <Atom.Span sx={{ml: 2}}>
        Github Login (Required to Submit Feedback)
      </Atom.Span>
    </Atom.Button>
  );
};

const UserProfile = props => {
  return (
    <Atom.Flex alignCenter>
      <Atom.Image
        src={props.photoURL}
        sx={{
          borderRadius: 99999,
          border: '2px solid rgba(255,255,255, 0.7)',
          boxShadow: 1,
          mr: 3,
          width: 32,
        }}
      />
      <Atom.Box>
        <Atom.Heading as="h6" sx={{fontSize: [1, 1, 1], mb: 1}}>
          {props.displayName}
        </Atom.Heading>
        <Atom.Span pointer onClick={props.signOut} sx={{fontSize: 0}}>
          Logout
        </Atom.Span>
      </Atom.Box>
    </Atom.Flex>
  );
};

export default GithubLogin;
