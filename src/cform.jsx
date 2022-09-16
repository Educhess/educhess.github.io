import ContactForm from './contactform.jsx';
import Dailypuzzle from './Dashboard/components/dailypuzzle.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Paper } from '@material-ui/core';

function Cform() {
    return (
        <div className='myContainer' style={{}}>

            <Header />
            <div className='cform'>
                <Paper>
                    <ContactForm />
                </Paper>
            </div>
            {/* <div className='dailypuzzle' style={{ marginLeft: "100px", marginTop: "80px", width: '100%' }}><Dailypuzzle />
            </div> */}

            <Footer />
        </div>
    )
}

export default Cform
