"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  Card,
  Button,
  Skeleton,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Image } from "@nextui-org/react";

// The main functional component for displaying products.
export default function Products() {
  // State variable for storing product data.
  const [products, setProducts] = useState([]);
  // State variable for the cart items.
  const [cartItems, setCartItems] = useState([]);
  // useDisclosure hook for managing the modal state.
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // State variable for the selected product to show in the modal.
  const [selectedProduct, setSelectedProduct] = useState(null);

  // useEffect to run client-side logic for fetching products data.
  useEffect(() => {
    // Try to get the 'products' data from localStorage.
    const initialProducts = localStorage.getItem("products");
    // If found, update the 'products' state with the data from localStorage.
    if (initialProducts) {
      setProducts(JSON.parse(initialProducts));
    } else {
      // If not found, initialize with placeholders.
      const placeholders = Array.from({ length: 24 }, (_, index) => ({
        id: index,
        name: `Product ${index + 1}`,
        description: "This is a placeholder description for the product.",
        price: "$100",
        details: "Some details",
        imageUrl: "https://via.placeholder.com/400",
      }));
      setProducts(placeholders);
      // Save the placeholders to localStorage.
      localStorage.setItem("products", JSON.stringify(placeholders));
    }
  }, []);

  // Function to handle the purchase of a product.
  const handleBuy = (product) => {
    // Check if the product is already in the cart.
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      // If it is, update the quantity of the existing product in the cart.
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If not, add the product to the cart.
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
    // Set the selected product and open the modal.
    setSelectedProduct(product);
    onOpen();
  };

  // Function to handle quantity change of a product in the cart.
  const handleQuantityChange = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Function to handle removal of a product from the cart.
  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <div
      className="responsive-grid grid grid-cols-4 gap-8 mt-8 mb-8 rounded-lg shadow-lg"
      style={{ maxWidth: "1700px", padding: "20px" }}
    >
      {/* Display products */}
      {products.slice(0, 24).map((product) => (
        <Card
          key={product.id}
          className="space-y-5 p-4 relative flex flex-col"
          radius="lg"
          color="#f3f4f6"
        >
          <div className="mb-auto">
            <Image
              isBlurred
              src={product.imageUrl}
              alt={product.name}
              classNames="m-5"
              style={{ width: "400px", height: "300px", objectFit: "cover" }}
            />
          </div>
          <div className="space-y-3 text-center">
            <div className="text-xl font-semibold">{product.name}</div>
            <div className="text-sm text-gray-600">{product.description}</div>
            <div className="text-lg text-gray-800">{product.price}</div>
          </div>
          <Button
            auto
            size="tiny"
            className=" w-full"
            color="primary"
            onClick={() => handleBuy(product)}
          >
            Buy
          </Button>
        </Card>
      ))}
      {/* Display skeleton loaders if products length is less than 24 */}
      {Array.from({ length: 24 - products.length }, (_, index) => (
        <Card
          key={index + products.length}
          className="space-y-5 p-4 relative flex flex-col"
          radius="lg"
          color="#F3F4F6"
        >
          <Skeleton className="mb-auto h-[300px] w-[300px] rounded-lg"></Skeleton>
          <Skeleton className="w-3/5 rounded-lg h-3"></Skeleton>
          <Skeleton className="w-4/5 rounded-lg h-3"></Skeleton>
          <Skeleton className="w-2/5 rounded-lg h-3"></Skeleton>
        </Card>
      ))}

      {/* Modal for displaying the cart */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Cart</ModalHeader>
              <ModalBody>
                {/* Display items in the cart */}
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center mb-4"
                  >
                    <div>
                      <p>
                        <strong>Name:</strong> {item.name}
                      </p>
                      <p>
                        <strong>Price:</strong> {item.price}
                      </p>
                      <p>
                        <strong>Details:</strong> {item.details}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Select
                        placeholder="Qty"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            item.id,
                            parseInt(e.target.value)
                          )
                        }
                      >
                        {/* Select options for quantity */}
                        {[...Array(10).keys()].map((i) => (
                          <SelectItem key={i + 1} value={i + 1}>
                            {i + 1}
                          </SelectItem>
                        ))}
                      </Select>
                      <Button
                        color="danger"
                        auto
                        size="mini"
                        className="ml-2"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Checkout
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
