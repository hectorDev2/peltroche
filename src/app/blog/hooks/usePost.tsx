"use client";
import { useStoreBlog } from "@/store/storeBlog";
import { useState, useEffect } from "react";

export const usePost = (slug: string) => {
  const [post, setPost] = useState<any>();
  const { getBlogBySlug } = useStoreBlog();

  useEffect(() => {
    getBlogBySlug(slug).then((res: any) => setPost(res[0]));
  }, [getBlogBySlug, slug]);
  return { post };
};
