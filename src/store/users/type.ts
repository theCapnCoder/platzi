export type User = {
  id: number;
  name: string;
  role: string;
  email: string;
  password: string;
  avatar: string;
}

export type UsersState = {
  users: User[];
  selectedUser: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

