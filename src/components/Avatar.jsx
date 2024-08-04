import { useState } from 'react';

function Avatar({ imageURL }) {
  const [imgSrc, setImgSrc] = useState(imageURL || "/default-avatar.jpg");

  return (
    <img 
      src={imgSrc} 
      onError={() => setImgSrc("/default-avatar.jpg")}
      alt="Avatar"
    />
  );
}
export default Avatar;