import Header from '../components/Header';
import Newsletter from '../components/NewsLetter';
import Footer from '../components/Footer';
import BannerGallery from '../components/BannerGallery';

export default function About() {
    return (
        <main>
            <Header />
            <BannerGallery />
            {/* <Newsletter/> */}
            <Footer />
        </main>
    );
}