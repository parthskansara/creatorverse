// show all content creators
import React, { useState, useEffect } from 'react';
import CreatorCard from "../components/CreatorCard";
import { supabase } from '../client';
import Toast from '../components/Toast';

// https://supabase.com/docs/reference/javascript/select
// https://supabase.com/dashboard/project/gzegxawveboczqsxxyud/database/tables/29138

function ShowCreators(){
    const [creators, setCreators] = useState([]);

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    useEffect(() => {
        getCreators();
    }, []);

    async function getCreators() {
        const { data, error } = await supabase.from('creators').select().order('id', { ascending: true });
        if (error){
            console.error('Error fetching creator: ', error);                        
            setToastMessage("Error fetching creators. Please try again.");
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000); 
        }
        else{
            setCreators(data);
        }
    }

    return (
        <>
            <div className='container-fluid'>
                {creators ?
                    <div className="creator-grid">
                        {creators.map(creator => (
                                <CreatorCard 
                                    key={creator.id}                           
                                    id={creator.id}
                                    name={creator.name}
                                    url={creator.url}
                                    description={creator.description}
                                    imageURL={creator.imageURL}
                                />
                        ))}
                    </div> : 
                    <p>No creators yet! Add your first creator now.</p>
                }
                {showToast && <Toast message={toastMessage} />}
            </div>
        </>
    );
};

export default ShowCreators;