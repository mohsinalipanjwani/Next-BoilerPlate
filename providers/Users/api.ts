import service from "services";
import { Users } from "./types";

// // Create Bulk
// export async function createBulk(
//   props: Users.CreateBulkAPIPayload,
// ): Promise<Users.CreateBulkResponse> {
//   return service({
//     method: "POST",
//     url: `/users/create/bulk`,
//     body: props.data,
//   });
// }

// // Create
// export async function create(
//   props: Users.CreateAPIPayload,
// ): Promise<Users.CreateResponse> {
//   return service({
//     method: "POST",
//     url: `/users`,
//     body: props.data,
//   });
// }

// // Fetch
// export async function fetch(
//   props: Users.ListingAPIPayload,
// ): Promise<Users.ListingResponse> {
//   return service({
//     method: "GET",
//     url: `/users`,
//     queryParams: props,
//   });
// }

// // Detail
// export async function detail(
//   props: Users.DetailAPIPayload,
// ): Promise<Users.DetailResponse> {
//   return service({
//     method: "GET",
//     url: `/users/${props.id}`,
//   });
// }

// // Update
// export async function update(
//   props: Users.UpdateAPIPayload,
// ): Promise<Users.UpdateResponse> {
//   return service({
//     method: "PATCH",
//     url: `/users/${props.id}`,
//     body: props.data,
//   });
// }

// // Remove
// export async function remove(
//   props: Users.RemoveAPIPayload,
// ): Promise<Users.RemoveResponse> {
//   return service({
//     method: "DELETE",
//     url: `/users/${props.id}`,
//   });
// }

// // Remove Bulk
// export async function removeBulk(
//   props: Users.RemoveBulkAPIPayload,
// ): Promise<Users.RemoveBulkResponse> {
//   return service({
//     method: "POST",
//     url: `/users/delete/bulk`,
//     body: props.data,
//   });
// }
