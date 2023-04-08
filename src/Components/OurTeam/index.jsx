import ourTeamImage from "../../Assets/Images/ourTeam.jpg";
import "./index.min.css";
import our_team_info_list from "./our_team_data";

const OurTeam = () => {
    return (
        // Start Our Team Section
        <section className="our-team text-center text-white pt-5 pb-5" style={{ backgroundImage: `url(${ourTeamImage})` }} id="our-team">
            <div className="container">
                <h2 className="section-name h1">Our Team</h2>
                {/* Start Grid System */}
                <div className="row">
                    {our_team_info_list.map(team_info =>
                        // Start Column
                        <div className="col-md-4" key={team_info.id}>
                            <div className="team-info-box mb-5 pb-4">
                                <div className="member-image-box mx-auto pt-3">
                                    <img src={team_info.imageSrc} className="member-image" alt="member image !" />
                                </div>
                                <div className="member-info">
                                    <h4 className="member-name fw-bold">{team_info.memberName}</h4>
                                    <p className="member-specialist mb-3 mt-3">{team_info.memberSpecialist}</p>
                                    <ul className="contact-links-list d-flex justify-content-center">
                                        {team_info.memberContactLinks.map((link, linkIndex) => (
                                            <li className="link-item" key={linkIndex}>
                                                <a href={link} className="contact-link" target="_blank">
                                                    {team_info.contactLinksIcons[linkIndex]}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        // End Column
                    )}
                </div>
                {/* End Grid System */}
            </div>
        </section>
        // End Our Team Section
    );
}

export default OurTeam;