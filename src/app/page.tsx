import FOOTER from "./components/Footer/footer";
import Header from "./components/Header/header";
import HERO from "./components/Hero/hero";
// Importing the Footer, Header, and Hero components from their respective directories

export default function Home() {
  return (
    <div>
      {/* Render the Header component at the top of the page */}
      <Header></Header>
      
      {/* Render the Hero component, typically the main banner or section */}
      <HERO></HERO>
      
      {/* Render the Footer component at the bottom of the page */}
      <FOOTER></FOOTER>
    </div>
  );
}
