import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="border-b border(--border) px-6 py-3">
      <nav className="flex items-center justify-start">
        <div className="flex items-center">
          <button onClick={() => void navigate("/")}>Início</button>
        </div>
      </nav>
    </header>
  );
}
