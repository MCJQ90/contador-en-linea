"use client";

import { useEffect, useState } from "react";

interface Solicitud {
  id: number;
  servicio: string;
  anio: string;
  estado: string;
  fecha: string;
  asistente: string;
  contador: string;
}

export default function MisSolicitudes() {
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("solicitudes") || "[]");

    // Asignación simulada
    const solicitudesConResponsables = stored.map((solicitud: any) => ({
      ...solicitud,
      asistente: solicitud.asistente || "María Gómez",
      contador: solicitud.contador || "Carlos Jaramillo",
    }));

    setSolicitudes(solicitudesConResponsables);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-4xl">

        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 
          bg-clip-text text-transparent text-center mb-8">
          Mis Solicitudes
        </h1>

        {solicitudes.length === 0 ? (
          <p className="text-center text-gray-600">
            No tienes solicitudes aún.
          </p>
        ) : (
          <div className="space-y-6">
            {solicitudes.map((sol) => (
              <div
                key={sol.id}
                className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200"
              >
                <h2 className="text-xl font-semibold text-petrol mb-4">
                  {sol.servicio === "declaracion-renta"
                    ? "Declaración de Impuesto a la Renta"
                    : sol.servicio}
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                  <div>
                    <p className="text-gray-500 text-sm">Año fiscal</p>
                    <p className="font-medium">{sol.anio}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Fecha de envío</p>
                    <p className="font-medium">{sol.fecha}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Estado</p>
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm font-medium 
                        ${
                          sol.estado === "Pendiente"
                            ? "bg-yellow-500"
                            : sol.estado === "En proceso"
                            ? "bg-blue-500"
                            : "bg-green-600"
                        }`}
                    >
                      {sol.estado}
                    </span>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Asistente asignado</p>
                    <p className="font-medium">{sol.asistente}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Contador responsable</p>
                    <p className="font-medium">{sol.contador}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
