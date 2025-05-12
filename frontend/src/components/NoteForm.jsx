import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const NoteForm = ({ isEdit = false, initialData = { title: '', body: '' } }) => {
  const [note, setNote] = useState(initialData);
  const { title, body } = note;
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (isEdit && id) {
      // Fetch the note details for editing
      const fetchNote = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/notes/notes/${id}`);
          setNote(response.data.Note);
        } catch (error) {
          console.error('Error fetching note:', error);
        }
      };
      fetchNote();
    }
  }, [isEdit, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await axios.put(`http://localhost:5000/api/notes/notes/${id}`, note);
        navigate(`/note/${id}`);
      } else {
        await axios.post('http://localhost:5000/api/notes/post', note);
        navigate('/');
      }
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">{isEdit ? 'Edit Note' : 'Create Note'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter title"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Body</label>
          <textarea
            name="body"
            value={body}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter note content"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          {isEdit ? 'Update Note' : 'Create Note'}
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
