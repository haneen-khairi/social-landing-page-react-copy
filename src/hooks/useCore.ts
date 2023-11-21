import Statistics from "../entities/Core/Statistics";
import WorkField from "../entities/Core/WorkField";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<WorkField>("/work-fields/");
const apiStatisitcs = new APIClient<Statistics>("/statistics/");

const useGetWorkFields = () => {
  return useQuery<WorkField[]>({
    queryKey: ["WorkFields"],
    queryFn: apiClient.getData,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

const useGetStatistics = () => {
  return useQuery<Statistics>({
    queryKey: ["Statistics"],
    queryFn: apiStatisitcs.getDetails,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export { useGetWorkFields, useGetStatistics };
