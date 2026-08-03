import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Product";
import Videos from "./components/VideoSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <section id="home"></section>

        <section id="categories"></section>

        <section id="products"></section>

        <section id="videos"></section>

        <section id="about"></section>

        <section id="contact"></section>
      </main>
      <Hero />
      {/* <Categories /> */}
      <Products />
      <Videos />
      <Contact />
      <Footer />
    </>
  );
}

export default App;