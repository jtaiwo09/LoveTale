import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginSchemaType } from "@/schema";
import PhoneInput from "./reuseables/PhoneInput";
import { Button } from "./ui/button";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa6";

interface IProps {
  open: boolean;
  onClose: () => void;
}

const Login = ({ open, onClose }: IProps) => {
  const methods = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phone: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (values: loginSchemaType) => {
    console.log(values);
  };
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[400px] mx-auto">
        <div className="max-w-[85%] mx-auto py-5">
          <div className="flex flex-col items-center w-fit text-center mx-auto mb-4">
            <Image src="/logo.png" alt="" width={70} height={70} />
            <h2 className="text-[26px] font-normal">Hello</h2>
            <h2 className="text-primary text-[26px] font-medium">LoveTale!</h2>
          </div>
          <div>
            <div className="mb-3 text-sm text-center">
              By tapping Log In or Continue, you are agree to our{" "}
              <Link href="#" className="text-primary underline font-medium">
                Terms
              </Link>
              . Learn how we process your data in our{" "}
              <Link href="#" className="text-primary underline font-medium">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-primary underline font-medium">
                Cookie Policy
              </Link>
            </div>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <PhoneInput className="mb-3" name="phone" />
                <Button className="rounded-md w-full">Login</Button>
                <div className="mt-2 flex justify-between items-center text-sm">
                  <Link href="/register" className="">
                    Register now
                  </Link>
                  <Link href="#" className="">
                    Forgot password
                  </Link>
                </div>
                <div className="my-4 relative flex items-center justify-center before:absolute before:content-[''] before:w-[40%] before:left-0 before:h-[1px] before:bg-black after:absolute after:content-[''] after:w-[40%] after:h-[1px] after:bg-black after:right-0">
                  or
                </div>
                <div className="flex flex-col gap-2">
                  <Button className="rounded-md w-full text-sm">
                    <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center mr-2">
                      <FaGoogle className="text-primary text-[22px]" />
                    </div>
                    Login with Google
                  </Button>
                  <Button
                    className="rounded-md w-full text-sm border-black"
                    variant="outline"
                  >
                    <FaFacebook className="text-[24px] mr-2" />
                    Login with Facebook
                  </Button>
                  <Button
                    className="rounded-md w-full text-sm border-black"
                    variant="outline"
                  >
                    <FaApple className="text-[26px] mr-2" />
                    Login with Apple Id
                  </Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
