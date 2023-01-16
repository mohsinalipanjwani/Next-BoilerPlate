import {
  useQuery,
  useMutation,
  UseQueryResult,
  useQueryClient,
  UseMutationResult,
} from "react-query";
import * as api from "./api";
import { Users } from "./types";

// const KEY = "Users";

// export function getKeyFromProps(
//   props: any,
//   type: "LISTING" | "DETAIL",
// ): string[] {
//   const key = [KEY, type];
//   key.push(props);
//   return key;
// }
// // Fetch
// export function useUsersListing(
//   props: Users.ListingProps = {},
// ): UseQueryResult<Users.ListingResponse> {
//   return useQuery(
//     getKeyFromProps(props, "LISTING"),
//     () => api.fetch(props),
//     {},
//   );
// }

// // Detail
// export function useUsersDetail(
//   props: Users.DetailProps,
// ): UseQueryResult<Users.DetailResponse> {
//   return useQuery(getKeyFromProps(props, "DETAIL"), () => api.detail(props));
// }

// // Create
// export function useUsersCreate(
//   props: Users.CreateProps = {},
// ): UseMutationResult<
//   Users.CreateResponse,
//   {
//     message?: string;
//   },
//   Users.CreateMutationPayload
// > {
//   const queryClient = useQueryClient();
//   return useMutation((payload) => api.create({ ...props, data: payload }), {
//     mutationKey: `${KEY}|Create`,
//     onSuccess: () => {
//       queryClient.invalidateQueries(getKeyFromProps(props, "LISTING"));
//       queryClient.invalidateQueries(
//         getStatsProviderKey({ contractorId: props.contractorId }, "DETAIL"),
//       );
//     },
//     retry: 0,
//   });
// }

// // Create Bulk
// export function useUsersCreateBulk(
//   props: Users.CreateBulkProps = {},
// ): UseMutationResult<
//   Users.CreateBulkResponse,
//   {
//     message?: string;
//   },
//   Users.CreateBulkMutationPayload
// > {
//   const queryClient = useQueryClient();
//   return useMutation((payload) => api.createBulk({ ...props, data: payload }), {
//     mutationKey: `${KEY}|CreateBulk`,
//     onSuccess: () => {
//       queryClient.invalidateQueries(getKeyFromProps(props, "LISTING"));
//       queryClient.invalidateQueries(
//         getStatsProviderKey({ contractorId: props.contractorId }, "DETAIL"),
//       );
//     },
//     retry: 0,
//   });
// }

// // Update
// export function useUsersUpdate(props: Users.UpdateProps): UseMutationResult<
//   Users.UpdateResponse,
//   {
//     message?: string;
//   },
//   Users.UpdateMutationPayload
// > {
//   const queryClient = useQueryClient();
//   return useMutation((payload) => api.update({ ...props, data: payload }), {
//     mutationKey: `${KEY}|Update`,
//     onSuccess: () => {
//       queryClient.invalidateQueries(getKeyFromProps(props, "LISTING"));
//       queryClient.invalidateQueries(getKeyFromProps(props, "DETAIL"));
//       queryClient.invalidateQueries(
//         getFormProviderKey({ id: props.userId }, "DETAIL"),
//       );
//     },
//     retry: 0,
//   });
// }

// // Remove
// export function useUsersRemove(props: Users.RemoveProps): UseMutationResult<
//   Users.RemoveResponse,
//   {
//     message?: string;
//   },
//   Users.RemoveMutationPayload
// > {
//   const queryClient = useQueryClient();
//   return useMutation((payload) => api.remove(payload), {
//     mutationKey: `${KEY}|Remove`,
//     onSuccess: (resp, payload) => {
//       queryClient.invalidateQueries(
//         getStatsProviderKey({ contractorId: props.contractorId }, "DETAIL"),
//       );
//       queryClient.invalidateQueries(getKeyFromProps(props, "LISTING"));
//       queryClient.invalidateQueries(getKeyFromProps(props, "DETAIL"));
//     },
//     retry: 0,
//   });
// }

// // Remove Bulk
// export function useUsersRemoveBulk(
//   props: Users.RemoveBulkProps,
// ): UseMutationResult<
//   Users.RemoveBulkResponse,
//   {
//     message?: string;
//   },
//   Users.RemoveBulkMutationPayload
// > {
//   const queryClient = useQueryClient();

//   return useMutation((payload) => api.removeBulk({ data: payload }), {
//     mutationKey: `${KEY}|RemoveBulk`,
//     onSuccess: (resp, payload) => {
//       queryClient.invalidateQueries(
//         getStatsProviderKey({ contractorId: props.contractorId }, "DETAIL"),
//       );
//       queryClient.invalidateQueries(getKeyFromProps(props, "LISTING"));
//       queryClient.invalidateQueries(getKeyFromProps(props, "DETAIL"));
//     },
//     retry: 0,
//   });
// }
