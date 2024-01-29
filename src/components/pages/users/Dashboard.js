import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import UserContext from "../../context/user.context";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Dashboard=()=>{

    const userContext=useContext(UserContext);

    //Private Dashboard
    const dashboardView=()=>{
        return(
            <div>
              This Is User Dashboard
              <Outlet/>
            </div>

        )
    }
//not LoggedIn View!!!

const notLoggedInView=()=>{
    return(
        <Container >
            <Row>
                <Col md={{
                    span:8,
                    offset:2
                }}>
                    <Card className="border-0 shadow mt-3">
                        <Card.Body className="text-center">
                        <h3>You Are Not Logged In !!!!</h3>
                        <p>Please do Login to view the Page !!!</p>
                        <Button as={NavLink} to={"/login"} variant="success" >Login Now </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}


return(
    (userContext.isLogin) ? dashboardView() : notLoggedInView()
)


}
export default Dashboard;