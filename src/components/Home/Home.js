import './Home.css';

const Home = () => {
    return (
        <div className='Home'>
            <div className='container'>
                <h1>Open University of Sri Lanka</h1><br/>
                <p><span>The Open University of Sri Lanka (OUSL)</span> is a national university in Sri Lanka. It is unique within the Sri Lankan national university system for being the only university to offer programs of study leading to Certificate, Diploma, Degrees and Postgraduate degrees up to PhD level through the <span>Open and Distance Mode of Learning(ODL).</span> 
                      The degrees awarded by the university are treated as equivalent to degrees awarded by any other Sri Lankan University under the preview of the University Grants Commission.</p>
                <br/>
                <h3>Courses offered</h3>
                <ol>
                  <li>Software Engineering</li>
                  <li>Computer Science</li>
                  <li>Networking</li>
                </ol>
            </div>
        </div>  
    );
}

export default Home;