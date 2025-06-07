import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  username: yup.string().required("Jina linahitajika"),
  email: yup.string().email("Email si sahihi").required("Email inahitajika"),
  password: yup.string().min(6, "Password fupi mno").required("Password inahitajika"),
});

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://YOUR_BACKEND_URL/api/auth/register", data);
      toast.success("Akaunti imefungwa!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Kosa kwenye usajili.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 400, margin: "auto" }}>
      <input placeholder="Username" {...register("username")} />
      <p style={{ color: 'red' }}>{errors.username?.message}</p>

      <input placeholder="Email" {...register("email")} />
      <p style={{ color: 'red' }}>{errors.email?.message}</p>

      <input type="password" placeholder="Password" {...register("password")} />
      <p style={{ color: 'red' }}>{errors.password?.message}</p>

      <button type="submit">Jiunge</button>
    </form>
  );
}
