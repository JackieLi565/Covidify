import '../styles/App.css'
import { useNavigate } from 'react-router-dom';
function Portal() {
    const naviagte = useNavigate();
    return (  
        <div className='portal'>
            <h1 className='Covidify'>
                Covidify
            </h1>
            <h2 className='slogan'>
                A receipt for the pandemic
            </h2>
            <p className='desc'>
                Covidify is a web-based application which prints the receipt on reported Covid-19 related information. 
                Users can choose specific dates or print out the average daily, month, or yearly data.
                If you would like to learn more about the data Covidify uses click <a target={'_blank'} className='link' href="https://github.com/ccodwg/CovidTimelineCanada">HERE.</a>
            </p>
            <button className='trynow' onClick={(() => naviagte('/Receipt'))}>
                Try Covidify
            </button>
        </div>
    );
}

export default Portal;