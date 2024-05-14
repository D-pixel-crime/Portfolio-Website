"use client";

import CommonBounded from "@/components/CommonBounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React, { useRef, useState } from "react";

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

  const sendEmail = (e: any) => {
    e.preventDefault();
  };

  return (
    <CommonBounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size="lg">{slice.primary.heading}</Heading>
      <form
        ref={formRef}
        className="flex flex-col gap-4 sm:mx-7 mt-14 mb-4 px-2"
      >
        <div className="flex flex-col gap-1">
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
        <div className="flex flex-col gap-1">
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

        <div className="flex flex-col my-4 gap-1">
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
            className="bg-white flex-center py-1.5 px-2.5 group relative w-fit overflow-hidden text-lg rounded-lg text-black"
          >
            <span className="absolute inset-0 z-0 h-full translate-x-[-90%] translate-y-[80%] transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span>Send</span>
          </button>
        </div>
      </form>
    </CommonBounded>
  );
};

export default ContactMe;
