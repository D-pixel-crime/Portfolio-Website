"use client";

import CommonBounded from "@/components/CommonBounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/react/dist/iconify.js";
import { gsap } from "gsap";

/**
 * Props for `ContactMe`.
 */
export type ContactMeProps = SliceComponentProps<Content.ContactMeSlice>;

/**
 * Component for "ContactMe" Slices.
 */
const ContactMe = ({ slice }: ContactMeProps): JSX.Element => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    gsap.utils.toArray(".each-div").forEach((div: any, index) => {
      gsap.timeline().fromTo(
        div,
        {
          opacity: 0,
          scale: 0.8,
          y: 100,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power3.inOut",
          duration: 1.5,
        },
        index * 0.1
      );
    });
  }, []);

  return (
    <CommonBounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="overflow-hidden"
    >
      <Heading size="lg">{slice.primary.heading}</Heading>
      <div
        className={`fixed flex gap-2 items-center px-3 py-4 bg-slate-800 rounded-l-lg top-36 right-0 ${isSent ? "translate-x-0" : "translate-x-[110%]"}`}
        style={{ boxShadow: "-2px 1px 20px 0px black", transition: "all 1s" }}
      >
        <span>
          <Icon icon={"mdi:progress-tick"} className="size-8 text-green-600" />
        </span>
        <span>Message Sent Successfully</span>
      </div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          if (!formData.name || !formData.email || !formData.message)
            return alert("Please fill all the fields");

          try {
            const res = await emailjs.sendForm(
              process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
              process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
              formRef.current!,
              { publicKey: process.env.NEXT_PUBLIC_EMAILJS_API_KEY! }
            );
            setFormData({ name: "", email: "", message: "" });
            setIsSent(true);

            setTimeout(() => {
              setIsSent(false);
            }, 5000);

            console.log(res);
          } catch (error) {
            console.error(error);
          }
        }}
        ref={formRef}
        className="flex flex-col gap-4 sm:mx-7 mt-14 mb-4 px-2"
      >
        <div className="flex flex-col gap-1 each-div">
          <label htmlFor="user_name" className="sm:text-xl">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            placeholder="Enter Your Full Name"
            className="rounded-md px-2 py-3 bg-slate-800 border border-slate-700 max-sm:text-sm text-slate-400 focus:shadow-2xl focus:shadow-black"
            style={{ transition: "all 1s" }}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-1 each-div">
          <label htmlFor="user_email" className="sm:text-xl">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            placeholder="Enter Your Email Address"
            className="rounded-md px-2 py-3 bg-slate-800 border border-slate-700 max-sm:text-sm text-slate-400 focus:shadow-2xl focus:shadow-black"
            style={{ transition: "all 1s" }}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col my-4 gap-1 each-div">
          <label htmlFor={slice.primary.email_js_tag!} className="sm:text-xl">
            {slice.primary.message_label}
          </label>
          <textarea
            name={slice.primary.email_js_tag!}
            placeholder={slice.primary.message_description!}
            id={slice.primary.email_js_tag!}
            rows={5}
            className="py-3 px-2 rounded-lg border border-slate-700 bg-slate-800 max-sm:text-sm text-slate-400 focus:shadow-2xl focus:shadow-black"
            style={{ transition: "all 1s" }}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="bg-transparent flex-center py-1.5 px-2.5 w-fit overflow-hidden text-lg rounded-lg text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-black"
          >
            <span>Send</span>
          </button>
        </div>
      </form>
    </CommonBounded>
  );
};

export default ContactMe;
