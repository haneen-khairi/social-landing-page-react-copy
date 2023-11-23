import * as yup from "yup";

const VolunteerSchema = yup
  .object()
  .shape({
    name: yup.string().required("هذا الحقل إجباري"),
    country: yup.number().required("هذا الحقل إجباري"),
    email: yup.string().required("هذا الحقل إجباري"),
    field_of_work: yup.array().required("هذا الحقل إجباري"),
    error: yup.string(),
  })
  .required();

export default VolunteerSchema;
