import { BlogTypes } from "@/types";
import { create } from "zustand";
import { formatFakeBlog } from ".";
import { persist } from "zustand/middleware";

export interface BlogsStore {
  blogs: BlogTypes[];
  filteredBlogs: BlogTypes[];
  filterBlogs: any;
}

export const useStoreBlog = create<any>(
  persist(
    (set, get) => ({
      blogs: formatFakeBlog,
      filteredBlogs: [],
      getBlogById: (slug: string) => {
        const { blogs } = get();
        return blogs.find((blog: BlogTypes) => blog.slug === slug);
      },
      filterBlogs(category: string) {
        set((state: any) => {
          if (category) {
            console.log(category);

            return {
              filteredBlogs: state.blogs.filter(
                (blog: any) => blog.category === category
              ),
            };
          }

          return { filteredBlogs: state.blogs };
        });
      },
      getCategories: () => {
        const { blogs } = get();
        return [...new Set(blogs.map((blog: BlogTypes) => blog.category))];
      },
    }),
    {
      name: "blog-storage",
    }
  )
);
