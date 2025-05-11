import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ViewNote = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/notes/${id}`);
        setNote(response.data.Note);
      } catch (error) {
        console.error('Error fetching note:', error);
      }
    };
    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/notes/${id}`);
      window.location.href = '/'; // Redirect to the home page after deletion
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      {note ? (
        <>
          <h2 className="text-2xl font-bold mb-4">{note.title}</h2>
          <p className="text-gray-600">{note.body}</p>
          <div className="mt-4 flex space-x-4">
            <Link
              to={`/edit/${note._id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Edit
            </Link>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewNote;
