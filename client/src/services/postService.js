const baseUrl = "http://localhost:3030/jsonstore/posts";

export const getAll = async () => {
  const response = await fetch(baseUrl);
  const result = await response.json();

  const data = Object.values(result);

  return data;
};

// export const getOne = async (userId) => {
//   const response = await fetch(`${baseUrl}/${userId}`);
//   const result = await response.json();

//   return result;
// };

// export const remove = async (userId) => {
//   await fetch(`${baseUrl}/${userId}`, {
//     method: "DELETE",
//   });
// };

export const create = async (data) => {
  const body = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phoneNumber: data.phoneNumber,
    imageUrl: data.imageUrl,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    address: {
      country: data.country,
      city: data.city,
      street: data.street,
      streetNumber: data.streetNumber,
    },
  };
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const result = await response.json();
  return result;
};
