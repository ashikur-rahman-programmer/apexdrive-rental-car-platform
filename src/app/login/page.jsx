"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Button,
} from "@heroui/react";

import { FaGoogle } from "react-icons/fa";
import { FiLock, FiMail } from "react-icons/fi";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const { email, password } = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callBackURL: "/",
    });

    if (data) {
      toast.success("Login successful!");
      router.refresh();
      router.push("/");
    }
    if (error) {
      toast.error(error?.message || "Login failed. Try again.");
    }

    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
    router.refresh();
    router.push("/");
    toast.success("Logged in with Google successfully!");
  };

  return (
    <section className="w-full bg-primary min-h-screen flex justify-center items-center px-4 sm:px-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-secondary border border-white/[0.04] p-8 sm:p-10 rounded-3xl relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        <div className="text-center flex flex-col items-center gap-2 mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold bg-gold/5 px-4 py-1.5 rounded-full border border-gold/10 select-none">
            Secure Access
          </span>
          <h2 className="font-app text-2xl sm:text-3xl font-bold tracking-tight text-light uppercase mt-2">
            Account{" "}
            <span className="bg-gradient-to-r from-gold via-[#ffe2a4] to-gold bg-clip-text text-transparent">
              Login
            </span>
          </h2>
        </div>

        <Form onSubmit={handleEmailLogin} className="space-y-5">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col gap-2"
          >
            <TextField
              isRequired
              name="email"
              type="email"
              className="w-full"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="text-xs font-medium tracking-wider text-light/50 uppercase flex items-center gap-2 mb-2">
                <FiMail className="text-gold" /> Email Address
              </Label>
              <Input
                placeholder="Enter your email"
                className="w-full bg-primary border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300"
              />
              <FieldError className="text-[11px] font-medium text-red-400 tracking-wide mt-1" />
            </TextField>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-col gap-2"
          >
            <TextField
              isRequired
              name="password"
              type="password"
              className="w-full"
              validate={(value) => {
                if (value.length < 6) {
                  return "Password must be at least 6 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[a-z]/.test(value)) {
                  return "Password must contain at least one lowercase letter";
                }
                return null;
              }}
            >
              <Label className="text-xs font-medium tracking-wider text-light/50 uppercase flex items-center gap-2 mb-2">
                <FiLock className="text-gold" /> Password
              </Label>
              <Input
                placeholder="••••••••"
                className="w-full bg-primary border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300"
              />
              <FieldError className="text-[11px] font-medium text-red-400 tracking-wide mt-1" />
            </TextField>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="pt-2"
          >
            <Button
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gold text-primary font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-[#ffe2a4] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(255,189,55,0.15)]"
            >
              {loading ? "Verifying..." : "Login"}
            </Button>
          </motion.div>
        </Form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="relative flex py-5 items-center"
        >
          <div className="flex-grow border-t border-white/[0.04]"></div>
          <span className="flex-shrink mx-4 text-light/30 text-[10px] uppercase tracking-widest">
            Or continue with
          </span>
          <div className="flex-grow border-t border-white/[0.04]"></div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleGoogleLogin}
          type="button"
          className="w-full bg-primary border border-white/[0.06] text-light font-semibold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/[0.02] hover:border-white/[0.1] flex items-center justify-center gap-2"
        >
          <FaGoogle className="text-gold text-sm" /> Google Login
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="text-center text-xs text-light/40 mt-8"
        >
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-gold hover:underline font-medium transition-all"
          >
            Register here
          </Link>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default LoginPage;
