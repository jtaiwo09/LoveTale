import React from "react";
import { Button } from "../ui/button";
import { useFormContext } from "react-hook-form";

interface IProps {
  label: string;
  value: string;
  name: string;
}
const SelectButton = ({ label, value, name }: IProps) => {
  const { register, setValue, watch } = useFormContext();
  return (
    <Button
      variant="outline"
      className={`rounded-full w-full hover:text-inherit hover:bg-transparent border min-h-[45px] ${
        watch(name) === value ? "!bg-primary border-primary !text-white" : ""
      }`}
      type="button"
      onClick={() => setValue(name, value)}
    >
      {label}
    </Button>
  );
};

export default SelectButton;
