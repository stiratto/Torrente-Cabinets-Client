import * as yup from "yup";

export const LoginSchema = yup.object().shape({
    name: yup.string().required("This field is required"),
    password: yup.string().required("This field is required"),
});