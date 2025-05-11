import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Your backend URL
});

export const fetchNotes = async () => {
  return api.get('/notes');
};

export const fetchNote = async (id) => {
  return api.get(`/notes/${id}`);
};

export const createNote = async (note) => {
  return api.post('/post', note);
};

export const updateNote = async (id, note) => {
  return api.put(`/notes/${id}`, note);
};

export const deleteNote = async (id) => {
  return api.delete(`/notes/${id}`);
};
