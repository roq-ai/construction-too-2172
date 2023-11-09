import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  tool_id: yup.string().nullable().required(),
  outlet_id: yup.string().nullable().required(),
});
