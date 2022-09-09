import ContactForm from './contactform.jsx';
import Gallery_pics from './Gallerypics.js'
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function Gallery() {
    return (
        <div className='home'>
            <Header />
            <div className='gallery' style={{ marginRight: "100px", marginTop: "1px" }}><Gallery_pics />
            </div>
            <Footer />
        </div>
    )
}

export default Gallery