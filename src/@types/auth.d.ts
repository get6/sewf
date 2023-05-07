export type AuthContextType = {
  code: string;
  signin: (code: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
};
