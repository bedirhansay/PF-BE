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
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;

  const paginatedBlogs = allBlogs.slice(startIndex, endIndex);

  const paginObject = {
    totalPages: Math.ceil(allBlogs.length / 9),
    currentPage: page,
    blogs: paginatedBlogs,
  };

  console.log(paginObject);
  return paginObject;
};
