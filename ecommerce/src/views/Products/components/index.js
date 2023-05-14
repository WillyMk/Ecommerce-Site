import Products from "./Products";
import ProductsForm from "./ProductsForm";

export const productRoute = [
    {
      key: "/products",
      exact: true,
      element: <Products />,
      name: "Department",
    },
    {
      key: "/products/add",
      exact: true,
      element: <ProductsForm />,
      name: "Department",
    },
  ];
  