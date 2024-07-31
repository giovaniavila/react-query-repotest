import { useMutation } from "@tanstack/react-query";
import { UserProps } from "../interface/users";
import { postUser } from "../api/users";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const useCreateUser = () => {
  return useMutation({
    mutationFn: (newUser: UserProps) => postUser(newUser),
    onSuccess: () => {
      toast.success("Usuário criado !", {
        position: "bottom-left",
      });
    },
    onError: () => {
      toast.error("Error Notification !", {
        position: "bottom-left",
      });
    },
  });
};
