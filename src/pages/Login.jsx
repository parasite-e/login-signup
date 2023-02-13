import InputFields from "../components/InputFields";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div>
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            src="https://dashboard.kiwify.com.br/_nuxt/img/kiwify-green-logo.2af0e50.png"
            alt="Kiwify"
            class="mx-auto h-12 w-auto"
          />{" "}
          <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Entrar na sua conta
          </h2>{" "}
          <p class="mt-2 text-center text-base leading-5 text-gray-600">
            Ou{" "}
            <Link to="/signup">
              <span class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                fazer cadastro
              </span>
            </Link>
          </p>
        </div>{" "}
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {/* email */}
            <InputFields />
            {/* password */}
            <div class="mt-6">
              <InputFields
                label="Senha"
                type="password"
                errmsg="Esse campo é obrigatório"
              />
            </div>
            <div class="mt-2 flex items-center justify-end">
              <div class="text-sm leading-5">
                <a
                  href="/ResetPassword"
                  class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Esqueceu a senha?
                </a>
              </div>
            </div>
            {/* sign up btn */}
            <div class="mt-6">
              <span class="block w-full rounded-md shadow-sm">
                <button class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                  {" "}
                  Entrar
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
