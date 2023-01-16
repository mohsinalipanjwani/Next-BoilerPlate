// import { operations } from "../providerTypes";

// export namespace Users {
//   // Create Bulk
//   export type CreateBulkProps = {
//     contractorId?: number;
//   };
//   export type CreateBulkResponse =
//     operations["UsersController_createBulk"]["responses"][201]["content"]["application/json"];
//   export type CreateBulkMutationPayload =
//     operations["UsersController_createBulk"]["requestBody"]["content"]["application/json"];
//   export interface CreateBulkAPIPayload extends CreateBulkProps {
//     data: CreateBulkMutationPayload;
//   }

//   // Create
//   export type CreateProps = {
//     contractorId?: number;
//   };
//   export type CreateResponse =
//     operations["UsersController_create"]["responses"][201]["content"]["application/json"];
//   export type CreateMutationPayload =
//     operations["UsersController_create"]["requestBody"]["content"]["application/json"];
//   export interface CreateAPIPayload extends CreateProps {
//     data: CreateMutationPayload;
//   }

//   // Fetch
//   export type ListingProps =
//     operations["UsersController_findAll"]["parameters"]["query"];
//   export type ListingResponse =
//     operations["UsersController_findAll"]["responses"][200]["content"]["application/json"];
//   export interface ListingAPIPayload extends ListingProps {}

//   // Detail
//   export type DetailProps =
//     operations["UsersController_findOne"]["parameters"]["path"];
//   export type DetailResponse =
//     operations["UsersController_findOne"]["responses"][200]["content"]["application/json"];
//   export interface DetailAPIPayload extends DetailProps {}

//   // Update
//   export type UpdateProps = {
//     id: string;
//     userId?: string;
//   };
//   export type UpdateResponse =
//     operations["UsersController_update"]["responses"][200]["content"]["application/json"];
//   export type UpdateMutationPayload =
//     operations["UsersController_update"]["requestBody"]["content"]["application/json"];
//   export interface UpdateAPIPayload extends UpdateProps {
//     data: UpdateMutationPayload;
//   }

//   // Remove
//   export type RemoveProps = {
//     contractorId?: number;
//     limit?: number;
//     offset?: number;
//     sortType?: string;
//     sortOrder?: string;
//     isActive?: boolean;
//     roleSlug?: string;
//   };
//   export type RemoveResponse =
//     operations["UsersController_remove"]["responses"][200]["content"]["application/json"];
//   export type RemoveMutationPayload =
//     operations["UsersController_remove"]["parameters"]["path"];
//   export interface RemoveAPIPayload
//     extends RemoveProps,
//       RemoveMutationPayload {}

//   // Remove Bulk
//   export type RemoveBulkProps = {
//     contractorId?: number;
//     limit?: number;
//     offset?: number;
//     sortType?: string;
//     sortOrder?: string;
//     isActive?: boolean;
//     roleSlug?: string;
//   };
//   export type RemoveBulkResponse =
//     operations["UsersController_removeBulk"]["responses"][200]["content"]["application/json"];
//   export type RemoveBulkMutationPayload =
//     operations["UsersController_removeBulk"]["requestBody"]["content"]["application/json"];
//   export interface RemoveBulkAPIPayload extends RemoveBulkProps {
//     data: RemoveBulkMutationPayload;
//   }
// }

export namespace Users{}