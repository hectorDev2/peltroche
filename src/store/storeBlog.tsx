import { create } from "zustand";
import { formatFakeBlog } from ".";
export interface BlogsStore {
  blogs: any[];
  getBlogById: (id: string) => any;
  getCategories: () => string[];
  filter: (filter: string) => any[];
}

export const useStoreBlog = create<BlogsStore>((set, get) => ({
  blogs: formatFakeBlog,
  getBlogById: (slug: string) => {
    const { blogs } = get();
    return blogs.find((blog) => blog.slug === slug);
  },
  filter: (filter: string) => {
    const { blogs } = get();
    return blogs.filter((blog) => blog.category === filter);
  },
  getCategories: () => {
    const { blogs } = get();
    return blogs.map((blog) => blog.category);
  },
}));
