import { faker } from "@faker-js/faker";
import { CreateProductFormValues } from "../components/Products/ProductForms/CreateProductForm";

// export const generateRandomInitialValues: CreateProductFormValues = () => {
//   return {
//     title: faker.commerce.productName(),
//     price: faker.commerce.price(),
//     description: faker.lorem.paragraph(),
//     categoryId: faker.number.int({ max: 3 }),
//     images: [faker.image.url()],
//   };
// };

export const generateRandomInitialValues = (): CreateProductFormValues => {
  return {
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.lorem.paragraph(),
    categoryId: faker.number.int({ min: 1, max: 3 }).toString(),
    images: faker.image.url(),
  };
};