import { gql, useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import "./Signup.css";

const SIGNUP = gql`
  mutation Reg(
    $name: String!
    $email: String!
    $password: String!
    $bio: String
  ) {
    signup(name: $name, email: $email, password: $password, bio: $bio) {
      userError
      token
    }
  }
`;

const Signin = () => {
  const [userError, setUserError] = useState(null);
  const [signup, { data, loading, error }] = useMutation(SIGNUP);

  const handleRegister = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      bio: e.target.bio.value,
    };
    console.log("data: ", data);

    signup({
      variables: data,
    });
  };

  useEffect(() => {
    if (data && data.signup.token) {
      console.log("token", data.signup.token);
      localStorage.setItem("token", data.signup.token);
    }
    if (data && data.signup.userError) {
      setUserError(data.signup.userError);
    }
  }, [data]);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  console.log("data: ", data);
  console.log(userError);

  return (
    <div className="form">
      <form onSubmit={handleRegister}>
        <label htmlFor="">Your Email</label>
        <input name="email" type="email" />
        <label htmlFor="">Your Password</label>
        <input name="password" type="password" />

        <button type="submit" className="rounded-full p-2 bg-white text-black">
          Login
        </button>
      </form>
      {userError && <div className="error">{userError}</div>}
    </div>
  );
};

export default Signin;
