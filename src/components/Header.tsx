import React from "react";
import { createClient } from "@/prismicio";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import NavBar from "./NavBar";

const Header = async () => {
  const client = createClient();
  const commonSettings = await client.getSingle("common_settings");

  return <NavBar commonSettings={commonSettings} />;
};
export default Header;
