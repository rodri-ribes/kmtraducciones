import { Form, Formik } from "formik";
import style from "../style/form.module.scss";
import image from "../assets/images/image.webp";
import { InputAuth } from "../../Form";
import { validationSignin } from "../utils";
import { NavLink } from "react-router-dom";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { FaGoogle, FaSignInAlt } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";

export const Signin = () => {
  const signinGoogle = () => {
    signInWithPopup(auth, provider).then((data) => console.log(data));
  };

  const mutation = useAuth();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values, {resetForm}) => {

        mutation.mutate({
          body: values,
          url: 'auth/signin'
        })

        resetForm();
      }}
      validationSchema={validationSignin}
    >
      {(props) => (
        <div className={style.container}>
          <div className={style.container__panel}>
            <Form className={style.container__panel__form}>
              <h2>Inciar Sesión</h2>
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
              <span>
                ¿Aun no tienes una cuenta?{" "}
                <NavLink to={"/signup"}>Crear Cuenta.</NavLink>
              </span>
              <button
              className={style.container__panel__form__button}
                type="submit"
                disabled={!props.values.email || Object.keys(props.errors).length > 0}
              >
                Iniciar Sesión
                <FaSignInAlt />
              </button>
            </Form>
            <span>Inicia Sesión con...</span>
            <div className={style.container__panel__social}>
              <button onClick={signinGoogle} title="Google">
                <FaGoogle/> 
              </button>
            </div>
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
