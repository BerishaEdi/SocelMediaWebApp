import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

const Imagelist = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const postsRef = db.collection('posts');

    // Retrieve all documents in the posts collection
    postsRef.get().then((querySnapshot) => {
      const urls = [];
      querySnapshot.forEach((doc) => {
        // Get the imageUrl and timestamp fields from the document data
            const { imageUrl, email } = doc.data();
        // Add the url and timestamp to the urls array as an object
        urls.push({ url: imageUrl, email });
      });
      // Set the images state with the urls array
      setImages(urls);
    });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: "gray" }}>
      {images.map(({ url, email }) => (
        <div key={email}>
          <p style={{backgroundColor: "gray"}}>{email}</p>
          <img
            src={url}
            alt="storage-img"
            style={{ width: "500px", height: '500px', objectFit: 'cover', marginBottom: "10px", border: "3px solid black" }}
          />
          
        </div>
      ))}
    </div>
  );
};

export default Imagelist;
