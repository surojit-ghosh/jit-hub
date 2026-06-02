export interface ICategory {
  name: string;
  type: "income" | "expense";
  icon?: string;
  color?: string;
  userId?: string;
}
