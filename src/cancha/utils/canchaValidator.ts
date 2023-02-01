import * as yup from 'yup';

export const canchaSchema = yup.object({
  body: yup.object({
    nombre: yup.string().required('El nombre de la cancha es obligatoria'),
    description: yup.string().required('La descripción es obligatoria'),
    ubicacion: yup.string().required('La ubicacion es obligatoria'),
    estado: yup
      .string()
      .required('El estado es obligatorio')
      .oneOf(['opened', 'closed'], 'Solo envíe "opened" ó "closed"'),
    cantAparcamiento: yup
      .number()
      .required('El número de aparcamientos es obligatorio'),
  }),
});
