const baseUrl = "http://localhost:3030/data/posts";

// export const firstCommit = async (body) => {
//   const token = sessionStorage.getItem("token");
//   const response = await fetch(baseUrl, {
//     headers: {
//       "Content-Type": "application/json",
//       "X-Authorization": token,
//     },
//     method: "POST",
//     body: JSON.stringify(body),
//   });
//   const result = await response.json();

//   return result;
// };

export const getAll = async () => {
  const response = await fetch(baseUrl);
  const result = await response.json();

  return result;
};

export const getOne = async (postId) => {
  const response = await fetch(`${baseUrl}/${postId}`);
  const result = await response.json();

  return result;
};

// export const remove = async (userId) => {
//   await fetch(`${baseUrl}/${userId}`, {
//     method: "DELETE",
//   });
// };

export const create = async (data) => {
  const body = {
    title: data.title,
    author: data.author,
    imageUrl: data.imageUrl,
    createdAt: data.createdAt,
    description: data.description,
  };
  const token = sessionStorage.getItem("token");
  const response = await fetch(
    "http://localhost:3030/jsonstore/collection/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": token,
      },
      body: JSON.stringify(body),
    }
  );
  const result = await response.json();
  return result;
};
