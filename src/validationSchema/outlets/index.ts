import * as yup from 'yup';

export const outletValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().required(),
  contact_number: yup.string().required(),
  operating_hours: yup.string().required(),
  company_id: yup.string().nullable().required(),
});
