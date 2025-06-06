import Field from "@/components/FieldInput";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { LoginSchema } from "@/schemas/login_schema";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastAction } from "@radix-ui/react-toast";
import { EyeIcon, EyeOffIcon, Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "@/api";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    resolver: yupResolver(LoginSchema),
    criteriaMode: "all",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    setValue(name, value);
  };

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const token = await authApi.login(user);
      localStorage.setItem("token", token);
      navigate("/");
      location.reload();
    } catch (error) {
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong",
        description: "We didn't found a valid user with those credentials :(",
      });
    }
  };

  return (
    <article className="h-screen flex justify-center w-full items-center flex-col px-8">
      <section className="shadow-lg p-8 rounded-lg w-full max-w-lg">
        <h1 className="mb-8 text-4xl font-semibold">Login</h1>

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
              <p className="text-red-500 text-sm text-start">{message}</p>
            )}
          />

          <div className="flex">
            <Field
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={user.password}
              register={register}
              onChange={handleChange}
              className="p-3 rounded-lg  border focus:border-red-500 w-full"
            />
            <button
              id="check"
              onClick={() => setShowPassword(!showPassword)}
              className="relative -left-8 w-0"
              type="button"
              value={user.password}
            >
              {showPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </div>
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }: any) => (
              <p className="text-red-500 text-sm text-start">{message}</p>
            )}
          />

          <button
            type="submit"
            className="bg-red-500 text-white uppercase p-3 rounded-lg"
          >
            {isLoading ? (
              <p className="flex items-center gap-2 justify-center">
                Login <Loader2Icon className="animate-spin " />
              </p>
            ) : (
              <p>Login</p>
            )}
          </button>

          <p>
            Don't have an account?{" "}
            <Link
              reloadDocument
              to="/torrentekcb/register"
              className="text-yellow-500 underline  underline-offset-2"
            >
              Create one
            </Link>
          </p>
        </form>
      </section>
    </article>
  );
};

export default Login;
