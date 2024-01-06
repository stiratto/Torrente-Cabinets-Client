import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Field from "../components/FieldInput";
import ReCAPTCHA from "react-google-recaptcha";
import { schemaYup } from "../components/Schema";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";
import { ErrorMessage } from "@hookform/error-message";
import { ToastAction } from "@/components/ui/toast";
import { useEffect, useState } from "react";
import { Loader2Icon } from "lucide-react";
import { Link } from "react-router-dom";

const BCA = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    resolver: yupResolver(schemaYup),
    criteriaMode: "all",
  });

  const [userInfo, setUserInfo] = useState({
    name: "",
    role: "",
    id: "",
  });

  const token = localStorage.getItem("token");

  const parseJwt = (token: string) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };

  useEffect(() => {
    if (token) {
      const user = parseJwt(token);
      setUserInfo(user);
    }
  }, [token]);

  const [isLoading, setIsLoading] = useState(false);

  const [capVal, setCapVal] = useState(null);
  const { toast } = useToast();
  const [dealer, setDealer] = useState({
    name: "",
    company_email: "",
    companyvendor_name: "",
    ein: "",
    company_address: "",
    phone_number: "",
    personal_email: "",
    company_description: "",
  });

  const onSubmit = async () => {
    // If token is true (user is logged in) let the user send a dealer request
    if (token) {
      setIsLoading(true);
      await fetch("https://jesus-torrente-cab-server.onrender.com/dealerForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...dealer,
          userId: userInfo.id,
        }),
      }).then((response) => {
        if (response.ok) {
          setIsLoading(false);
          toast({
            variant: "default",
            title:
              "Your application has been sent, we'll review it and answer at your personal email address, redirecting... ",
            description: format(new Date(), "'Submitted at:' MMMM, EEEE, yyyy"),
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          });
        } else {
          setIsLoading(false);
          toast({
            variant: "destructive",
            title: "Company email already exists, try another one",
          });
        }
      });
    } else {
      // If the user is not logged in, remove the loading icon and display a error toast
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong",
        description: "You need to log in before sending a dealer request!",
        action: (
          <ToastAction altText="Go to login">
            <Link to={"/torrentekcb/login"}>Go to login</Link>
          </ToastAction>
        ),
      });
    }
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setDealer({
      ...dealer,
      [name]: value,
    });
  };

  return (
    <article className="">
      <section className="relative pb-80 pt-40  px-3 h-screen flex flex-col text-center justify-center lg:flex-col lg:mx-auto">
        <div className="absolute inset-0  bg-[url('https://images.unsplash.com/photo-1631048500395-64cf901e9e10?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-cover bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white max-w-2xl mx-auto flex flex-col gap-4">
          <h1 className="text-8xl font-serif leading-tight tracking-[-2px]">
            Become a dealer
          </h1>
          <p className="bg-black bg-opacity-50 p-3 text-start md:text-center rounded-xl ">
            If you're looking to become a dealer, kindly complete the form
            provided below, and one of our dedicated customer service
            representatives will get in touch with you without delay.
          </p>
        </div>
      </section>

      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="flex flex-col max-w-xl lg:max-w-7xl mx-auto gap-2 my-8 px-5 text-start"
      >
        <Separator className="mb-5" />
        <Toaster />
        <div className=" gap-5 flex flex-col items-center md:flex-row ">
          <div className="w-full">
            <Field
              type="text"
              value={dealer.name}
              placeholder="Name"
              name="name"
              register={register}
              className={
                errors.name
                  ? "border-b-2 w-full p-2 border-red-500 focus:border-yellow-500 "
                  : "border-b-2 p-2 w-full focus:border-yellow-500 "
              }
              onChange={handleChange}
            />

            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => (
                <p className="errormessage ">{message}</p>
              )}
            />
          </div>

          <div className="w-full">
            <Field
              type="email"
              placeholder="Company Email"
              name="company_email"
              value={dealer.company_email}
              register={register}
              className={
                errors.company_email
                  ? "border-b-2 w-full p-2 border-red-500 focus:border-yellow-500"
                  : "border-b-2 p-2 w-full focus:border-yellow-500"
              }
              onChange={handleChange}
            />
            <ErrorMessage
              errors={errors}
              name="company_email"
              render={({ message }) => (
                <p className="errormessage">{message}</p>
              )}
            />
          </div>
        </div>

        <Field
          type="text"
          placeholder="Company/Vendor Name"
          name="companyvendor_name"
          register={register}
          onChange={handleChange}
          value={dealer.companyvendor_name}
          className={
            errors.companyvendor_name
              ? "border-b-2 p-2 w-full focus:border-yellow-500 border-red-500"
              : "border-b-2 p-2 w-full focus:border-yellow-500"
          }
        />
        <ErrorMessage
          errors={errors}
          name="companyvendor_name"
          render={({ message }) => <p className="errormessage">{message}</p>}
        />

        <Field
          type="number"
          placeholder="EIN"
          name="ein"
          register={register}
          onChange={handleChange}
          value={dealer.ein}
          className={
            errors.ein
              ? "border-b-2 p-2 w-full focus:border-yellow-500 border-red-500"
              : "border-b-2 p-2 w-full focus:border-yellow-500"
          }
        />
        <ErrorMessage
          errors={errors}
          name="ein"
          render={({ message }) => <p className="errormessage">{message}</p>}
        />

        <Field
          type="text"
          placeholder="Company Address"
          name="company_address"
          register={register}
          onChange={handleChange}
          value={dealer.company_address}
          className={
            errors.company_address
              ? "border-b-2 p-2 w-full focus:border-yellow-500 border-red-500"
              : "border-b-2 p-2 w-full focus:border-yellow-500"
          }
        />
        <ErrorMessage
          errors={errors}
          name="company_address"
          render={({ message }) => <p className="errormessage">{message}</p>}
        />

        <Field
          type="number"
          placeholder="Phone Number"
          name="phone_number"
          register={register}
          onChange={handleChange}
          value={dealer.phone_number}
          className={
            errors.phone_number
              ? "border-b-2 p-2 w-full focus:border-yellow-500 border-red-500"
              : "border-b-2 p-2 w-full focus:border-yellow-500"
          }
        />
        <ErrorMessage
          errors={errors}
          name="phone_number"
          render={({ message }) => <p className="errormessage">{message}</p>}
        />

        <Field
          type="email"
          name="personal_email"
          placeholder="Personal Email"
          onChange={handleChange}
          value={dealer.personal_email}
          register={register}
          className={
            errors.personal_email
              ? "border-b-2 p-2 w-full focus:border-yellow-500 border-red-500"
              : "border-b-2 p-2 w-full focus:border-yellow-500"
          }
        />
        <ErrorMessage
          errors={errors}
          name="personal_email"
          render={({ message }) => <p className="errormessage">{message}</p>}
        />

        <Field
          type="textarea"
          placeholder="Company Description"
          name="company_description"
          onChange={handleChange}
          value={dealer.company_description}
          register={register}
          rows={6}
          className={
            errors.company_description
              ? "border-b-2 p-2 border-r-2 focus:border-yellow-500  border-l-2 w-full  border-red-500"
              : "border-b-2 p-2 w-full focus:border-yellow-500 "
          }
        ></Field>
        <ErrorMessage
          errors={errors}
          name="company_description"
          render={({ message }) => <p className="errormessage">{message}</p>}
        />

        <div className="flex flex-col justify-start gap-5  md:flex-row items-center">
          <div className="flex md:flex-row">
            <input type="checkbox" {...register("trueInfo")} />
          </div>
          <label className="after:content-['*'] after:text-red-500">
            I confirm that all this information is true
          </label>
          <ErrorMessage
            errors={errors}
            name="trueInfo"
            render={({ message }) => <p className="errormessage">{message}</p>}
          />
        </div>

        {/* TODO:  Change the domain when changing to production mode (localhost and 127.0.0.1 shouldn't be a domain) */}

        <div className="mx-auto mt-8">
          <ReCAPTCHA
            sitekey="6LfvROooAAAAAPopBVNSFecOqIltMST6Z0Z8rVr5"
            onChange={(val: any) => setCapVal(val)}
          />
        </div>

        <Separator />
        <Button
          type="submit"
          className=" p-2 rounded-lg border uppercase bg-red-500 "
          disabled={!capVal}
          data-hs-overlay="#hs-toggle-between-modals-first-modal"
          onClick={
            errors.name ||
            errors.company_address ||
            errors.company_description ||
            errors.company_email ||
            errors.companyvendor_name ||
            errors.ein ||
            errors.personal_email ||
            errors.phone_number ||
            errors.trueInfo
              ? () => {
                  toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong",
                    description: "Fix the errors before submitting the form",
                    action: (
                      <ToastAction altText="Try again">Try again</ToastAction>
                    ),
                  });
                }
              : () => {
                  ("");
                }
          }
        >
          {isLoading ? (
            <p className="flex items-center gap-3 duration-300">
              Submitting <Loader2Icon className="animate-spin" />
            </p>
          ) : (
            "submit"
          )}
        </Button>
      </form>

      {/* Google maps embed */}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.1078132283105!2d-80.37127172158893!3d25.888346615458214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bca187e25685%3A0x24121482471fc30e!2sTorrente%20Kitchen%20and%20Bath%20%E2%80%94%20Miami!5e0!3m2!1sen!2sco!4v1698866201491!5m2!1sen!2sco"
        width="600"
        height="450"
        className="border  w-full"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </article>
  );
};

export default BCA;
