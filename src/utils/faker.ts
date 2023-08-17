import { faker } from "@faker-js/faker";
import { CreateProduct } from "../store/newProducts/actionCreators/createProduct";

export const generateRandomInitialValues = (maxCategoryId: number): CreateProduct => {
  const getImage = () => faker.image.url()
  return {
    title: faker.commerce.productName(),
    price: Number(faker.commerce.price()),
    description: faker.lorem.paragraph(),
    categoryId: faker.number.int({ min: 1, max: maxCategoryId - 1 }),
    images: [getImage(), getImage(), getImage()],
  };
};