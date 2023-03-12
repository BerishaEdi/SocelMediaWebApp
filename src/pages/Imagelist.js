import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

const Imagelist = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const postsRef = db.collection('posts');


    postsRef.get().then((querySnapshot) => {
      const urls = [];
      querySnapshot.forEach((doc) => {
        const { imageUrl, email, caption } = doc.data();
        urls.push({ url: imageUrl, email, caption });
      });
      setImages(urls);
    });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: "gray" }}>
      {images.map(({ url, email, caption }) => (
        <div key={email}>
          <p style={{backgroundColor: "gray"}}>Hochgeladen von: {email}</p>
          <img
            src={url}
            alt="storage-img"
            style={{ width: "500px", height: '500px', objectFit: 'cover', marginBottom: "1px", border: "3px solid black" }}
          />
          <p style={{ marginBottom: "50px"}}>Beschreibung: {caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Imagelist;
