import { Form, Formik } from "formik";
import style from "../style/form.module.scss";
import image from "../assets/images/image.webp";
import { InputAuth } from "../../Form";
import { validationSignup } from "../utils";
import { NavLink } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";

export const Signup = () => {

  const mutation = useAuth()

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values, {resetForm}) => {
        const { name, email, password } = values

        mutation.mutate({
          body: { name, email, password },
          url: 'auth/signup'
        })

        resetForm();

      }}
      validationSchema={validationSignup}
    >
      {(props) => (
        <div className={style.container}>
          <div className={style.container__panel}>
            <Form className={style.container__panel__form}>
              <h2>Registrarse</h2>
              <InputAuth
                placeholder="Nombre"
                name="name"
                type="text"
                required
              />
              <InputAuth
                placeholder="Email"
                name="email"
                type="email"
                required
              />
              <InputAuth
                placeholder="Contraseña"
                name="password"
                type="password"
                required
              />
              <InputAuth
                placeholder="Confirmar Contraseña"
                name="confirmPassword"
                type="password"
                required
              />
              <span>¿Ya tienes una cuenta? <NavLink to={"/signin"}>Inicia sesión.</NavLink></span>
              <button
              className={style.container__panel__form__button}
                type="submit"
                disabled={!props.values.name || Object.keys(props.errors).length > 0}
              >
                Registrarse
                <FaSignInAlt />
              </button>
            </Form>
          </div>
          <header
            className={style.container__header}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div>
              <h2>¡Regístrate Hoy y Vive una Experiencia Única!</h2>
              <p>
                Saborea nuestros platos más irresistibles. <br /> ¡No te lo
                pierdas!
              </p>
            </div>
          </header>
        </div>
      )}
    </Formik>
  );
};
