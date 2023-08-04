import { create } from "zustand";
import axios from "axios";
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
    });
  },
  getCategories: () => {
    const { blogs } = get();
    return [...new Set(blogs.map((blog: BlogInterface) => blog.category))];
  },
  fetchPosts: async () => {
    const posts: any = await axios.get(
      `${process.env.NEXT_LOCAL_API_URL}/posts?populate=*`
    );
    console.log(posts);

    await set({ blogs: formatDataApi(posts.data.data) });
  },
  getBlogBySlug: async (slug: string) => {
    console.log(slug);
    const post: any = await axios.get(
      `${process.env.NEXT_LOCAL_API_URL}/posts?filters[slug][$eq]=${slug}&populate=*`
    );

    return formatDataApi(post.data.data);
  },
}));
