import { useState } from 'react';
import default_avatar from '../assets/default-avatar.jpg';

function Avatar({ imageURL }) {
  const [imgSrc, setImgSrc] = useState(imageURL || "/default-avatar.jpg");

  return (
    <img 
      src={imgSrc} 
      onError={() => setImgSrc(default_avatar)}
      alt="Avatar"
    />
  );
}
export default Avatar;