import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/users";

export const useUsers = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    staleTime: 1000 * 60 * 60,
  });

  return { data };
};
