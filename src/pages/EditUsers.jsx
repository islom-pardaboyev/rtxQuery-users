import { DoubleLeftOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAddUserMutation, useUpdateUserMutation } from "../store/usersApi";
import axios from "axios";

function EditUsers() {
  const { id } = useParams();
  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    if (id) {
      axios(`http://localhost:3000/users/${id}`).then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setCountry(res.data.country);
        setImg(res.data.img);
      });
    }
  }, [id]);

  function handleFormSubmit(e) {
    e.preventDefault();
    const data = { name, email, country, img };

    if (!id) {
      addUser(data);
    } else {
      updateUser({ id, ...data });
    }

    navigate("/");
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImg(URL.createObjectURL(file));
    }
  }

  return (
    <section className="px-5 py-10">
      <Button
        onClick={() => navigate("/")}
        className="!bg-primary hover:!bg-primary-5 cursor-pointer duration-300"
        type="primary"
        size="large"
      >
        <DoubleLeftOutlined />
      </Button>
      <form onSubmit={handleFormSubmit} className="mt-4 flex flex-col gap-4">
        <Input
          onChange={(e) => setName(e.target.value)}
          required
          value={name}
          placeholder="User Name"
          name="name"
          size="large"
        />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          required
          value={email}
          placeholder="User Email"
          name="email"
          size="large"
          type="email"
        />
        <Input
          onChange={(e) => setCountry(e.target.value)}
          required
          value={country}
          placeholder="User Country"
          name="country"
          size="large"
        />
        <label htmlFor="img" className="">
          <Input
            onChange={handleImageChange}
            id="img"
            type="file"
            hidden
          />
          <p className="border-[1.5px] cursor-pointer hover:bg-primary hover:text-white hover:border-transparent duration-300 rounded-md w-fit px-4 py-1">
            Click For Upload
          </p>
        </label>
        <div className="flex gap-3">
          <h1 className="font-bold text-2xl">Preview:</h1>
          {img ? (
            <img src={img} width={350} height={350} alt="User preview" />
          ) : (
            <p className="italic mt-2">Not selected...</p>
          )}
        </div>
        <Button
          htmlType="submit"
          className="!bg-primary w-fit mt-5"
          size="large"
          type="primary"
        >
          {id ? "Update User" : "Add User"}
        </Button>
      </form>
    </section>
  );
}

export default EditUsers; b