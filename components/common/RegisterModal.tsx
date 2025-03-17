"use client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import FormikForm from "./Forms/FormikForm";
import * as Yup from "yup";
import FormInput from "./Forms/FormInput";
import FormSubmit from "./Forms/FormSubmit";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/services/LoginProcessServices";
import { ToastContainer, toast } from "react-toastify";
import { ToastEffects } from "@/utility/utility";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required().label("Firstname"),
  lastname: Yup.string().required().label("Lastname"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});

const LoginModal = ({ open, onOpenChange, openSignInModal }: { open: boolean; onOpenChange: () => void; openSignInModal: Function }) => {
  const registerUserMutation = useMutation({
    mutationFn: (payload: Object) => registerUser(payload),
    onSuccess: (data) => {
      console.log("data = ", data);
      // toast.success("Successfully registered");
      openSignInModal();
    },
    onError(error) {
      // toast.error(error?.message);
    },
  });

  const onSubmit = (values: Object) => {
    registerUserMutation.mutate(values);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign in to your account</DialogTitle>
          <DialogDescription>
            Already have an account,{" "}
            <span onClick={() => openSignInModal()} className="font-medium cursor-pointer text-blue-400">
              login
            </span>
          </DialogDescription>
        </DialogHeader>

        <FormikForm initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <div className="flex flex-col items-center gap-4">
            <FormInput type="text" name="firstname" placeholder="First Name" />
            <FormInput type="text" name="lastname" placeholder="Last Name" />
            <FormInput type="email" name="email" placeholder="Email" />
            <FormInput type="password" name="password" placeholder="Password" />

            <FormSubmit isLoading={registerUserMutation.isPending}>Sign in</FormSubmit>
          </div>
        </FormikForm>
      </DialogContent>
      <ToastContainer />
    </Dialog>
  );
};

export default LoginModal;
