import { useState } from "react";
import { login, logout } from "./features/auth/authslice";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./features/count/countslice";
import { onChanageInput } from "./features/input/inputslice";

export default function App() {
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");
  const [state, setState] = useState("");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const count = useSelector((state) => state.counter.count);
  const inputvalue = useSelector((state) => state.input.inputValue);

  const handleLogin = () => {
    dispatch(login({ username }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center p-6">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-teal-400 mb-4">Redux Toolkit</h1>
        <p className="text-lg text-gray-400"> React with Tailwind CSS</p>
      </header>

      <main className="w-full max-w-3xl space-y-8">
        <section className="bg-gray-800 p-8 rounded-lg shadow-lg">
          {isAuthenticated ? (
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-teal-300 mb-4 capitalize">
                Hello, {user.username}
              </h2>
              <button
                onClick={handleLogout}
                className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="text-center">
              <input
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="px-4 py-3 border border-gray-700 rounded-lg mb-4 w-full bg-gray-900 text-gray-200 focus:ring-2 focus:ring-teal-400"
                placeholder="Enter username"
              />
              <button
                onClick={handleLogin}
                className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-300 transform hover:scale-105"
              >
                Login
              </button>
            </div>
          )}
        </section>

        <section className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-teal-300 mb-4">Count: {count}</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => dispatch(increment())}
              className="px-5 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 transform hover:scale-105"
            >
              Increment
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className="px-5 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
            >
              Decrement
            </button>
            <button
              onClick={() => dispatch(incrementByAmount(5))}
              className="px-5 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
            >
              Increment by 5
            </button>
            <button
              onClick={() => dispatch(decrementByAmount(5))}
              className="px-5 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-105"
            >
              Decrement by 5
            </button>
          </div>
        </section>

        <section className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-teal-300 mb-4">Using useState: {state}</h2>
          <input
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="px-4 py-3 border border-gray-700 rounded-lg w-full bg-gray-900 text-gray-200 focus:ring-2 focus:ring-teal-400"
            placeholder="Type something"
          />
        </section>

        <section className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-teal-300 mb-4">Using Redux Toolkit: {inputvalue}</h2>
          <input
            value={inputvalue}
            onChange={(e) => dispatch(onChanageInput(e.target.value))}
            className="px-4 py-3 border border-gray-700 rounded-lg w-full bg-gray-900 text-gray-200 focus:ring-2 focus:ring-teal-400"
            placeholder="Type something"
          />
        </section>
      </main>
    </div>
  );
}
