import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../css/button.css';

export const Projects = () => {
    const titleRef = useRef(0);
    const projRef1 = useRef(0);
    const projRef2 = useRef(0);
    const projRef3 = useRef(0);
    const projRef4 = useRef(0);
    const projRef5 = useRef(0);
    const projRef6 = useRef(0);

    const [loadTitle, setLoadTitle] = useState(false);
    const [loadProj1, setLoadProj1] = useState(false);
    const [loadProj2, setLoadProj2] = useState(false);
    const [loadProj3, setLoadProj3] = useState(false);
    const [loadProj4, setLoadProj4] = useState(false);
    const [loadProj5, setLoadProj5] = useState(false);
    const [loadProj6, setLoadProj6] = useState(false);


    const handleScroll = () => {
        const position = window.pageYOffset + 0.75 * window.innerHeight;

        if (position >= titleRef.current.offsetTop) {
            setLoadTitle(true);
        }
        if (position >= projRef1.current.offsetTop) {
            setLoadProj1(true);
        }
        if (position >= projRef2.current.offsetTop) {
            setLoadProj2(true);
        }
        if (position >= projRef3.current.offsetTop) {
            setLoadProj3(true);
        }
        if (position >= projRef4.current.offsetTop) {
            setLoadProj4(true);
        }
        if (position >= projRef5.current.offsetTop) {
            setLoadProj5(true);
        }
        if (position >= projRef6.current.offsetTop) {
            setLoadProj6(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return <>
        <Container fluid>
            <Row ref={titleRef} className={`${loadTitle ? 'notHidden' : 'hidden'} display-6 text-center mt-5`}>
                <Col className='header'>
                    <span className='header hr2'>Projects</span>
                </Col>
            </Row>

            <Row>
                <Col ref={projRef1} xs={12} lg={6} className={`${loadProj1 ? 'notHidden' : 'hidden'} mt-5 ${(window.innerWidth >= 1200) && 'delay-1'}`}>
                    <Card className='card-dimension h-100' border='light'>
                        <Card.Header className='fs-3 pb-0 header'>
                            DoughBack
                        </Card.Header>
                        <Card.Body className='pt-0 fs-5'>
                            <Card.Title>
                                <i className='fs-5'>HTML/CSS, React, Bootstrap/React Bootstrap, Express.js, Node.js, MySQL</i>
                            </Card.Title>
                            <Card.Text className='align-items-center'>
                                <ul>
                                    <li>A full stack application for companies to reimburse their employees</li>
                                    <li>Developed by a team of 6 using Agile and Scrum techniques over 5 sprints</li>
                                    <li>Features include account creation, login/logout, and submitting/editing/approving/denying reimbursement requests</li>
                                </ul>
                                <Row>
                                    <Col className='text-center mt-3' xs={12} sm={6}>
                                        <button className='btn draw-border h-100' 
                                                onClick={() => {
                                                    window.open('https://github.com/Mikecamdo/DoughBack');
                                                }}>
                                                    View on GitHub
                                        </button>
                                    </Col>
                                    <Col className='text-center mt-3' xs={12} sm={6}>
                                        <button className='btn draw-border h-100'
                                                onClick={() => {
                                                    window.open('https://doughback.vercel.app/');
                                                }}>
                                                    View Website
                                        </button>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col ref={projRef2} xs={12} lg={6} className={`${loadProj2 ? 'notHidden' : 'hidden'} mt-5 ${(window.innerWidth >= 1200) && 'delay-2'}`}>
                    <Card className='card-dimension h-100' border='light'>
                        <Card.Header className='fs-3 pb-0 header'>
                            Search Engine
                        </Card.Header>
                        <Card.Body className='pt-0 fs-5'>
                            <Card.Title>
                                <i className='fs-5'>C++, RapidJSON</i>
                            </Card.Title>
                            <Card.Text className='align-items-center'>
                                <ul>
                                    <li>A search engine that accepts simple Boolean queries (e.g., AND social network / OR snap facebook)</li>
                                    <li>Parses 300,000 JSON files and returns the most relevant articles for a given search</li>
                                    <li>Includes the implementation of a custom AVL tree and hash table</li>
                                </ul>
                                <Row>
                                    <Col className='text-center mt-3'>
                                        <button className='btn draw-border'
                                                onClick={() => {
                                                    window.open('https://github.com/Mikecamdo/SearchEngine');
                                                }}>
                                                    View on GitHub
                                        </button>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col ref={projRef3} xs={12} lg={6} className={`${loadProj3 ? 'notHidden' : 'hidden'} mt-5 ${(window.innerWidth >= 1200) && 'delay-1'}`}>
                    <Card className='card-dimension h-100' border='light'>
                        <Card.Header className='fs-3 pb-0 header'>
                            Sudoku Solver
                        </Card.Header>
                        <Card.Body className='pt-0 fs-5'>
                            <Card.Title>
                                <i className='fs-5'>Python, PyGame</i>
                            </Card.Title>
                            <Card.Text className='align-items-center'>
                                <ul>
                                    <li>A program that can solve any valid Sudoku puzzle using a backtracking algorithm</li>
                                    <li>Allows user to enter their own Sudoku puzzle; user can also play Sudoku using the provided Easy/Medium/Hard Sudoku puzzles</li>
                                </ul>
                                <Row>
                                    <Col className='text-center mt-3'>
                                        <button className='btn draw-border'
                                                onClick={() => {
                                                    window.open('https://github.com/Mikecamdo/SudokuSolver');
                                                }}>
                                                    View on GitHub
                                        </button>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col ref={projRef4} xs={12} lg={6} className={`${loadProj4 ? 'notHidden' : 'hidden'} mt-5 ${(window.innerWidth >= 1200) && 'delay-2'}`}>
                    <Card className='card-dimension h-100' border='light'>
                        <Card.Header className='fs-3 pb-0 header'>
                            Sentiment Analyzer
                        </Card.Header>
                        <Card.Body className='pt-0 fs-5'>
                            <Card.Title>
                                <i className='fs-5'>C++</i>
                            </Card.Title>
                            <Card.Text className='align-items-center'>
                                <ul>
                                    <li>A program that determines the sentiment (positive or negative) of a Tweet</li>
                                    <li>Analyzes the frequency of words in Tweets tagged positive and negative to determine relevant terms for each type of Tweet</li>
                                </ul>
                                <Row>
                                    <Col className='text-center mt-3'>
                                        <button className='btn draw-border'
                                                onClick={() => {
                                                    window.open('https://github.com/Mikecamdo/SentimentAnalyzer');
                                                }}>View on GitHub</button>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col ref={projRef5} xs={12} lg={6} className={`${loadProj5 ? 'notHidden' : 'hidden'} mt-5 ${(window.innerWidth >= 1200) && 'delay-1'}`}>
                    <Card className='card-dimension h-100' border='light'>
                        <Card.Header className='fs-3 pb-0 header'>
                            Word Sense Disambiguation
                        </Card.Header>
                        <Card.Body className='pt-0 fs-5'>
                            <Card.Title>
                                <i className='fs-5'>Python, NLTK</i>
                            </Card.Title>
                            <Card.Text className='align-items-center'>
                                <ul>
                                    <li>A program that determines the correct word sense of the words "Rubbish", "Yarn", and "Tissue"</li>
                                    <li>Uses a dictionary/knowledge based method inspired by the Lesk algorithm</li>
                                </ul>
                                <Row>
                                    <Col className='text-center mt-3'>
                                        <button className='btn draw-border'
                                                onClick={() => {
                                                    window.open('https://github.com/Mikecamdo/WordSenseDisambiguation');
                                                }}>
                                                    View on GitHub
                                        </button>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col ref={projRef6} xs={12} lg={6} className={`${loadProj6 ? 'notHidden' : 'hidden'} mt-5 ${(window.innerWidth >= 1200) && 'delay-2'}`}>
                    <Card className='card-dimension h-100' border='light'>
                        <Card.Header className='fs-3 pb-0 header'>
                            Community Detection
                        </Card.Header>
                        <Card.Body className='pt-0 fs-5'>
                            <Card.Title>
                                <i className='fs-5'>C++, Python</i>
                            </Card.Title>
                            <Card.Text className='align-items-center'>
                                <ul>
                                    <li>Implementation of the Girvan-Newman and Label Propagation community detection algorithms</li>
                                    <li>Provided statistical analysis and compared/contrasted the two algorithms</li>
                                </ul>
                                <Row>
                                    <Col className='text-center mt-3' xs={12} sm={6}>
                                        <button className='btn draw-border h-100'
                                                onClick={() => {
                                                    window.open('https://github.com/Mikecamdo/CommunityDetection');
                                                }}>
                                                    View on GitHub
                                        </button>
                                    </Col>
                                    <Col className='text-center mt-3' xs={12} sm={6}>
                                        <button className='btn draw-border h-100'
                                                onClick={() => {
                                                    window.open('https://medium.com/smucs/community-detection-label-propagation-vs-girvan-newman-part-2-c2fb78726db9');
                                                }}>
                                                    View Article
                                        </button>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
}