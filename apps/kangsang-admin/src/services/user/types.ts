export interface UserItem {
  userId: string;
  email: boolean;
  displayName: string;
  displayImage: string;
}

export interface ListUsersResponse {
  data: UserItem[];
}
