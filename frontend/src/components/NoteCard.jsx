import { Link } from 'react-router-dom';

const NoteCard = ({ note }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition">
      <h3 className="text-xl font-semibold">{note.title}</h3>
      <p className="text-gray-600">{note.body.slice(0, 100)}...</p>
      <div className="mt-4 flex justify-between">
        <Link
          to={`/note/${note._id}`}
          className="text-blue-500 hover:text-blue-600"
        >
          View
        </Link>
        <Link
          to={`/edit/${note._id}`}
          className="text-blue-500 hover:text-blue-600"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default NoteCard;
