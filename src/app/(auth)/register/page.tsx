"use client";
import CountrySelector from "@/components/reuseables/CountrySelector";
import Date from "@/components/reuseables/Date";
import SelectButton from "@/components/reuseables/SelectButton";
import TextInput from "@/components/reuseables/TextInput";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { registerSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa6";
import { rules } from "../../../../data";
import { useRouter } from "next/navigation";

interface IProps {
  open: boolean;
  toggleModal: () => void;
  handleSubmit: any;
}

const RulesAndRegulations = ({ open, toggleModal, handleSubmit }: IProps) => {
  return (
    <Dialog open={open} onOpenChange={toggleModal}>
      <DialogContent className="max-w-[340px] mx-auto">
        <div>
          <div className=" w-fit mx-auto text-center flex items-center flex-col gap-1 mb-3">
            <Image src="/logo.png" alt="" width={50} height={50} />
            <h2 className="text-[22px] font-medium tracking-wide">
              Welcome to LoveTale
            </h2>
            <p className="text-sm text-[#222]">
              Please follow these house rules
            </p>
          </div>
          <div className="mb-6">
            {rules.map((el, i) => (
              <div key={i} className="flex gap-3 mb-4 last:mb-0">
                <FaCheck className="text-primary" />
                <div>
                  <p className="text-sm font-medium">{el.title}</p>
                  <div
                    dangerouslySetInnerHTML={{ __html: el.desc }}
                    className="text-xs"
                  />
                </div>
              </div>
            ))}
          </div>
          <Button
            type="button"
            className="rounded-full w-[90%] mx-auto block"
            onClick={handleSubmit}
          >
            I agree
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Register = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const methods = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      interestedIn: "",
      email: "",
      phone: "",
      gender: "",
      dob: null,
      country: "NG",
    },
  });

  const { handleSubmit, control, getValues } = methods;

  const toggleModal = () => {
    setOpen((prev) => !prev);
  };

  const submitForm = () => {
    console.log(getValues());
    setOpen(false);
    router.push("/match");
  };

  return (
    <>
      <div className="min-h-[calc(100dvh-80px)] flex justify-center items-center">
        <div className="h-fit w-full">
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(toggleModal)}
              className="max-w-[900px] w-[90%] mx-auto mt-10"
            >
              <div className="flex gap-5 mb-5 w-full">
                <div className="w-[60%]">
                  <div className="flex gap-5 mb-10">
                    <TextInput label="First Name" name="firstName" />
                    <TextInput label="Last Name" name="lastName" />
                  </div>
                  <div className="flex gap-5 mb-10">
                    <TextInput label="Email" name="email" />
                    <TextInput label="Mobile No." name="phone" />
                  </div>
                  <div className="flex gap-5 mb-10">
                    <Date name="dob" label="Date Of Birth" />
                    <CountrySelector name="country" label="Country" />
                  </div>
                </div>
                <div className="w-[40%]">
                  <FormField
                    name="interestedIn"
                    control={control}
                    render={({ field }) => (
                      <FormItem className="flex flex-col mb-10">
                        <FormLabel> Interested In</FormLabel>
                        <FormControl>
                          <div className="flex gap-2">
                            <SelectButton
                              label="Woman"
                              value="woman"
                              name="interestedIn"
                            />
                            <SelectButton
                              label="Man"
                              value="man"
                              name="interestedIn"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <FormItem className="flex flex-col mb-10">
                        <FormLabel> Gender</FormLabel>
                        <FormControl>
                          <div className="flex gap-2">
                            <SelectButton
                              label="Female"
                              value="female"
                              name="gender"
                            />
                            <SelectButton
                              label="Male"
                              value="male"
                              name="gender"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="relative flex items-center justify-center before:absolute before:content-[''] before:w-[42%] before:left-0 before:h-[1px] before:bg-black/20 after:absolute after:content-[''] after:w-[42%] after:h-[1px] after:bg-black/20 after:right-0">
                <Button type="submit" className="rounded-full min-w-[100px]">
                  Submit
                </Button>
              </div>
              <RulesAndRegulations
                open={open}
                toggleModal={toggleModal}
                handleSubmit={submitForm}
              />
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
};

export default Register;
