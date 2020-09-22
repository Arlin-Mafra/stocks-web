import { ValidationError } from "yup";

interface Erros {
  [key: string]: string;
}

export default function getValidationErros(error: ValidationError): Erros {
  const validationError: Erros = {};

  error.inner.forEach((erro) => {
    validationError[erro.path] = erro.message;
  });

  return validationError;
}
