"use client";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddProduct = () => {
  const route = useRouter();

  const [formData, setformData] = useState({
    image: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signup(formData);
    if (result) console.log(result);
    toast.success("Registered successfully!!");
    setTimeout(() => {
      route.push("/");
    }, 1000);
  };

  return (
    <>
      <div className="flex items-center justify-center h-auto px-3">
        <div>
          <form className="space-y-3">
            <input type="file" />
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
