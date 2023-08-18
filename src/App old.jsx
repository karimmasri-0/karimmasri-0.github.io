import "./index.css";
import Link from "./Components/Link";

function App() {
  return (
    <main className="my-48 mx-96">
      <section>
        <h1 className="text-4xl">I am Karim AlMasri</h1>
        <h2 className="text-5xl">a Web Developer</h2>
      </section>
      <section className="mt-32">
        <div className="text-2xl">Projects</div>
        <div className="my-8">
          <h3 className="text-xl">LinkLift</h3>
          <Link link="google.com">Visit LinkLift</Link>
        </div>
        <div className="my-8">
          <h3 className="text-xl">Attendin</h3>
          <Link link="google.com">Watch a demo</Link>
        </div>
        <div className="my-8">
          <h3 className="text-xl">ArtAthtetics</h3>
          <Link link="google.com">Visit ArtAthtetics</Link>
        </div>
      </section>
    </main>
  );
}

export default App;
