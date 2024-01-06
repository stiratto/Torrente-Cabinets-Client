import Field from "@/components/FieldInput";
import { ToastAction } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
// @ts-ignore
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { Check } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
    confirm_password: "",
  });
  const { toast } = useToast();

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const schemaRegister = yup.object().shape({
    name: yup.string().required("This field is required"),
    password: yup.string().matches(passwordRegex, "Password is not valid"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "It should be the same as the password"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    resolver: yupResolver(schemaRegister),
    criteriaMode: "all",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    await fetch("https://jesus-torrente-cab-server.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => {
      if (response.status === 200) {
        toast({
          variant: "default",
          title: "Your account has been created! You now can login",
          action: (
            <ToastAction altText="Goto schedule to undo">
              <Link to={"/torrentekcb/login"}>Goto login</Link>
            </ToastAction>
          ),
        });
        setUser({
          name: "",
          password: "",
          confirm_password: "",
        });
      } else {
        toast({
          variant: "destructive",
          title: "An account with that name already exists! try using another",
          action: (
            <ToastAction altText="Goto schedule to undo">Try again</ToastAction>
          ),
        });
      }
    });
  };

  return (
    <article className="h-screen flex justify-center w-full items-center flex-col px-8">
      <section className="shadow-lg p-8 rounded-lg w-full max-w-lg">
        <h1 className="mb-8 text-4xl">Register</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <Toaster />
          <Field
            type="text"
            placeholder="Name"
            name="name"
            register={register}
            value={user.name}
            onChange={handleChange}
            className="p-3 rounded-lg border focus:border-red-500"
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }: any) => (
              <p className="text-red-500 text-start text-sm">{message}</p>
            )}
          />
          <Field
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            register={register}
            onChange={handleChange}
            className="p-3 rounded-lg  border focus:border-red-500"
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }: any) => (
              <p className="text-red-500 text-start text-sm">{message}</p>
            )}
          />
          <Field
            type="password"
            placeholder="Confirm Password"
            name="confirm_password"
            value={user.confirm_password}
            register={register}
            onChange={handleChange}
            className="p-3  rounded-lg border focus:border-red-500"
          />
          <ErrorMessage
            errors={errors}
            name="confirm_password"
            render={({ message }: any) => (
              <p className="text-red-500 text-start text-sm">{message}</p>
            )}
          />
          <button
            type="submit"
            className="bg-red-500 text-white uppercase p-3 rounded-lg font-medium hover:bg-red-900 duration-200"
          >
            Register
          </button>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full">
              <ul className="mt-2 border-x-2 border-b-2 pb-2 text-sm list-none list w-full p-4">
                <li className="flex items-center gap-2 ">
                  <Check size={20} /> Atleast 8 characters
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <Check size={20} />1 uppercase letter
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <Check size={20} /> 1 lowercase letter
                </li>
                <li className="flex items-center gap-2">
                  <Check size={20} /> 1 number
                </li>
              </ul>
            </div>
          </div>
          <p>
            Already have an account?{" "}
            <Link
              to={"/torrentekcb/login"}
              className="text-yellow-300 underline  underline-offset-2"
            >
              Login
            </Link>
          </p>
        </form>
      </section>
    </article>
  );
};

export default Register;
