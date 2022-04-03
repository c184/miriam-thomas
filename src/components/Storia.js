import { Header, Container, Image, Item } from 'semantic-ui-react';

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

function Storia() {
    return(
    <Container className='paddingOnTop'>
        <div className='titolo-sezione'>
            La nostra storia
        </div>

        <Item.Group divided>
            <Item className='paddingLati'>
                <Image style={{height: '80px'}} src='immagini/love.png' />

                <Item.Content>
                <div className='titolo-testo'>Il primo incontro</div>
                <div className='descrizione'>
                    Quale posto migliore per il primo incontro se non un torno di palla avvelenata?
                </div>
                </Item.Content>
            </Item>

            <Item className='paddingLati smallPaddingOnTop'>
                <Image style={{height: '80px'}} src='immagini/couple.png' />

                <Item.Content>
                <div className='titolo-testo'>Il primo bacio</div>
                <div className='descrizione'>
                    Quanto avrà dovuto attendere la dolce Miriam prima di poter strappare un bacio all'ingenuo Thomas?
                </div>
                </Item.Content>
            </Item>

            <Item className='paddingLati smallPaddingOnTop'>
                <Image style={{height: '80px'}} src='immagini/kiss.png' />

                <Item.Content>
                <div className='titolo-testo'>Fidanzamento</div>
                <div className='descrizione'>
                    Il percorso per raggiungere la cima del monte era sempre più impervio, ma la sorpresa una volta conquistata la vetta è stato impgabile.
                </div>
                </Item.Content>
            </Item>
        </Item.Group>
    </Container>
    )
}

export default Storia;