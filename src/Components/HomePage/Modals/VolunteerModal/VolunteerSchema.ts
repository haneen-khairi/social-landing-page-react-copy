import * as yup from "yup";

const VolunteerSchema = yup
  .object()
  .shape({
    name: yup.string().required("هذا الحقل إجباري"),
    country: yup.number().required("هذا الحقل إجباري"),
    email: yup.string().required("هذا الحقل إجباري"),
    phone_number: yup.string().required("هذا الحقل إجباري"),
    field_of_work: yup.array().required("هذا الحقل إجباري"),
    volunteer_hours: yup.string().required("هذا الحقل إجباري"),
    years_of_experience: yup.string().required("هذا الحقل إجباري"),
    error: yup.string(),
  })
  .required();

export default VolunteerSchema;
