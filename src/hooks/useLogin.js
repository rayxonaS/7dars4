import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { login } from "../app/features/userSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

export const useLogin = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(null);

  const login = async (displayname, email, password) => {
    setIsPending(true);
    try {
      const req = await signInWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayname: displayname,
        photoURL: `https://api.dicebear.com/9.x/dylan/svg?seed=${req.user.uid}`,
      });
      const user = req.user;
      toast.success(`Welcome back, ${user.displayName}`);
      dispatch(login(user));
      setData(user);
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { data, isPending, login };
};
