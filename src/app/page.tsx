import HeroSection from "./hero/hero";
import HomePage from "./home/home";
import Services from "./services/services";
import Footer from "./footer/footer";
import Reviews from "./reviews/reviews";
import About from "./about/about";
import Project from "./project/project";
import Contact from "./contact-me/contact";


 
 
 

export default function Home() {
  return (
     <div className="h-[1000px]">
     <HomePage/>
     <HeroSection/>
     <About/>
     <Services/>
     <Project/>
     <Reviews/>
     <Contact/>
     <Footer/>
     
     </div>
  );
}
