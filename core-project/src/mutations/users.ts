import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { UserProps } from "../interface/users";
import { deleteUser, editUser, postUser } from "../api/users";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUsers } from "../queries/useUsers";

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newUser: UserProps) => postUser(newUser),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
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

export const useDeleteUser = () => {
  const { refetch } = useUsers();
  return useMutation({
    mutationFn: (userId: number) => deleteUser(userId),
    onSuccess: () => {
      toast.success("Usuário deletado com sucesso!", {
        position: "bottom-left",
      });
      refetch();
    },
    onError: () => {
      toast.error("Tivemos problemas ao deletar o usuário :(", {
        position: "bottom-left",
      });
    },
  });
};

export const useEditUser = () => {
  const { refetch } = useUsers();
  return useMutation({
    mutationFn: ({
      userId,
      updatedUser,
    }: {
      userId: number;
      updatedUser: UserProps;
    }) => editUser(userId, updatedUser),
    onSuccess: () => {
      toast.success("Usuário editado com sucesso!", {
        position: "bottom-left",
      });
      refetch();
    },
    onError: () => {
      toast.error("Erro ao editar o usuário!", {
        position: "bottom-left",
      });
    },
  });
};
