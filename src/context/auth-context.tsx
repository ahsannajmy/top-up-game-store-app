"use client";
import { JWTPayload } from "@/interface/auth-interface";
import { createContext, useContext, ReactNode, useState } from "react";

interface AuthContextType {
  userPayload: JWTPayload | null;
  updatePayload: (payload: JWTPayload | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  userPayload: null,
  updatePayload: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userPayload, setUserPayload] = useState<JWTPayload | null>(null);

  const updatePayload = (newPayload: JWTPayload | null) => {
    setUserPayload(newPayload);
  };

  return (
    <AuthContext.Provider value={{ userPayload, updatePayload }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
