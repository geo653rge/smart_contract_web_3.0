import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

function App() {
  return (
    <div className="text-5xl min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>

      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
