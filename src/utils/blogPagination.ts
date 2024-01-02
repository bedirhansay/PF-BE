import { BlogDTO } from "../types";

export const BlogPagination = async ({
  allBlogs,
  page,
  itemsPerPage,
}: {
  allBlogs: any;
  page: number;
  itemsPerPage: number;
}) => {
  const reversedBlogs = allBlogs.slice().reverse();

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;

  const paginatedBlogs = reversedBlogs.slice(startIndex, endIndex);

  const paginObject = {
    totalPages: Math.ceil(allBlogs.length / 9),
    currentPage: page,
    blogs: paginatedBlogs,
  };

  console.log(paginObject);
  return paginObject;
};
