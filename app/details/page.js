import Header from '../components/Header';
import Newsletter from '../components/NewsLetter';
import Footer from '../components/Footer';
import BannerGallery from '../components/BannerGallery';
import DetailsContent from '../components/DetailsContent';

export default function About() {
    return (
        <main>
            <Header />
            <BannerGallery />
            <DetailsContent/>
            {/* <Newsletter/> */}
            <Footer />
        </main>
    );
}