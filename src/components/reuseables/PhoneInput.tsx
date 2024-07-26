import { cn } from "@/lib/utils";
import React from "react";
import { useFormContext } from "react-hook-form";
import { FaPhone } from "react-icons/fa6";
import FormError from "./FormError";
// import { FormField, FormItem } from "../ui/form";

interface IProps {
  placeholder?: string;
  className?: string;
  name: string;
}

const PhoneInput = ({ placeholder, className, name, ...rest }: IProps) => {
  const { register, control } = useFormContext();
  return (
    <>
      <div className={cn(className)}>
        <div className="border border-black rounded-md w-full flex items-stretch min-h-[45px] overflow-hidden">
          <div className="min-w-[40px] border-r border-black flex-shrink-0 flex justify-center items-center min-h-full">
            <FaPhone />
          </div>
          <input
            className="flex-1 min-h-full border-none focus:outline-none px-2"
            placeholder={placeholder}
            {...register(name)}
          />
        </div>
        <FormError name={name} />
      </div>

      {/* <FormField name={name} control={control} render={({field})=> <FormItem></FormItem>} /> */}
    </>
  );
};

export default PhoneInput;
