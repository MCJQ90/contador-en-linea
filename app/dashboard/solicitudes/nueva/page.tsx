"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NuevaSolicitud() {
  const router = useRouter();

  const [servicio, setServicio] = useState("declaracion-renta");
  const [anio, setAnio] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!servicio || !anio) {
      setError("Debe seleccionar el servicio y el año fiscal.");
      return;
    }

    // Simulación — En sistema real iría a una API
    const solicitud = {
      id: Date.now(),
      servicio,
      anio,
      estado: "Pendiente",
      fecha: new Date().toLocaleDateString(),
    };

    // Guardamos en localStorage
    const guardadas = JSON.parse(localStorage.getItem("solicitudes") || "[]");
    guardadas.push(solicitud);
    localStorage.setItem("solicitudes", JSON.stringify(guardadas));

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center bg-gradient-to-r 
          from-blue-600 to-pink-500 bg-clip-text text-transparent mb-6">
          Nueva Solicitud
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Complete la información para generar su solicitud
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* SERVICIO */}
          <div>
            <label className="block font-medium mb-2">
              Seleccione el servicio
            </label>

            <select
              value={servicio}
              onChange={(e) => setServicio(e.target.value)}
              className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-pink-400"
            >
              <option value="declaracion-renta">
                Declaración de Impuesto a la Renta
              </option>
              {/* FUTUROS SERVICIOS */}
              {/* <option value="iva">Declaración de IVA</option> */}
            </select>
          </div>

          {/* AÑO FISCAL */}
          <div>
            <label className="block font-medium mb-2">Año fiscal</label>

            <select
              value={anio}
              onChange={(e) => setAnio(e.target.value)}
              className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleccione un año...</option>
              {["2020", "2021", "2022", "2023", "2024", "2025"].map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          {/* BOTÓN ENVIAR */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-pink-500
            text-white font-semibold rounded-xl shadow hover:opacity-90 transition"
          >
            Enviar Solicitud
          </button>
        </form>
      </div>
    </div>
  );
}
