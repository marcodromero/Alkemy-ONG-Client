import React, { createContext, useCallback, useEffect, useState } from "react";
import httpService from "../services/httpService";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await httpService.get("/auth/me");
      if (data.user.roleId === 1) {
        setIsAdmin(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UserContext.Provider
      value={{
        isAdmin,
        setIsAdmin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
