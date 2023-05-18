import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getPhysiotherapist, deletePhysiotherapist } from "../PhysiotherapistInfo";
import { Container } from "../GlobalStyle";
import "./staff.scss";

const Staff = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let staff = getPhysiotherapist(parseInt(params.staffId, 10));
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
                        <div>
                            {staff.pid === 1 ?
                                <>
                                    <p>Oliver graduated from Curtin with a Bachelor of Physiotherapy.</p>
                                    <p>He understands the importance of professional development to further enhance his clinical skills after graduation.</p>
                                    <p>He completed a qualification of deep dry needling and several courses including shoulder rehabilitation, running biomechanics, headache, and dizziness management.</p>
                                    <p>Oliver is interested in treating musculoskeletal conditions especially shoulder, back, and neck pain.</p>
                                    <p>He believes a combination of "hands-on" treatment and therapeutic exercises is important for clients to manage their musculoskeletal conditions and achieve their goals.</p><p>Outside the clinic, Oliver goes to the gym regularly. He enjoys grocery shopping and cooking big meals.</p>
                                </> : "No summary"}
                        </div>
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