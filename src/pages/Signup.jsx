import InputFields from "../components/InputFields";
import Checkbox from "../components/Checkbox";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            src="https://dashboard.kiwify.com.br/_nuxt/img/kiwify-green-logo.2af0e50.png"
            alt="Kiwify"
            className="mx-auto h-12 w-auto"
          />{" "}
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Criar nova conta
          </h2>{" "}
          <p className="mt-2 text-center text-base leading-5 text-gray-600">
            Ou{" "}
            <Link to="/login">
              <span className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                entrar na sua conta existente
              </span>
            </Link>
          </p>
        </div>{" "}
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {/* email */}
            <InputFields />
            {/* confirm email */}
            <div className="mt-6">
              <InputFields
                label="Repetir e-mail"
                type="email"
                errmsg="Os dois e-mails devem ser iguais. Esse campo é obrigatório"
              />
            </div>
            {/* password */}
            <div className="mt-6">
              <InputFields
                label="Senha"
                type="password"
                errmsg="Esse campo é obrigatório"
              />
            </div>
            {/* checkbox */}
            <Checkbox />
            {/* sign up btn */}
            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                  {" "}
                  Criar conta
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
