import React from "react";
import { Input } from "../ui/input";
import FormError from "./FormError";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { cn } from "@/lib/utils";

interface IProps {
  label: string;
  name: string;
  type?: string;
  className?: string;
  icon?: any;
  placeholder?: string;
}
const TextInput = ({
  label,
  name,
  type = "text",
  className,
  icon,
  placeholder,
}: IProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className="flex flex-col w-full">
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <FormControl>
            <div className="relative">
              {icon && (
                <icon.value className="text-2xl absolute left-3 top-1/2 translate-y-[-50%]" />
              )}
              <Input
                {...field}
                id={name}
                type={type}
                placeholder={placeholder}
                className={cn(`w-full ${icon && "pl-10"}`, className)}
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextInput;
