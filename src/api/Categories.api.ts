"use server";
export async function getAllCategories() {
  try {
    const response = await (
      await fetch("https://ecommerce.routemisr.com/api/v1/categories")
    ).json();
    // console.log("all categories response ", response.data);
    return response.data;
  } catch (error) {
    // console.log("all categories error", error);
  }
}

// export async function getSpecificCategory(categoryID: string) {
//   try {
//     const response = await (
//       await fetch(
//         `https://ecommerce.routemisr.com/api/v1/categories/${categoryID}`
//       )
//     ).json();
//     // console.log("all categories response ", response.data);
//     return response.data;
//   } catch (error) {
//     // console.log("all categories error", error);
//   }
// }
