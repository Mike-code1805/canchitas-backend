import * as yup from 'yup';

export const signUpCancheroSchema = yup.object({
  body: yup.object({
    dni: yup.number().required('El dni es obligatorio'),
    nombres: yup.string().required('Los nombres son obligatorios'),
    apellidos: yup.string().required('Los apellidos son obligatorios'),
    correo: yup
      .string()
      .email('El correo debe ser uno válido')
      .required('El correo es obligatorio'),
    nacimiento: yup.string(),
    sexo: yup
      .string()
      .oneOf(['f', 'm', 'F', 'M'], 'Solo se acepta "F" ó "M"')
      .required('El sexo es obligatorio'),
    telefono: yup.number().required('El teléfono es obligatorio'),
    avatar: yup.string(),
    password: yup
      .string()
      .min(5, 'La contraseña debe tener al menos 5 caracteres')
      .required('La contraseña es obligatoria'),
    passwordConfirmation: yup
      .string()
      .required('La confirmación de contraseña es obligatoria')
      .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir'),
  }),
});

export const signUpUserSchema = yup.object({
  body: yup.object({
    nombres: yup.string().required('El nombre son obligatorio'),
    sexo: yup
      .string()
      .oneOf(['f', 'm', 'F', 'M'], 'Solo se acepta "F" ó "M"')
      .required('El sexo es obligatorio'),
    correo: yup
      .string()
      .email('El correo debe ser uno válido')
      .required('El correo es obligatorio'),
    avatar: yup.string(),
    password: yup
      .string()
      .min(5, 'La contraseña debe tener al menos 5 caracteres')
      .required('La contraseña es obligatoria'),
    passwordConfirmation: yup
      .string()
      .required('La confirmación de contraseña es obligatoria')
      .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir'),
  }),
});

export const signinSchema = yup.object({
  body: yup.object({
    correo: yup
      .string()
      .email('El correo debe ser uno válido')
      .required('El correo es obligatorio'),
    password: yup
      .string()
      .min(5, 'La contraseña debe tener al menos 5 caracteres')
      .required('La contraseña es obligatoria'),
  }),
});
