"use client";

export default function DashboardPage() {
  const nombre =
    typeof window !== "undefined"
      ? localStorage.getItem("nombre") || "Usuario"
      : "";

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Título estilo original */}
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r 
          from-blue-600 to-pink-500 bg-clip-text text-transparent">
        Bienvenido, {nombre}
      </h1>

      {/* GRID DE OPCIONES DEL DASHBOARD */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* NUEVA SOLICITUD */}
        <a
          href="/dashboard/solicitudes/nueva"
          className="block bg-white border shadow rounded-xl hover:bg-gray-50 transition"
        >
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=60"
            alt="Nueva solicitud"
            className="w-full h-40 object-cover rounded-t-xl"
          />
          <div className="p-6 text-center font-medium">
            Nueva solicitud
          </div>
        </a>

        {/* MIS SOLICITUDES */}
        <a
          href="/dashboard/solicitudes"
          className="block bg-white border shadow rounded-xl hover:bg-gray-50 transition"
        >
          <img
            src="https://unsplash.com/es/fotos/una-persona-escribiendo-en-un-cuaderno-con-un-portatil-en-el-fondo-0KT9gxj_BdM"
            alt="Solicitudes"
            className="w-full h-40 object-cover rounded-t-xl"
          />
          <div className="p-6 text-center font-medium">
            Mis solicitudes
          </div>
        </a>

        {/* MI PERFIL */}
        <a
          href="/dashboard/perfil"
          className="block bg-white border shadow rounded-xl hover:bg-gray-50 transition"
        >
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=60"
            alt="Perfil"
            className="w-full h-40 object-cover rounded-t-xl"
          />
          <div className="p-6 text-center font-medium">
            Mi perfil
          </div>
        </a>

        {/* REPORTERÍA */}
        <a
          href="#"
          className="block bg-white border shadow rounded-xl hover:bg-gray-50 transition"
        >
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=60"
            alt="Reportería"
            className="w-full h-40 object-cover rounded-t-xl"
          />
          <div className="p-6 text-center font-medium">
            Reportería
          </div>
        </a>

        {/* NOTIFICACIONES */}
        <a
          href="#"
          className="block bg-white border shadow rounded-xl hover:bg-gray-50 transition"
        >
          <img
            src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=60"
            alt="Notificaciones"
            className="w-full h-40 object-cover rounded-t-xl"
          />
          <div className="p-6 text-center font-medium">
            Notificaciones
          </div>
        </a>

      </div>
    </div>
  );
}
