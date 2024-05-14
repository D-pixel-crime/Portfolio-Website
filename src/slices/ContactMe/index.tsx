import CommonBounded from "@/components/CommonBounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React from "react";

/**
 * Props for `ContactMe`.
 */
export type ContactMeProps = SliceComponentProps<Content.ContactMeSlice>;

/**
 * Component for "ContactMe" Slices.
 */
const ContactMe = ({ slice }: ContactMeProps): JSX.Element => {
  return (
    <CommonBounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size="lg">{slice.primary.heading}</Heading>
      <form>
        {slice.items.map(
          ({ label, placeholder, type, email_js_tag }, index) => {
            return (
              <React.Fragment key={index - 87909}>
                <label htmlFor={email_js_tag!}>{label}</label>
                <input
                  type={type!}
                  name={email_js_tag!}
                  id={email_js_tag!}
                  placeholder={placeholder!}
                />
              </React.Fragment>
            );
          }
        )}
        <label htmlFor={slice.primary.email_js_tag!}>
          {slice.primary.message_label}
        </label>
        <textarea
          name={slice.primary.email_js_tag!}
          id={slice.primary.email_js_tag!}
          cols={30}
        />
      </form>
    </CommonBounded>
  );
};

export default ContactMe;
