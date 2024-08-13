"use client";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from "@/api/api";

const AddProduct = () => {
  const route = useRouter();

  const [formData, setformData] = useState({
    image: null, // Use null instead of an empty string for the image
    name: "",
    description: "",
    price: 0,
    totalProductsInStock: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setformData({
        ...formData,
        image: file,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("image", formData.image);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", formData.price);
    formDataToSend.append(
      "totalProductsInStock",
      formData.totalProductsInStock
    );

    // Log each form data entry to ensure it's being added
    for (let pair of formDataToSend.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    try {
      const result = await axios.post(
        `${BASE_URL}product/add`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Product added successfully!");
      route.push("/");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add product!");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-auto px-3">
        <div>
          <form className="space-y-3">
            <input type="file" name="image" onChange={handleFileChange} />
            <TextField
              fullWidth
              required
              name="name"
              label="name"
              onChange={handleChange}
            />
            <TextField
              fullWidth
              required
              name="description"
              label="description"
              onChange={handleChange}
            />
            <TextField
              fullWidth
              required
              name="price"
              label="price"
              type="number"
              onChange={handleChange}
            />
            <TextField
              fullWidth
              required
              name="totalProductsInStock"
              label="Total products in stock"
              type="number"
              onChange={handleChange}
            />
            <div>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                onClick={handleSubmit}
              >
                ADD PRODUCT
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default AddProduct;
