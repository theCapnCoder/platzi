import { faker } from "@faker-js/faker";
import { CreateProduct } from "../store/newProducts/actionCreators/createProduct";

export const generateRandomInitialValues = (): CreateProduct => {
  return {
    title: faker.commerce.productName(),
    price: Number(faker.commerce.price()),
    description: faker.lorem.paragraph(),
    categoryId: faker.number.int({ min: 1, max: 3 }),
    images: faker.image.url(),
  };
};