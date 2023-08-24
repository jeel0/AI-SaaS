"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("1771cccd-4bbb-4dd8-9bea-b9efa7d02cbc");
  }, []);

  return null;
};