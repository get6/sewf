export type AuthContextType = {
  code: string | null;
  signin: (code: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
};
