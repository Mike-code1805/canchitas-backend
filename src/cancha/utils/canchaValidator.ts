import * as yup from 'yup';

export const canchaSchema = yup.object({
  body: yup.object({
    image: yup.string(),
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
    precioHora: yup
      .number()
      .required('El precio por hora de la cancha es obligatoria'),
  }),
});
