"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");

  const [showGoogleForm, setShowGoogleForm] = useState(false);
  const [googleEmail, setGoogleEmail] = useState("");

  // Login normal
  function handleLogin() {
    if (!email || !clave) {
      setError("Por favor ingresa tu correo y contraseña.");
      return;
    }

    localStorage.setItem("usuario", email);
    router.push("/dashboard");
  }

  // Google paso 2
  function handleGoogleFinal() {
    if (!googleEmail) {
      setError("Debes ingresar tu correo de Google.");
      return;
    }

    localStorage.setItem("usuario", googleEmail);
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-purple-100 to-pink-100 p-6">

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

        <h2 className="text-3xl font-bold text-center bg-gradient-to-r 
          from-blue-600 to-pink-500 bg-clip-text text-transparent">
          Iniciar sesión
        </h2>

        <p className="text-gray-500 text-center mt-1 mb-6">
          Accede con tu cuenta
        </p>

        {/* FORMULARIO GOOGLE — PASO 2 */}
        {showGoogleForm ? (
          <>
            <label className="font-medium">Correo de Google</label>
            <input
              type="email"
              className="w-full p-3 mt-2 bg-gray-50 border rounded-lg 
              focus:ring-2 focus:ring-pink-400"
              placeholder="tuemail@gmail.com"
              value={googleEmail}
              onChange={(e) => setGoogleEmail(e.target.value)}
            />

            {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

            <button
              onClick={handleGoogleFinal}
              className="w-full bg-gradient-to-r from-blue-600 to-pink-500 
              text-white font-semibold py-3 rounded-xl mt-6 shadow 
              hover:opacity-90 transition"
            >
              Continuar
            </button>

            <button
              onClick={() => setShowGoogleForm(false)}
              className="w-full border py-3 rounded-xl mt-3 hover:bg-gray-100"
            >
              Volver
            </button>
          </>
        ) : (
          <>
            {/* FORMULARIO NORMAL */}
            <label className="font-medium">Correo electrónico</label>
            <input
              type="email"
              className="w-full p-3 mt-2 bg-gray-50 border rounded-lg 
              focus:ring-2 focus:ring-pink-400"
              placeholder="tu@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="font-medium mt-4 block">Contraseña</label>
            <input
              type="password"
              className="w-full p-3 mt-2 bg-gray-50 border rounded-lg 
              focus:ring-2 focus:ring-pink-400"
              placeholder="••••••••"
              onChange={(e) => setClave(e.target.value)}
            />

            {error && (
              <p className="text-red-500 text-sm mt-3">{error}</p>
            )}

            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-blue-600 to-pink-500 
              text-white font-semibold py-3 rounded-xl mt-6 shadow 
              hover:opacity-90 transition"
            >
              Entrar
            </button>

            {/* División */}
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="px-3 text-gray-500">o</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>

            <button
              onClick={() => setShowGoogleForm(true)}
              className="w-full flex items-center justify-center gap-3 py-3 border rounded-xl 
              hover:bg-gray-100 transition"
            >
              <FcGoogle size={24} />
              <span className="font-medium">Iniciar sesión con Google</span>
            </button>

            <p className="text-center text-gray-600 mt-6">
              ¿No tienes cuenta?{" "}
              <a
                href="/register"
                className="text-pink-500 font-medium hover:underline"
              >
                Regístrate aquí
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
