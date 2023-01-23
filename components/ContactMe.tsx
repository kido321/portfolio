import React, { ReactElement } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
interface Props {}

interface Input {
  name: String;
  email: String;
  subject: String;
  message: String;
}

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = (formData) => {
    window.location.href = `mailto:kiduswork2@gmail.com?subject=${formData.subject}&body=hi, my name is${formData.name}. ${formData.message}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-[10%] uppercase tracking-[20px] text-gray-500 text-2xl">
        {" "}
        Contact
      </h3>
      <div className="flex flex-col space-y-10 absolute top-[20%] ">
        <h4 className="text-4xl font-semibold text-center ">
          {" "}
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">
            Lets Talk
          </span>{" "}
        </h4>
        <div>
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className=" text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+12407140435</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className=" text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">kiduswork2@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className=" text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">123 dev street</p>
          </div>
          <form
            className="flex flex-col space-y-2 w-fit mx-auto pt-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder="Name "
                className="contactInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email "
                className="contactInput"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <input
              {...register("message")}
              placeholder="Message"
              className="contactInput"
              type="text"
            />
            <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold taxt-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
