import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { login } from "../app/features/userSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

export const useRegister = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(null);

  const register = async (displayname, email, password) => {
    setIsPending(true);
    try {
      const req = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayname: displayname,
        photoURL: `https://api.dicebear.com/9.x/dylan/svg?seed=${req.user.uid}`,
      });
      const user = req.user;
      toast.success(`Welcome, ${user.displayName}`);
      dispatch(login(user));
      setData(user);
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { data, isPending, register };
};
