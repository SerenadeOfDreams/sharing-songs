import { useNavigate } from "react-router-dom";
import { Card } from "./components/Card";

export function Home() {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col gap-6 mx-auto max-w-xl px-4 py-10 sm:py-14">
      <p>
        Olá. O intuito deste site é compartilhar com as pessoas as músicas que
        eu gosto e praticar meu aprendizado de desenvolvimento web com React e
        Typescript. <br />
        <br /> Nas páginas de bandas e músicas, tentarei deixar links para mais
        de uma plataforma onde você pode ouvir.
      </p>

      <div className="flex gap-6">
        <Card onClick={() => void navigate("/artists")} title="Artistas" />
        <Card
          onClick={() => void navigate("/albums/SongsByAlbum")}
          title="Músicas"
          caption="(por álbum)"
        />
      </div>
    </main>
  );
}
