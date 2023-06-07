import React from 'react'
import { Container } from "../GlobalStyle"

const ExtracorporealShockwaveTherapy = () => {
    return (
        <>
            <Container>
                <h1 className='service'>Extracorporeal Shockwave Therapy</h1>
                <div className='flexbox'>
                    <div className='image_wrapper'>
                        <img src={process.env.PUBLIC_URL + "/Shockwave_therapy.jpg"} alt="Extracorporeal Shockwave Therapy"></img>
                    </div>
                    <div className='content'>
                        <p>Extracorporeal shock wave therapy promotes a healing environment in injured tissue by stimulating the growth of new blood vessels, growth factors, cell proliferation, and reducing inflammatory markers. It is commonly used in treating tendon injuries.</p>
                        <div>Benefits of extracorporeal shock wave therapy are: </div>
                        <ul className='effect'>
                            <li>Promote tissue healing response</li>
                            <li>Reduce inflammation</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ExtracorporealShockwaveTherapy