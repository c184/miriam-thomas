import {Header, Image} from 'semantic-ui-react';

function ListaNozze() {
    return(
        <div className='paddingOnTop' style={{width: '100%'}}>
            <Image src="immagini/top_wave_coral.png" fluid></Image>
            <div className='div-ondulato' style={{backgroundColor: "#FCB2A9"}}>
                <div className='paddingLati'>
                    <div className='titolo-sezione-white'>Lista nozze</div>
                    <div className='descrizione-white'>
                        La nostra casa è già arredata e piena di amore.
                    </div>
                    <div className='descrizione-white' style={{ marginTop: '15px' }}>
                        Tuttavia, se volete farci un dono gradito apprezzeremo moltissimo un aiuto per il viaggio di nozze.
                    </div>
                    <div className='iban' style={{ marginTop: '25px' }}>
                        IT00000000000000000000000
                    </div>
                </div>
            </div>
            <Image src="immagini/bottom_wave.png" style={{backgroundColor: "#FCB2A9"}} fluid></Image>
        </div>
    )
}

export default ListaNozze;