import { CategoryModel } from "./categories.model";
import { ICategory } from "./categories.types";

export const createCategory = async (data: Partial<ICategory>) => {
  return await CategoryModel.create(data);
};

export const getCategories = async (query: Partial<ICategory> = {}) => {
  return await CategoryModel.find(query);
};

export const getCategoryById = async (id: string) => {
  return await CategoryModel.findById(id);
};

export const updateCategory = async (id: string, data: Partial<ICategory>) => {
  return await CategoryModel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteCategory = async (id: string) => {
  return await CategoryModel.findByIdAndDelete(id);
};
