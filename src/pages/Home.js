import React, { useState } from 'react'
import { auth, db, storage } from '../firebase'
import ImageList from './Imagelist'

const Home = () => {

  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    // Get current user
    const currentUser = auth.currentUser;
    if (!currentUser) {
      console.log('User not logged in.');
      return;
    }

    // Create storage path with user email
    const email = currentUser.email;
    const storagePath = `images/${email}/${image.name}`;

    
    const uploadTask = storage.ref(storagePath).put(image)
    uploadTask.on(
      'state_changed',
      (snapshot) => { },
      (error) => {
        console.log(error)
      },
      () => {
        storage
          .ref(storagePath)
          .getDownloadURL()
          .then((url) => {
            db.collection('posts').add({
              timestamp: new Date().getTime(),
              caption: caption,
              imageUrl: url,
              email: email,
            })
            setCaption('')
            setImage(null)
          })
      }
    )
  }

  return (
    <div>
      <h2>Bild Hochladen</h2>
      <input type="file" onChange={handleChange} />
      <input
        type="text"
        placeholder="Beschreibung Hinzufügen"
        value={caption}
        onChange={(event) => setCaption(event.target.value)}
      />
      <button onClick={handleUpload}>Upload</button>
      <div style={{ marginTop: "5%" }} className="image-list">
        <ImageList/>
      </div> 
    </div>
  )
}

export default Home
