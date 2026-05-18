"use client";

import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // 💡 আপনার ব্যাকএন্ড API বা MongoDB-তে সাবমিট করার লজিক এখানে বসাবেন
    console.log("Contact Form Submitted:", formData);
  };

  const contactInfo = [
    {
      id: 1,
      icon: <FiMapPin className="text-lg text-gold" />,
      label: "Our Location",
      value: "Gulshan, Dhaka, Bangladesh",
    },
    {
      id: 2,
      icon: <FiPhone className="text-lg text-gold" />,
      label: "Phone & WhatsApp",
      value: "+880 1700-000000",
    },
    {
      id: 3,
      icon: <FiMail className="text-lg text-gold" />,
      label: "Email Address",
      value: "support@apexdrive.com",
    },
    {
      id: 4,
      icon: <FiClock className="text-lg text-gold" />,
      label: "Operating Hours",
      value: "24/7 Premium Support Active",
    },
  ];

  return (
    <section className="w-full bg-primary py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-[circle,rgba(255,189,55,0.015)_0%,transparent_70%] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* ─── SECTION HEADER ─── */}
        <div className="text-center flex flex-col items-center gap-2 mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold bg-gold/5 px-4 py-1.5 rounded-full border border-gold/10 select-none">
            Get In Touch
          </span>
          <h2 className="font-app text-3xl sm:text-4xl font-bold tracking-tight text-light uppercase mt-3 leading-tight">
            Connect With <br />
            <span className="bg-gradient-to-r from-gold via-[#ffe2a4] to-gold bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,189,55,0.15)]">
              ApexDrive HQ
            </span>
          </h2>
          <p className="max-w-xl text-sm text-light/60 mt-2 font-normal leading-relaxed">
            Have questions about bookings, long-term rentals, or enterprise
            fleet services? Our elite team is ready to assist.
          </p>
        </div>

        {/* ─── CONTACT CORE GRID ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* 📍 LEFT COLUMN: CONTACT DETAILS (4-Cols on Desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full">
              {contactInfo.map((info) => (
                <div
                  key={info.id}
                  className="premium-card bg-secondary border border-white/[0.04] rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:border-gold/20"
                >
                  <div className="p-3 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-light/40 font-medium">
                      {info.label}
                    </span>
                    <span className="text-sm font-medium text-light mt-0.5 truncate">
                      {info.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtle branding layer */}
            <div className="hidden lg:block premium-card bg-secondary/40 border border-dashed border-white/[0.02] rounded-2xl p-6 text-center">
              <span className="font-app text-lg font-bold tracking-widest text-light/20 block select-none">
                APEXDRIVE ENGINE
              </span>
            </div>
          </div>

          {/* ✉️ RIGHT COLUMN: INTERACTIVE FORM (7-Cols on Desktop) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="premium-card bg-secondary border border-white/[0.04] rounded-2xl p-6 sm:p-8 space-y-5 h-full flex flex-col justify-between"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-wider text-light/50 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-primary border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-wider text-light/50 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="johndoe@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-primary border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-wider text-light/50 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="Fleet Booking Inquiry"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full bg-primary border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-wider text-light/50 font-medium">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-primary border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gold text-primary font-semibold text-xs py-3.5 px-6 rounded-xl uppercase tracking-widest cursor-pointer transition-all duration-300 hover:bg-[#ffe2a4] hover:scale-[1.02] active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                >
                  <FiSend className="text-sm" />
                  Transmit Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
