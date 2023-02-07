import * as yup from 'yup';

export const reservationSchema = yup.object({
  body: yup.object({
    state: yup.string().required('El estado de la reservación es obligatoria'),
    start: yup.date().required('La fecha de inicio es obligatoria'),
    end: yup.date().required('La fecha de finalización es obligatoria'),
    toName: yup
      .string()
      .required('Debes incluir a nombre de quien está la canchita'),
  }),
});
