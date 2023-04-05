import { createContext } from "react";

import { useLocalStorage } from "../hooks/localStorage";

const UserContext = createContext({
  user: null,
  setUser: () => {},
  isLoggedIn: false,
  handleLogIn: () => {},
  handleLogOut: () => {},
});


const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);

  const isLoggedIn = !!user;

  const handleLogIn = (user) => {
    setUser(user);
  };

  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ user, isLoggedIn, setUser, handleLogIn, handleLogOut }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };