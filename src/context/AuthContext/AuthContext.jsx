import { createContext, useContext, useState, useEffect  } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    async function checkUser() {
      if (localStorage.getItem("login")) {
        setToken(true);
      } else {
        setToken(false);
      }
    }
    checkUser();
  });

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
