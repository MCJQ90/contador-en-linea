"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");

  function handleRegister() {
    if (email.length < 3 || clave.length < 3) return;
    localStorage.setItem("usuario", email);
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-blue-100 to-pink-100 p-6">

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

        <h2 className="text-3xl font-bold text-center bg-gradient-to-r 
          from-blue-600 to-pink-500 bg-clip-text text-transparent">
          Crear cuenta
        </h2>

        <input
          type="email"
          className="w-full p-3 mt-6 bg-gray-50 border rounded-lg 
          focus:ring-2 focus:ring-pink-400"
          placeholder="tu@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 mt-4 bg-gray-50 border rounded-lg 
          focus:ring-2 focus:ring-pink-400"
          placeholder="Clave"
          onChange={(e) => setClave(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-gradient-to-r from-blue-600 to-pink-500 
            text-white font-semibold py-3 rounded-xl mt-6 shadow hover:opacity-90 transition"
        >
          Crear cuenta
        </button>

        <p className="text-center text-gray-600 mt-6">
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
}
