import axios from "@/utils/Http-Gateway";

export const getUsers = async () => {
    const res = await axios.doGet("/users");
    return res.data;
};

export const createUser = async (user) => {
    const res = await axios.doPost("/users", user);
    return res.data;
};

export const updateUser = async (id, user) => {
    const res = await axios.doPut(`/users/${id}`, user);
    return res.data;
};

export const deleteUser = async (id) => {
    const res = await axios.doDelete(`/users/${id}`);
    return res.data;
};
