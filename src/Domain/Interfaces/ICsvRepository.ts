import { UserActivityData } from "../Entities/UserActivityData";

export interface ICsvRepository<T> {
  findAll(): Promise<T[]>;
  create(userActivityData: UserActivityData): Promise<void>;
}
