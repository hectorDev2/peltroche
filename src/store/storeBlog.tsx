import { create } from "zustand";
import { formatFakeBlog } from ".";
import { persist } from "zustand/middleware";

export interface BlogsStore {
  blogs: BlogInterface[];
  filteredBlogs: BlogInterface[];
  filterBlogs: BlogInterface[];
}

export interface BlogInterface {
  image: Image;
  id: number;
  title: string;
  date: string;
  content: string;
  description: string;
  category: string;
  slug: string;
}

export interface Image {
  src: string;
  height: number;
  width: number;
  blurDataURL: string;
  blurWidth: number;
  blurHeight: number;
}

export const useStoreBlog = create<any>(
  persist(
    (set, get) => ({
      blogs: formatFakeBlog,
      filteredBlogs: [],
      getBlogById: (slug: string) => {
        const { blogs } = get();
        return blogs.find((blog: BlogInterface) => blog.slug === slug);
      },
      filterBlogs(category: string) {
        set(
          (state: {
            blogs: BlogInterface[];
            filteredBlogs: BlogInterface[];
          }) => {
            console.log(state);

            if (category) {
              console.log(category);

              return {
                filteredBlogs: state.blogs.filter(
                  (blog: BlogInterface) => blog.category === category
                ),
              };
            }

            return { filteredBlogs: state.blogs };
          }
        );
      },
      getCategories: () => {
        const { blogs } = get();
        return [...new Set(blogs.map((blog: BlogInterface) => blog.category))];
      },
    }),
    {
      name: "blog-storage",
    }
  )
);
