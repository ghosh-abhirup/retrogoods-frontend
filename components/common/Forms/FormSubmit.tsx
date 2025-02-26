import { useFormikContext } from "formik";
import Button from "../Button";
import { ReactNode } from "react";

const FormSubmit = ({ children }: { children: ReactNode }) => {
  const { handleSubmit } = useFormikContext<any>();

  return (
    <Button type="button" click={handleSubmit}>
      {children}
    </Button>
  );
};

export default FormSubmit;
