import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-900 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold">
          MarketFlow
        </Link>

        <nav className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
