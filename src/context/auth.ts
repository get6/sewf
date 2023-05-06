import { createContext } from "react";
import { AuthContextType } from "../@types/auth";

let AuthContext = createContext<AuthContextType>(null!);

export default AuthContext;
