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
import { FiLock, FiMail, FiUser, FiImage } from "react-icons/fi";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const Register = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const allData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: allData.name,
      email: allData.email,
      image: allData.image,
      password: allData.password,
      callbackURL: "/login",
    });

    if (data) {
      toast.success("Registration successful! Please login.");
      router.refresh();
      router.push("/login");
    }
    if (error) {
      toast.error(error?.message || "Registration failed. Try again.");
    }

    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    try {
      // 🎯 Google Auth লগইন লজিক
      // await signInWithGoogle();

      toast.success("Logged in with Google successfully!");
      router.refresh();
      router.push("/"); // 👈 গুগল লগইনে সরাসরি হোম রাউটে রিডাইরেক্ট
    } catch (error) {
      toast.error("Google authentication failed.");
    }
  };

  return (
    <section className="w-full bg-primary min-h-screen flex justify-center items-center py-12 px-4 sm:px-6 relative overflow-hidden">
      <div className="w-full max-w-md bg-secondary border border-white/[0.04] p-8 sm:p-10 rounded-3xl relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="text-center flex flex-col items-center gap-2 mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold bg-gold/5 px-4 py-1.5 rounded-full border border-gold/10 select-none">
            Join Us
          </span>
          <h2 className="font-app text-2xl sm:text-3xl font-bold tracking-tight text-light uppercase mt-2">
            Create{" "}
            <span className="bg-gradient-to-r from-gold via-[#ffe2a4] to-gold bg-clip-text text-transparent">
              Account
            </span>
          </h2>
        </div>

        {/* 👑 HeroUI Form */}
        <Form onSubmit={handleRegister} className="space-y-5">
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <TextField isRequired name="name" type="text" className="w-full">
              <Label className="text-xs font-medium tracking-wider text-light/50 uppercase flex items-center gap-2 mb-2">
                <FiUser className="text-gold" /> Full Name
              </Label>
              <Input
                name="name"
                placeholder="Enter your name"
                className="w-full bg-primary border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300"
              />
              <FieldError className="text-[11px] font-medium text-red-400 tracking-wide mt-1" />
            </TextField>
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
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
                name="email"
                placeholder="Enter your email"
                className="w-full bg-primary border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300"
              />
              <FieldError className="text-[11px] font-medium text-red-400 tracking-wide mt-1" />
            </TextField>
          </div>

          {/* Photo URL Field */}
          <div className="flex flex-col gap-2">
            <TextField isRequired name="image" type="url" className="w-full">
              <Label className="text-xs font-medium tracking-wider text-light/50 uppercase flex items-center gap-2 mb-2">
                <FiImage className="text-gold" /> Image URL
              </Label>
              <Input
                name="image"
                placeholder="https://example.com/avatar.jpg"
                className="w-full bg-primary border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300"
              />
              <FieldError className="text-[11px] font-medium text-red-400 tracking-wide mt-1" />
            </TextField>
          </div>

          {/* Password Field with Validation */}
          <div className="flex flex-col gap-2">
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
                name="password"
                placeholder="••••••••"
                className="w-full bg-primary border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300"
              />
              <FieldError className="text-[11px] font-medium text-red-400 tracking-wide mt-1" />
            </TextField>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gold text-primary font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-[#ffe2a4] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(255,189,55,0.15)]"
            >
              {loading ? "Creating Account..." : "Register"}
            </Button>
          </div>
        </Form>

        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-white/[0.04]"></div>
          <span className="flex-shrink mx-4 text-light/30 text-[10px] uppercase tracking-widest">
            Or continue with
          </span>
          <div className="flex-grow border-t border-white/[0.04]"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          type="button"
          className="w-full bg-primary border border-white/[0.06] text-light font-semibold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/[0.02] hover:border-white/[0.1] active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <FaGoogle className="text-gold text-sm" /> Google Register
        </button>

        <p className="text-center text-xs text-light/40 mt-8">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-gold hover:underline font-medium transition-all"
          >
            Login here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
