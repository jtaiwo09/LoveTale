"use client";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { filterSchema } from "@/schema";
import TextInput from "../reuseables/TextInput";
import { Button } from "../ui/button";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

const Filter = () => {
  const methods = useForm({
    resolver: zodResolver(filterSchema),
  });
  const { control, handleSubmit } = methods;

  const onSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <div>
      <div className="flex items-center py-2.5 mb-4">
        <Link href="/match">
          <FaArrowLeftLong className="text-primary text-xl" />
        </Link>
        <div className="flex-1 text-center font-medium text-xl">Filter</div>
      </div>
      <FormProvider {...methods}>
        <form className="flex flex-col gap-7" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            name="viewStyle"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>View Style</FormLabel>
                <FormControl>
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-5"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="classic" id="classic" />
                      <Label htmlFor="classic">Classic</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="gallery" id="gallery" />
                      <Label htmlFor="gallery">Gallery</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <TextInput
            name="location"
            label="Location"
            className="border-[1.5px] border-black/20 rounded-2xl"
            icon={{ value: CiLocationOn }}
            placeholder="Current location (Sans Francisco)"
          />
          {/* <div className="w-full rounded-2xl">
            <Label>Distance</Label>
            <div></div>
          </div> */}
          <Button type="submit" className="">
            Filter
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Filter;
