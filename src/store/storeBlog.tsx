import { create } from "zustand";
import { formatDataApi } from "@/utils/helpers";

export interface BlogsStore {
  blogs: BlogInterface[];
  filteredBlogs: BlogInterface[];
  filterBlogs: BlogInterface[];
  fetchPosts: () => void;
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

export const useStoreBlog = create<any>((set: any, get: any) => ({
  blogs: [],
  filteredBlogs: [],
  filterBlogs(category: string) {
    set((state: { blogs: BlogInterface[]; filteredBlogs: BlogInterface[] }) => {
      if (category) {
        return {
          filteredBlogs: state.blogs.filter(
            (blog: BlogInterface) => blog.category === category
          ),
        };
      }

      return { filteredBlogs: state.blogs };
    });
  },
  getCategories: () => {
    const { blogs } = get();
    return [...new Set(blogs.map((blog: BlogInterface) => blog.category))];
  },
  fetchPosts: async () => {
    const posts = await fetch(
      `${process.env.NEXT_LOCAL_API_URL}/posts?populate=*`,
      {
        cache: "no-cache",
      }
    );
    const postsJson = await posts.json();

    await set({ blogs: formatDataApi(postsJson.data) });
  },
  getBlogBySlug: async (slug: string) => {
    const post = await fetch(
      `${process.env.NEXT_LOCAL_API_URL}/posts?filters[slug][$eq]=${slug}&populate=*`,
      {
        cache: "no-cache",
      }
    );
    const postJson = await post.json();
    return formatDataApi(postJson.data);
  },
}));
