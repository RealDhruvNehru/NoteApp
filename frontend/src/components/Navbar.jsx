import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">
          Note App
        </Link>
        <div>
          <Link to="/" className="px-4 hover:underline">
            Home
          </Link>
          <Link to="/create" className="px-4 hover:underline">
            Create Note
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
