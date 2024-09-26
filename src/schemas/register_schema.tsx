import * as yup from "yup";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const RegisterSchema = yup.object().shape({
  name: yup.string().required("This field is required"),
  password: yup.string().matches(passwordRegex, "Password is not valid"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "It should be the same as the password"),
});