import {Container, Header} from 'semantic-ui-react';

function Banner() {
    return(
        <div className="hero-image">
            <Container className="hero-text">
                <div className='banner-corsivo' style={{ paddingBottom: '15px' }}>Miriam</div>
                <div className='banner-corsivo'>&amp; Thomas</div>
                <div className='banner-sottotitolo'>Ci sposeremo il 28 maggio 2022</div>
            </Container>
        </div>
    )

}

export default Banner;