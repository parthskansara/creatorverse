// view a single content creator

import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CreatorPage from "../components/CreatorPage";
import { supabase } from "../client";

function ViewCreator() {
    const [creator, setCreator] = useState(null)
    const { id } = useParams();
    const navigate = useNavigate();

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    useEffect(() => {
        fetchCreator();
    }, [id])

    async function fetchCreator () {
        const { data, error } = await supabase.from('creators').select().eq('id', id).single();
        if (error){
            console.error('Error fetching creator: ', error);                        
            setToastMessage("Error fetching creator");
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000); 
        }
        else{
            setCreator(data);
        }
    }

    async function deleteCreator() {
        if (window.confirm("Are you sure you want to delete this creator?"))
        {
            const { error } = await supabase.from('creators').delete().eq('id', id);
            if (error){
                console.error('Error deleting creator: ', error);                            
                setToastMessage("Error deleting creator");
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000); 
            }
            else{
                console.log('Deleted creator successfully');
                navigate('/');
            }
        }
    }

    if (!creator) return <div>Loading..</div>

    return (
        <div className='view-creator'>
            <CreatorPage 
                creator={creator}
                onDelete={deleteCreator}
            />            
        </div>
    );
}

export default ViewCreator;