import { useState } from 'react';
import "./App.css";
import Navbar from './components/sidebar';
import Container from './components/containers';
import OffcanvasNavbar from './components/offCanvasNavbar';

//// Firebase Imports ////
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { s_auth, s_firestore } from "./config/firebase";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { Timestamp, collection, query, orderBy, limit, addDoc, getDocs } from "firebase/firestore";



const communitiesRef = collection(s_firestore, 'communities');

const googleProvider = new GoogleAuthProvider();


function HomePage() {

  const [user, ,] = useAuthState(s_auth);

  return (
    <div className="App">
      <section>
        <OffcanvasNavbar />
        {user ? <MakeCommunity /> : <SignIn />}
      </section>
    </div>
  );

}

////////////////////////
///  Make Community  ///
////////////////////////

function MakeCommunity() {
  const userId = s_auth?.currentUser?.uid;
  const [communityName, setCommunityName] = useState("");
  const [communityDescription, setCommunityDescription] = useState("");

  const submitCommunity = async (Name, Description, userId) => {
    const community = {
      name: Name,
      createdOn: Timestamp.now(),
      uid: userId,
      description: Description
    };

    if (Name !== "" && Description !== "") {
      try {
        await addDoc(communitiesRef, community);
        setCommunityName("");
        setCommunityDescription("");
      } catch (e) {
        console.error(e);
      }
    }
  }

  const handleKeyDown = (e, msg, uid, descp) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (msg !== "" && descp !== "") {
        submitCommunity(msg, descp, uid);
        setCommunityName("");
        setCommunityDescription("");
      }
      e.target.value = "";
    }
  };

  const q = query(communitiesRef, orderBy("createdOn", "desc"), limit(25));
  const [communities] = useCollectionData(q, { idField: 'id' });

  return (
    <div className='home-page'>
      <form>
        <input
          placeholder='Community Name...'
          value={communityName}
          onChange={(e) => setCommunityName(e.target.value)}
        />
        <input
          placeholder='Description...'
          value={communityDescription}
          onChange={(e) => setCommunityDescription(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, communityName, userId, communityDescription)}
        />
      </form>

      {/* <form class="row g-3">

        <div class="col-md-4">
          <label for="validationServer01" class="form-label">Name</label>
          <input type="text" class="form-control is-valid" id="validationServer01" required />
          <div class="valid-feedback"> Looks good! </div>
        </div>
       
        <div class="mb-3">
          <label for="validationTextarea" class="form-label">Textarea</label>
          <textarea class="form-control" id="validationTextarea" placeholder="Description..." required></textarea>
          <div class="invalid-feedback"> Please enter a description in the textarea. </div>
        </div>

        <div class="mb-3">
          <button class="btn btn-primary" type="submit">Submit</button>
        </div>

      </form> */}

      <button onClick={() => submitCommunity(communityName, communityDescription, userId)}>
        Submit
      </button>


      {communities && communities.length > 0 ? (
        <div>
          {communities.map(comm => (
            <Container key={comm.id} community={comm} />
          ))}
        </div>
      ) : (
        <p>No communities available</p>
      )}
    </div>
  );
}

// function CommunityDiv({ community }) {
//   // const { name, createdOn, description } = community;
//   // const createdOnDate = createdOn.toDate().toLocaleString();

//   return (
//     <Container key={community.id} comm={community} />
//   );
// }



// function CommunityDiv({community}) {
//   const { name, createdOn, description } = community;
//   const createdOnDate = createdOn.toDate().toLocaleString();

//   return (
//     <div className='community-div'>
//       <h2>{name}</h2>
//       <h4>{createdOnDate}</h4>
//       <h4>{description}</h4>
//     </div>
//   )
// }


////////////////////////
//// Sign In/Out  //////
////////////////////////

function SignIn() {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(s_auth, googleProvider);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <button onClick={signInWithGoogle}>Sign In With Google</button>
  )
}




export default HomePage;
