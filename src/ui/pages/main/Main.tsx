import { FC, useContext, useEffect } from "react";
import { Context } from "../../../core/Context";

const Main: FC = () => {
  const { getUser } = useContext(Context);

  useEffect(() => {
    (async () => {
      await getUser();
    })();
  }, []);

  return <div>Main page</div>;
};

export default Main;
