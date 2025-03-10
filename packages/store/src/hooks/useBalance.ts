"use client";
import React from "react";
import { balanceAtom } from "../atoms/balance";
import { useRecoilValue } from "recoil";

export const useBalance = () => {
  const value = useRecoilValue(balanceAtom);
  return value;
};
