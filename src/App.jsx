import Hero from "./components/Hero";

function App() {
  return (
    <div
      className="
        min-h-screen
        overflow-x-hidden
        bg-black
        text-white
      "
    >
      {/* Main Hero Section */}
      <Hero />
    </div>
  );
}

export default App;