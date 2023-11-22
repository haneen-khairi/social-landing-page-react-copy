import * as yup from "yup";

const IntrestSchema = yup
  .object()
  .shape({
    name: yup.string().required("هذا الحقل إجباري"),
    email: yup.string().required("هذا الحقل إجباري"),
    error: yup.string(),
  })
  .required();

export default IntrestSchema;
