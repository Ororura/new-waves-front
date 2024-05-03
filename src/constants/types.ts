import { Dispatch, ReactNode, SetStateAction } from "react";
import { useHistory } from "react-router-dom";

interface Props {
  children: ReactNode;
}

interface IValues {
  user: IParseUser;
  setUser: Dispatch<SetStateAction<IParseUser>>;
  getUser: () => Promise<void>;
  login: Login;
}

interface IUser {
  type: string;
  value: string;
  key: string;
}

interface IParseUser {
  name: string;
  password: string;
  email: string;
}

type IHistory = ReturnType<typeof useHistory>;

type Login = (login: string, password: string) => Promise<void>;

export type { Props, IValues, IUser, IParseUser, Login, IHistory };
