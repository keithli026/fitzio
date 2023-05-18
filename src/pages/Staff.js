import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getPhysiotherapist, getPhysiotherapists ,deletePhysiotherapist, getPhysiotherapistByName } from "../PhysiotherapistInfo";
import { Container } from "../GlobalStyle";
import "./staff.scss";
import parse from 'html-react-parser'

const Staff = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let staff = getPhysiotherapistByName(params.staffId);
    // let staff = getPhysiotherapist(parseInt(params.staffId, 10));
    console.log(location, params.staffId, staff);
    return (
        <>
            <Container>
                <div className="flexbox">
                    <div className="image_wrapper">
                        <img src={staff.photo} alt={staff.name} />
                    </div>
                    <div className="content">
                        <h1 className="name">{staff.name}</h1>
                        <div className="title">{staff.title}</div>
                        <div>{staff.summary ? parse(staff.summary) : "No summary"}</div>
                    </div>
                </div>
                {/* <button
                    onClick={() => {
                        deletePhysiotherapist(staff.pid);
                        navigate("/meet-our-team" + location.search);
                    }}
                >
                    Delete
                </button> */}
            </Container>
        </>
    );
}

export default Staff;