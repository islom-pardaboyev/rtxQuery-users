import React from "react";
import { useDeleteUserMutation, useGetAllUsersQuery } from "../store/usersApi";
import UsersTable from "../components/UsersTable";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function AllUsers() {
  const { data = [] } = useGetAllUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  const navigate = useNavigate();
  const newData = data.map((item, index) => ({
    ...item,
    action: (
      <div className="space-x-3">
        <Button onClick={() => deleteUser(item.id)}
          className="!bg-rose-500 text-white hover:!border-transparent hover:!text-white"
          size="large"
        >
          Delete
        </Button>
        <Button onClick={() => navigate(`/update/${item.id}`)}
          className="!bg-green-500 text-white hover:!border-transparent hover:!text-white"
          size="large"
        >
          Update
        </Button>
      </div>
    ),
    img: <img src={item.img} className="w-16 h-16 object-cover rounded-full" />,
    key: index
  }));

  console.log(newData);

  return (
    <section className="px-5 py-10 h-screen overflow-y-auto">
      <div className="flex items-center mb-4 justify-between">
        <h1 className="font-bold text-2xl text-primary">
          All Users ({newData.length})
        </h1>
        <Button onClick={() => navigate('/add')}
          className="!bg-primary hover:!bg-primary-5 cursor-pointer duration-300"
          type="primary"
          size="large"
        >
          Add User
        </Button>
      </div>
      <UsersTable data={newData} />
    </section>
  );
}

export default AllUsers;
