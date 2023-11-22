import RequestVolunteer from "../entities/Core/RequestVolunteer";
import Statistics from "../entities/Core/Statistics";
import WorkField from "../entities/Core/WorkField";
import APIClient from "../services/api-client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const apiClient = new APIClient<WorkField>("/work-fields/");
const apiStatisitcs = new APIClient<Statistics>("/statistics/");
const apiRequsetVolunteer = new APIClient<RequestVolunteer>(`/volunteer/`);

const useGetWorkFields = () => {
  return useQuery<WorkField[]>({
    queryKey: ["WorkFields"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

const useGetStatistics = () => {
  return useQuery<Statistics>({
    queryKey: ["Statistics"],
    queryFn: apiStatisitcs.get,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

const useRequestVolunteer = () => {
  const clientquery = useQueryClient();

  return useMutation<RequestVolunteer, Error, RequestVolunteer>({
    mutationFn: apiRequsetVolunteer.post,
    onSuccess: () => {
      clientquery.refetchQueries({ queryKey: ["Statistics"], type: "active" });
      return "Added";
    },
    onError: (error) => {
      if (error) return error;
    },
  });
};

export { useGetWorkFields, useGetStatistics, useRequestVolunteer };
