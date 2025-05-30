export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">ALX Listings</h1>
      <nav className="space-x-4">
        <a href="#" className="text-gray-600">Home</a>
        <a href="#" className="text-gray-600">Listings</a>
      </nav>
    </header>
  );
}
