// allow the user to update a content creator's information OR delete the content creator

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../client";
import { MdDelete } from "react-icons/md";
import Toast from "../components/Toast";

function EditCreator() {
    const [creator, setCreator] = useState(null);

    const { id } = useParams();
    const navigate = useNavigate();


    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    useEffect(() => {
        fetchCreator();
    }, [id]);

    async function fetchCreator () {
        const { data, error } = await supabase.from('creators').select().eq('id', id).single();
        console.log("Inside fetchCreator")
        if (error){
            console.error('Error fetching creator: ', error);            
            setToastMessage("Error fetching creator");
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000); 
        }
        else{
            console.log("Fetched Creator successfully");
            setCreator(data);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreator(prev => ({ ...prev, [name]: value }));
    }

    async function updateCreator() {
        const { error } = await supabase.from('creators').update({
            name: creator.name,
            url: creator.url,
            description: creator.description,
            imageURL: creator.imageURL
        }).eq('id', id);

        if (error){
            console.error('Error updating creator: ', error);                        
            setToastMessage("Error updating creator");
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000); 
        }
        else{
            console.log('Creator updated successfully');
            navigate('/');
        }
    }

    async function deleteCreator() {
        const { error } = await supabase.from('creators').delete().eq('id', id);

        if (error){
            console.error('Error deleting creator: ', error);                        
            setToastMessage("Error deleting creator");
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000); 
        }
        else{
            console.log('Creator deleted successfully');
            navigate('/');
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateCreator();
    }

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this creator?')) {
            await deleteCreator();
        }
    };

    return (
        <div className="edit-creator">
            <h1>Edit Creator</h1>
            {creator ? (
                <form onSubmit={handleSubmit}>
                    <input name="name" value={creator.name || ''} onChange={handleChange} placeholder="Name" />
                    <input name="url" value={creator.url || ''} onChange={handleChange} placeholder="URL" />
                    <textarea name="description" value={creator.description || ''} onChange={handleChange} placeholder="Description" />
                    <input name="imageURL" value={creator.imageURL || ''} onChange={handleChange} placeholder="Image URL" />
                    <button type="submit">Update Creator</button>
                </form>
            ) : (
                <p>Loading...</p>
            )           
            }
            {showToast && <Toast message={toastMessage} />}
            <button className="delete-btn" onClick={handleDelete}>Delete <MdDelete/></button>
        </div>
    );
}

export default EditCreator;

