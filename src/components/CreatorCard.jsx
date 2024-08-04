import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import { FaExternalLinkAlt } from "react-icons/fa";
const CreatorCard = ({id, name, url, description, imageURL}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showReadMore, setShowReadMore] = useState(false);
    const descriptionRef = useRef(null);

    useEffect(() => {
        if (descriptionRef.current) {
            setShowReadMore(descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight);
        }
    }, [description]);

    return (
        <>
            <article className='creator-card'>
                <Link to={`/view/${id}`}> 
                    <div className='img-block'>
                        <Avatar 
                            imageURL={imageURL}
                        />
                    </div>                               
                    <header><h2>{name}</h2></header>   
                </Link>
                <Link className="visit-link" to={url}> 
                    Visit Creator <FaExternalLinkAlt size={15}/>
                </Link>             
                <div className={`card-description ${isExpanded ? 'expanded' : ''}`} ref={descriptionRef}>
                    {description || "No description added"}
                </div>
                {showReadMore && (
                    <button onClick={() => setIsExpanded(!isExpanded)} className="read-more-btn">
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                )}
                <footer>
                    <Link to={`/edit/${id}`}>
                        <button className='edit-button'>Edit</button>
                    </Link>
                </footer>          
            </article>
        </>
    );

};


export default CreatorCard;




// import React from 'react';

// function Card({ name, url, description, imageURL }) {
//   return (
//     <div className="card">
//       {imageURL && <img src={imageURL} alt={name} className="card-image" />}
//       <div className="card-content">
//         <h2 className="card-title">{name}</h2>
//         <p className="card-description">{description}</p>
//         <a href={url} className="card-link" target="_blank" rel="noopener noreferrer">
//           Visit Channel
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Card;

