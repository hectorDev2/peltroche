const toSlug = (title: string) => {
  const slug = title
    ?.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

  return slug;
};

export { toSlug };
