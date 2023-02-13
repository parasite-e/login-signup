import React, { useState } from "react";

const Checkbox = () => {
  let [checked, setChecked] = useState(true);
  return (
    <div class="mt-6">
      <label class="relative flex items-start mt-2">
        <div class="flex items-center h-5">
          <input
            onClick={(e) => {
              // console.log(e.target.value);
              if (!e.target.checked) {
                setChecked(false);
              } else {
                setChecked(true);
              }
            }}
            type="checkbox"
            class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer"
          />
        </div>{" "}
        <div class="ml-2 text-sm leading-5">
          <span class="font-medium text-gray-700">
            Eu li e aceito os{" "}
            <a
              href="https://kiwify.com.br/termos-de-uso"
              target="_blank"
              class="underline"
              rel="noreferrer"
            >
              {" "}
              termos de uso
            </a>
            ,{" "}
            <a
              href="https://kiwify.com.br/licenca-de-uso-software"
              target="_blank"
              class="underline"
              rel="noreferrer"
            >
              {" "}
              termos de licença de uso de software
            </a>
            ,{" "}
            <a
              href="https://kiwify.com.br/politica-de-conteudo"
              target="_blank"
              class="underline"
              rel="noreferrer"
            >
              {" "}
              política de conteúdo
            </a>{" "}
            da Kiwify{" "}
          </span>{" "}
          {!checked && (
            <div class="text-red-500 border-b-0">
              (Esse campo é obrigatório)
            </div>
          )}
        </div>
      </label>
    </div>
  );
};

export default Checkbox;
