import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { login } from "../app/features/userSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const useLogin = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(null);

  const login = async (displayname, email, password) => {
    setIsPending(true);
    try {
      const req = await createUserWithEmailAndPassword(auth, email, password);
      const user = req.user;
      dispatch(login(user));
    } catch {
    } finally {
      setIsPending(false);
    }
  };

  return { data, isPending, login };
};
