/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { type FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import SocialIcons from "../SocialIcons/SocialIcons";
import { ScrollReveal } from "../animations/ScrollReveal";

const ContactMe = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      // Handle form submission logic here
      console.log("Form Data:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      reset()

      toast.success("Message sent successfully (Demo)", { duration: 2000 });
      // reset()
    } catch (error) {
      toast.error("Failed to send message", { duration: 2000 });
    }
  };

  return (
    <div className="mb-5 lg:mb-10">
      <div className="flex items-center justify-center mb-4">
        <ScrollReveal width="fit-content">
          <h1 className="text-2xl md:text-3xl text-center text-white font-bold border-b-2 border-[#64B5F6] inline-block mb-5 lg:mb-10">
            Contact <span className="text-[#64B5F6]">Me</span>
          </h1>
        </ScrollReveal>
      </div>

      <div className="mx-auto text-white px-5 flex justify-center items-center">
        <div className="flex flex-col gap-10 md:flex-row w-full items-center h-auto justify-center">
          {/* Contact Information */}
          <div className="flex gap-7 flex-col w-full">
            <ScrollReveal width="100%" delay={0.1}>
              <div className="flex gap-2 items-center">
                <IoLogoWhatsapp className="text-xl text-[#64B5F6]" />
                <p>+8801747477746</p>
              </div>
            </ScrollReveal>

            <ScrollReveal width="100%" delay={0.2}>
              <div className="flex gap-2 items-center">
                <FaEnvelope className="text-xl text-[#64B5F6]" />
                <p>humayunkabir506034@gmail.com</p>
              </div>
            </ScrollReveal>

            <ScrollReveal width="100%" delay={0.3}>
              <div className="flex gap-2 items-center">
                <IoCall className="text-xl text-[#64B5F6]" />
                <p>+8801747477746</p>
              </div>
            </ScrollReveal>

            <ScrollReveal width="100%" delay={0.4}>
              <div className="flex gap-2 items-center">
                <FaLocationDot className="text-xl text-[#64B5F6]" />
                <p>Zirabo, Ashulia, Savar, Dhaka</p>
              </div>
            </ScrollReveal>

            <ScrollReveal width="100%" delay={0.5}>
              <div className="flex gap-4 items-center mt-4">
                {/* Social Icons */}
                <SocialIcons />
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <div className="w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-5"
            >
              <div className="col-span-2">
                <ScrollReveal width="100%" delay={0.1}>
                  <input
                    className="block px-3 py-2 w-full rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#64B5F6] transition-all"
                    required
                    type="text"
                    placeholder="Your Name"
                    {...register("name", { required: true })}
                  />
                </ScrollReveal>
              </div>

              <div className="col-span-2 lg:col-span-1">
                <ScrollReveal width="100%" delay={0.2}>
                  <input
                    className="block px-3 py-2 w-full rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#64B5F6] transition-all"
                    required
                    type="number"
                    {...register("phone", { required: true })}
                    placeholder="Phone Number"
                  />
                </ScrollReveal>
              </div>

              <div className="col-span-2 lg:col-span-1">
                <ScrollReveal width="100%" delay={0.3}>
                  <select
                    className="block px-3 py-2 w-full rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#64B5F6] transition-all"
                    defaultValue={""}
                    {...register("subject", { required: true })}
                  >
                    <option value="" disabled>
                      Select Subject
                    </option>
                    <option value="Web Development">Web Development</option>
                    <option value="Bug Fixing">Bug Fixing</option>
                    <option value="Consultation">Consultation</option>
                  </select>
                </ScrollReveal>
              </div>

              <div className="col-span-2">
                <ScrollReveal width="100%" delay={0.4}>
                  <input
                    className="block px-3 py-2 w-full rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#64B5F6] transition-all"
                    required
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email Address"
                  />
                </ScrollReveal>
              </div>

              <div className="col-span-2">
                <ScrollReveal width="100%" delay={0.5}>
                  <textarea
                    className="block px-3 py-2 w-full rounded-lg bg-gray-800 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#64B5F6] transition-all"
                    required
                    {...register("message", { required: true })}
                    placeholder="Your Message"
                  />
                </ScrollReveal>
              </div>

              <div className="col-span-2 flex justify-center items-center mt-2">
                <ScrollReveal width="fit-content" delay={0.6}>
                  <button
                    type="submit"
                    className="px-8 py-2 rounded-md bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                  >
                    Send
                  </button>
                </ScrollReveal>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
