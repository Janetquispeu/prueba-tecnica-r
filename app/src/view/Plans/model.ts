export interface User {
  name: string;
  lastName: string;
  birthDay: string;
}

export interface UserResponse {
  data: User;
  loading: boolean;
  fetch: boolean;
}

export interface Plan {
  name: string;
  price: number;
  age: number;
  description: string[];
}

export interface PlanResponse {
  data: Plan[];
  loading: boolean;
  fetch: boolean;
}

