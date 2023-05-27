import React, { useEffect, useState } from "react";
import firebase from "../../../../firebase";
import ConsoleImage from "./ConsoleImage";
import PcImage from "./PcImage";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Subscribe to real-time updates
    const unsubscribe = firebase
      .firestore()
      .collection("posts")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPosts(data);
      });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);

  const consolePosts = posts.slice(0, 2); // Get the first two data objects for ConsoleImage components
  const pcPosts = posts.slice(2); // Get the remaining data objects for PcImage components

  // Sort the pcPosts array by the numeric portion of the id
  pcPosts.sort((a, b) => {
    const idA = parseInt(a.id.split(" ")[1]);
    const idB = parseInt(b.id.split(" ")[1]);
    return idA - idB;
  });

  return (
    <>
      <h1 className="text-center fw-bolder m-5">
        Suivi Du Status En Temps Réel
      </h1>
      <div className="d-flex align-items-center justify-content-center gap-5 w-50 mx-auto">
        {consolePosts.map((post) => (
          <ConsoleImage key={post.id} reserved={post.isReserved} />
        ))}
      </div>
      <div className="row mt-5">
        {pcPosts.map((post) => (
          <div className="col-3 p-md-5 p-1 text-center" key={post.id}>
            <PcImage pcId={post.id} reserved={post.isReserved} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
