import { createClient } from "@/prismicio";
import SocialLinks from "./SocialLinks";

const Footer = async () => {
  const client = createClient();
  const footer = await client.getSingle("footer");

  return <SocialLinks footer={footer} />;
};
export default Footer;
