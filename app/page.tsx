export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center 
      bg-gradient-to-br from-blue-100 to-pink-100 p-6">

      <h1
        className="text-5xl font-extrabold mb-4
        bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent"
      >
        Contador en Línea
      </h1>

      <p className="text-gray-700 text-center max-w-md mb-8">
        Plataforma de declaración de impuestos automatizada.
      </p>

      <a
        href="/login"
        className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow
        hover:bg-blue-700 transition"
      >
        Iniciar sesión
      </a>
    </div>
  );
}
