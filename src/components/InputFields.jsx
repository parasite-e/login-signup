import React, { useState } from "react";

const InputFields = ({ label, type, errmsg }) => {
  let [valid, setValid] = useState(true);

  return (
    <div>
      <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
        {label || "E-mail"}
      </label>{" "}
      <div>
        <input
          onBlur={(e) => {
            if (!e.target.value) {
              setValid(false);
            } else {
              setValid(true);
            }
          }}
          type={type || "text"}
          autocomplete="off"
          name="null"
          className={` outline-none form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5  w-full ${
            !valid && "border-red-500"
          }`}
        />{" "}
        <div className="text-red-500 text-xs mt-1">
          <div></div>
        </div>
      </div>{" "}
      <div>
        {" "}
        {!valid && (
          <div id="errMsg" className="text-xs text-red-500">
            {errmsg || "Esse campo é obrigatório"}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputFields;
// on blur if there is no input show the id="errMsg" and if there is input then remove the id id="errMsg"
