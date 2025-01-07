"use client";

import React, { useState } from "react";
import { Input, Textarea, Button } from "@nextui-org/react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace these with your EmailJS service, template, and user IDs
    const serviceID = "service_hk56s5b";
    const templateID = "template_nmwzlyl";
    const publicKey = "9DSmuDR59TR46T2KP";

    emailjs.send(serviceID, templateID, formData, publicKey).then(
      () => {
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/461327504_3787497404879906_7116841053049631049_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFtYnPqAE0Om_0t71AXycuAL87LuqeiAMAvzsu6p6IAwEV3df3-HONlKr1n6ok6kPyhoauw67ZatgU1MlKSM8Sn&_nc_ohc=7YPAWjASqwsQ7kNvgF3Ek8g&_nc_zt=23&_nc_ht=scontent.fcmb11-1.fna&_nc_gid=ADYLQtzCW-Nld0m7unY-vbQ&oh=00_AYDrVgEz4hUJWbf-mf2y4lEfYNa1LDtjAOLk3j6jXyK9IQ&oe=677A4CC9"
                    alt="Profile"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Ranjula Ilukpitaya
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    I truly appreciate your message—thank you so much for
                    reaching out!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ));
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.error("Failed to send email:", error);
        toast.error("Failed to send mail. Please try again.");
      }
    );
  };

  return (
    <div className="flex flex-col items-center">
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <Input
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Textarea
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
        />
        <Button type="submit" color="primary" className="mt-4">
          Submit
        </Button>
      </form>
    </div>
  );
}
