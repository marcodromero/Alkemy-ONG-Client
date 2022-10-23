import React, { createContext, useCallback, useEffect, useState } from "react";
import httpService from "../services/httpService";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  const logout = () => {
    sessionStorage.clear();
    setIsAdmin(false);
    setUser(null);
  };
  const register = async (values, actions) => {
    try {
      const req = await httpService.post("/auth/register", {
        firstName: values.name,
        lastName: values.lastname,
        email: values.email,
        password: values.password,
      });
      setUser(req.data.user);
      if (req.data.user.roleId === 1) {
        setIsAdmin(true);
      }
    } catch (e) {
      if (e.response.data === "User already exist") {
        actions.setErrors({ email: "This email is already registered" });
      }
      console.error(e.response.data, "error");
    }
  };
  const login = async (values, actions) => {
    try {
      const req = await httpService.post("/auth/login", values);
      sessionStorage.setItem("token", req.data.Authorization);
      if (req.data.user.roleId === 1) {
        setIsAdmin(true);
      }
      setUser(req.data.user);
    } catch (e) {
      console.log(e.response.data);
      if (e.response.data === "Email not found") {
        actions.setErrors({ email: "Email not found" });
      } else {
        actions.setErrors({ password: "Password is incorrect" });
      }
    }
  };
  const getData = async () => {
    try {
      const { data } = await httpService.get("/auth/me");
      if (data.user.roleId === 1) {
        setIsAdmin(true);
      }
      setUser(data.user);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UserContext.Provider
      value={{
        isAdmin,
        setIsAdmin,
        user,
        setUser,
        logout,
        login,
        register,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
