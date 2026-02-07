import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import CardBody from "react-bootstrap/CardBody";
import CardTitle from "react-bootstrap/CardTitle";
import CardText from "react-bootstrap/CardText";
import Button from "react-bootstrap/Button";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
            <Row xs={1} md={5} className="g-4">
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link href="/courses/1234/home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                            <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                            <CardBody>
                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
                            <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                Full Stack software developer</CardText>
                            <Button variant="primary">Go</Button>
                            </CardBody>
                        </Link>
                    </Card>
                </Col>
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link href="/courses/2222/home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                            <CardImg variant="top" src="/images/webdev.jpg" width="100%" height={160}/>
                            <CardBody>
                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2222</CardTitle>
                            <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                Web Development</CardText>
                            <Button variant="primary">Go</Button>
                            </CardBody>
                        </Link>
                    </Card>
                </Col>
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link href="/courses/3333/home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                            <CardImg variant="top" src="/images/database.jpg" width="100%" height={160}/>
                            <CardBody>
                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3333</CardTitle>
                            <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                Intro to Databases</CardText>
                            <Button variant="primary">Go</Button>
                            </CardBody>
                        </Link>
                    </Card>
                </Col>
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link href="/courses/4444/home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                            <CardImg variant="top" src="/images/cybersecurity.jpg" width="100%" height={160}/>
                            <CardBody>
                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4444</CardTitle>
                            <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                Cybersecurity</CardText>
                            <Button variant="primary">Go</Button>
                            </CardBody>
                        </Link>
                    </Card>
                </Col>
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link href="/courses/5555/home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                            <CardImg variant="top" src="/images/ood.jpg" width="100%" height={160}/>
                            <CardBody>
                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5555</CardTitle>
                            <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                Object Oriented Design</CardText>
                            <Button variant="primary">Go</Button>
                            </CardBody>
                        </Link>
                    </Card>
                </Col>
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link href="/courses/6666/home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                            <CardImg variant="top" src="/images/gamedev.jpg" width="100%" height={160}/>
                            <CardBody>
                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS6666</CardTitle>
                            <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                Game Development</CardText>
                            <Button variant="primary">Go</Button>
                            </CardBody>
                        </Link>
                    </Card>
                </Col>
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link href="/courses/7777/home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                            <CardImg variant="top" src="/images/writing.jpg" width="100%" height={160}/>
                            <CardBody>
                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS7777</CardTitle>
                            <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                Advanced Writing</CardText>
                            <Button variant="primary">Go</Button>
                            </CardBody>
                        </Link>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
);
}
