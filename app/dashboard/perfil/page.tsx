export default function Perfil() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Mi perfil
      </h1>

      <div className="bg-white p-6 rounded-xl shadow max-w-lg">
        <p><strong>Nombre:</strong> Juan Pérez</p>
        <p><strong>Correo:</strong> juan@example.com</p>
        <p><strong>Plan:</strong> Mensual</p>

        <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg">
          Editar
        </button>
      </div>
    </div>
  );
}
