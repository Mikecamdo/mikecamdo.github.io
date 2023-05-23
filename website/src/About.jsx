import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export const About = () => {
    return <>
        <Container fluid>
            <Row className='text-center'>
                <Col>
                    <Image fluid src='ProfessionalHeadshot.png'></Image>
                </Col>

                <Col>
                    <Row className='text-center fs-3'>
                        <Row className='display-6 text-center mt-5'>
                            <Col className='header'>
                                About Me
                            </Col>
                        </Row>
                        <Col>
                            Born and raised in the Jackson, Mississippi area, I've enjoyed working with technology my whole life.
                            Since coming to college, I've discovered a passion for creating innovative solutions to problems through software.
                            I'm currently interested in AI, Machine Learning, and Software Development, and I hope to utilize my skills to make a tangible impact on the problems that face our society today.
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
}