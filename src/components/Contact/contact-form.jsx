import React from "react";
import { Form, FormButton, FormName, InputEmail } from "./styles";

export const FormOfContact = () => {
  return (
    <Form action="">
      <FormName>
        <label htmlFor="">
          {" "}
          <input type="text" placeholder="Nombre..." />{" "}
        </label>
        <div>
          <label htmlFor="">
            {" "}
            <input type="text" placeholder="Apellido..." />{" "}
          </label>
        </div>
      </FormName>

      <InputEmail>
        <label htmlFor="">
          <input type="email" placeholder="Email..." />{" "}
        </label>
      </InputEmail>
      <div>
        <label htmlFor=""></label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Tu asunto"
        ></textarea>
      </div>
      <FormButton>Enviar Mensaje</FormButton>
    </Form>
  );
};
