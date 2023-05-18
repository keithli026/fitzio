import { Container } from "../GlobalStyle";
import { Link } from "react-router-dom";
const OurTeamOverview = () => {
    return (
        <>
            <Container className="card_wrapper">
                <div className="card">
                    <Link to="/our-team">
                        <img src={process.env.PUBLIC_URL + "Oliver_Li.jpg"} alt="Oliver Li"></img>
                        <div className="summary">
                            <h2 className="name">Oliver Li</h2>
                            <div className="title">Physiotherapist</div>
                        </div>
                    </Link>
                </div>
                <div className="card">
                    <Link to="/our-team">
                        <img src={process.env.PUBLIC_URL + "Oliver_Li.jpg"} alt="Oliver Li"></img>
                        <div className="summary">
                            <h2 className="name">Oliver Li 2</h2>
                            <div className="title">Physiotherapist</div>
                        </div>
                    </Link>
                </div>
                <div className="card">
                    <Link to="/our-team">
                        <img src={process.env.PUBLIC_URL + "Oliver_Li.jpg"} alt="Oliver Li"></img>
                        <div className="summary">
                            <h2 className="name">Oliver Li 3</h2>
                            <div className="title">Physiotherapist</div>
                        </div>
                    </Link>
                </div>
            </Container>
        </>
    );
}

export default OurTeamOverview;