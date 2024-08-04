// allow the user to add a new content creator
import React, { useState} from 'react';
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';
import Toast from '../components/Toast';

function AddCreator(){
    const [creator, setCreator] = useState({
        name: '',
        url: '',
        description: '',
        imageURL: ''        
    });


    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const navigate = useNavigate();

    async function addCreator() {
        const { error } = await supabase.from('creators').insert({ 
            name: creator.name, 
            url: creator.url, 
            description: creator.description, 
            imageURL: creator.imageURL
        });
        if (error) {
            console.error('Error adding creator: ', error);
            setToastMessage('Error adding creator');
            setShowToast(true);            
            setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
        }
        else {
            console.log('Creator added successfully!');
            setCreator({ name: '', url: '', description: '', imageURL: '' });
            navigate("/");
        }
    }
    const handleChange = (e) => {
        setCreator({ ...creator, [e.target.name]: e.target.value });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addCreator();
    }
    return (
        <div className="add-creator">
            <h1>Add New Creator</h1>
            <form className="add-creator-form" onSubmit={handleSubmit}>
                <input name="name" value={creator.name} onChange={handleChange} placeholder="Name" required/>
                <input name="url" value={creator.url} onChange={handleChange} placeholder="URL" required/>
                <textarea name="description" value={creator.description} onChange={handleChange} placeholder="Description" required/>
                <input name="imageURL" value={creator.imageURL} onChange={handleChange} placeholder="Image URL" />
                <button type="submit">Add Creator</button>
            </form>

            {showToast && <Toast message={toastMessage} />}
        </div>
    );
};

export default AddCreator;