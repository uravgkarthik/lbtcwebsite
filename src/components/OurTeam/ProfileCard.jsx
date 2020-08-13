import React from 'react';

const ProfileCard=(props)=> {
    const {person} = props     
    
    return(
        <div>
            <div className="tem-bx">
                <div
                    className="tem-thmb"
                    style={{
                        backgroundImage:
                            "url("+person.photo+")"
                    }}
                >
                    <div className="tem-scl">
                        <a
                            className="facebook"
                            href={person.facebooklink}
                            title="Facebook"
                            itemprop="url"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a
                            className="pinterest"
                            href={person.linkedinlink}
                            title="Pinterest"
                            itemprop="url"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a
                            className="twitter"
                            href={person.twitterlink}
                            title="Twitter"
                            itemprop="url"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <i className="fa fa-twitter"></i>
                        </a>
                    </div>
                </div>
                <div className="tem-inf">
                    <h4 itemprop="headline">
                        <a href="team-detail.html" title="" itemprop="url">
                            {person.name}
                        </a>
                    </h4>
                    <span>{person.designation}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;