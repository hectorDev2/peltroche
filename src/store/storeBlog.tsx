import { create } from "zustand";
import { formatFakeBlog } from ".";
export interface BlogsStore {
  blogs: any[];
  getBlogById: (id: string) => any;
}

export const useStoreBlog = create<BlogsStore>((set, get) => ({
  blogs: formatFakeBlog,
  getBlogById: (slug: string) => {
    const { blogs } = get();
    return blogs.find((blog) => blog.slug === slug);
  },
}));
