"use client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import FormikForm from "./Forms/FormikForm";
import * as Yup from "yup";
import FormInput from "./Forms/FormInput";
import FormSubmit from "./Forms/FormSubmit";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});

const LoginModal = ({ open, onOpenChange, openRegisterModal }: { open: boolean; onOpenChange: () => void; openRegisterModal: Function }) => {
  const onSubmit = (values: Object) => {
    console.log("values = ", values);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login to your account</DialogTitle>
          <DialogDescription>
            If you don't have an account,{" "}
            <span onClick={() => openRegisterModal()} className="font-medium text-blue-400 cursor-pointer">
              sign up
            </span>
          </DialogDescription>
        </DialogHeader>

        <FormikForm initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <div className="flex flex-col items-center gap-4">
            <FormInput type="email" name="email" placeholder="Email" />
            <FormInput type="password" name="password" placeholder="Password" />

            <FormSubmit>Login</FormSubmit>
          </div>
        </FormikForm>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
