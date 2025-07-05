import { useState } from "react";

const users = [
  { id: "1", role: "Admin", email: "admin@entnt.in", password: "admin123" },
  {
    id: "2",
    role: "Patient",
    email: "john@entnt.in",
    password: "patient123",
    patientId: "p1",
  },
];

function Login({ setUser, setIsLoggedIn, setLogbtn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h2 className="text-center display-6 mt-5">
        Welcome back to Tooth Desk <br></br>
        Where every smile begins with smart care.<br></br>
        Log in to manage appointments, patient records, and more — effortlessly.
      </h2>
      <div
        className="login-page  d-flex justify-content-center align-items-center text-center "
        style={{ height: "70vh", width: "100vw" }}
      >
        <div className="login-container border border-2 border-dark p-5 rounded-3 shadow-lg ">
          <h2 className="text-center">Login</h2>
          <form>
            <div className="form-group p-2">
              <label htmlFor="username">Username:</label>
              <input
                className="m-2"
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group p-2 ">
              <label htmlFor="password">Password:</label>
              <input
                className="m-2"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                const user = users.find(
                  (u) => u.email === username && u.password === password
                );
                if (user) {
                  localStorage.setItem("loggedUser", JSON.stringify(user));
                  setIsLoggedIn(true);
                  setUser(user);
                  setLogbtn(false);
                } else {
                  alert("Invalid username or password");
                }
                setPassword("");
                setUsername("");
              }}
            >
              Login
            </button>
          </form>
          <p className="mt-3">
            {" "}
            New user?{" "}
            <span style={{ cursor: "pointer", color: "purple" }}>
              <strong>Please Register</strong>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
