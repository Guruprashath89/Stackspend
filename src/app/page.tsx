"use client";

import { useEffect } from "react";
import supabase from "@/lib/supabase";

export default function Home() {

  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase
        .from("audits")
        .select("*");

      console.log(data);
      console.log(error);
    }

    testConnection();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <h1 className="text-5xl font-bold">
        StackSpend
      </h1>
    </main>
  );
}