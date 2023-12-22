import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxios";
import useDataContext from "./useDataContext";

const useTask = () => {
  const axiosSecure = useAxiosPublic();
  const { user } = useDataContext();

  const {
    data: allTaskData = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["all-task", user && user?.email],
    queryFn: () =>
      axiosSecure.get(`/all-task/${user && user?.email}`).then(res => {
        return res.data;
      }),
    staleTime: 1000 * 10,
  });
  return { allTaskData, isLoading, isError, refetch };
};

export default useTask;
