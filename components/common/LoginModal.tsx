"use client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import FormikForm from "./Forms/FormikForm";
import * as Yup from "yup";
import FormInput from "./Forms/FormInput";
import FormSubmit from "./Forms/FormSubmit";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/services/LoginProcessServices";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { AxiosResponseHeaders } from "axios";
import useUserStore from "@/store/UserStore";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});

const LoginModal = ({ open, onOpenChange, openRegisterModal, closeLoginModal }: { open: boolean; onOpenChange: () => void; openRegisterModal: Function; closeLoginModal: Function }) => {
  const router = useRouter();

  const { setUser } = useUserStore();

  const loginUserMutation = useMutation({
    mutationFn: (payload: Object) => loginUser(payload),

    onSuccess: (response) => {
      console.log(response);
      setUser(response.data.data);
      toast.success("Successfully logged in!", { duration: 2000 });
      closeLoginModal();
      router.push("/");
    },

    onError: (error: AxiosResponseHeaders) => {
      toast.error(error.response.data.message, { duration: 2000 });
    },
  });

  const onSubmit = (values: Object) => {
    console.log("values = ", values);
    loginUserMutation.mutate(values);
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

            <FormSubmit isLoading={loginUserMutation?.isPending}>Login</FormSubmit>
          </div>
        </FormikForm>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
