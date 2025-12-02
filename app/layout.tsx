import "@/styles/globals.css";

export const metadata = {
  title: "Contador en Línea",
  description: "Portal contable",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-100 min-h-screen">{children}</body>
    </html>
  );
}
