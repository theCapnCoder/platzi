import { faker } from "@faker-js/faker";
import { CreateProduct } from "../store/newProducts/actionCreators/createProduct";

export const generateRandomInitialValues = (categoryIds: number[]): CreateProduct => {
  const getImage = () => faker.image.url()
  return {
    title: faker.commerce.productName(),
    price: Number(faker.commerce.price()),
    description: faker.lorem.paragraph(),
    categoryId: faker.helpers.arrayElement(categoryIds),
    images: [getImage(), getImage(), getImage()],
  };
};