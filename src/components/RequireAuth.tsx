import { redirect } from "react-router";
import useAuth from "../hooks/use-auth";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let auth = useAuth();

  if (!auth?.code) redirect("/");

  return children;
};

export default RequireAuth;
