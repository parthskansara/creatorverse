import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { MdEdit, MdDelete } from "react-icons/md";

const CreatorPage = ({creator, onDelete}) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [showReadMore, setShowReadMore] = useState(false);
    const descriptionRef = useRef(null);

    useEffect(() => {
        if (descriptionRef.current) {
            setShowReadMore(descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight);
        }
    }, [creator.description]);
    return (
        <>
            <div className='creator-page-grid'>
                <div className='creator-page-img'>
                    <Avatar 
                        imageURL={creator.imageURL}
                    />
                </div>
                <div className='content-block'>
                    <h1>{creator.name}</h1>
                    <Link className="visit-link" to={creator.url}> 
                        Visit Creator <FaExternalLinkAlt size={15}/>
                    </Link>
                    <div className={`creator-page-description ${isExpanded ? 'expanded' : ''}`} ref={descriptionRef}>
                        <p>{creator.description || "No description added"}</p>
                    </div>
                    {showReadMore && (
                        <button onClick={() => setIsExpanded(!isExpanded)} className="read-more-btn">
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    )}
                    <br></br>
                    <br></br>
                    <div className='creator-page-actions'>
                        <Link to={`/edit/${creator.id}`}>
                            <button className='edit-button'>Edit <MdEdit/></button>
                        </Link>
                        <button className="delete-btn" onClick={onDelete}>Delete <MdDelete/></button>
                    </div>
                    
                </div>

            </div>

            {/* <div className='container img-block' style={{"width": "10vw"}}>
                <img src={creator.imageURL}/>
            </div>  
            <p>{creator.name}</p>
            <Link to={creator.url}>
                    <button>Visit</button>
                </Link> 
            <p>{creator.description}</p> */}
        </>
    );

};


export default CreatorPage;