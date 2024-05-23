import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className=" my-20  flex flex-col gap-8 justify-center items-center">
      <Link to="/register">
        <button>Register</button>
      </Link>
      <Link to="/login">
        <button>login</button>
      </Link>
      <Link to="/posts">
        <button>Posts</button>
      </Link>
    </div>
  );
};

export default App;
