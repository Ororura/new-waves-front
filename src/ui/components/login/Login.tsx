import { FC, FormEvent, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { Context } from "../../../core/Context";

const Login: FC = () => {
  const { login } = useContext(Context);

  const handlerLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await login(formData.get("login") as string, formData.get("password") as string);
  };

  return (
    <div>
      <Form onSubmit={handlerLogin}>
        <Form.Control type="text" name="login" placeholder="Введите логин" />
        <Form.Control type="password" name="password" placeholder="Введите пароль" />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
