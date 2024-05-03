import React, { FC, createContext, useState } from "react";
import { IParseUser, IUser, IValues, Login, Props } from "../constants/types";
import Services from "../services/Services";

export const Context: React.Context<IValues> = createContext({} as IValues);

export const ContextWrapper: FC<Props> = ({ children }) => {
  const contractId: string = "DN4r9kFcXjtiyBY92egMG68gaV2qLd92w7m4H1mW1B3t";
  const url: string = `http://localhost:6862/contracts/${contractId}/`;
  const [user, setUser] = useState<IParseUser>({ email: "", name: "", password: "" });

  const getUser = async (): Promise<void> => {
    const data = await Services.get<IUser>(`${url}USER_MAPPING_Egor`);
    if (data) {
      setUser(JSON.parse(data.value) as IParseUser);
      console.log(user);
    }
  };

  const login: Login = async (login, password) => {
    const data = await Services.get<IUser>(`${url}/USER_MAPPING_${login}`);

    if (!data) {
      return;
    }
    const parseData: IParseUser = JSON.parse(data.value);

    if (parseData.name === login && parseData.password === password) {
      console.log(parseData);
    }
  };

  const values: IValues = { user, setUser, getUser, login };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
