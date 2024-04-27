import Header from './components/Header';
import FightCancer from './components/FightCancer/FightCancer';
import Footer from './components/footer/footer';
import UpperFooter from './components/footer/upperFooter';
import FrancisSection from './components/francisSection/FrancisSection';
import TutorialCenter from './components/tutorialCenter/TutorialCenter';
import Geolocalization from './components/Geolocation/Geolocation';
import Access from './components/Access/Access';

export default function Home() {
  return (
    <main className="">
      <Header />
      <FightCancer />
      <FrancisSection />
      <TutorialCenter />
      <Access />
      <Geolocalization/>
      <UpperFooter />
      <Footer />
    </main>
  );
}
