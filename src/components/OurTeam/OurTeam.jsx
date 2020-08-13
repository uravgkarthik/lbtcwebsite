import React from "react";
import "../OurTeam/ourteam.min.scss";
import ProfileCard from "./ProfileCard";
import First from "../../assets/images/Our Team/Anirudh.jpg";
import Second from "../../assets/images/Our Team/Prajwal.jpg";
import Fourth from "../../assets/images/Our Team/Vyshak.jpg";
import Fifth from "../../assets/images/Our Team/Amar.jpg";
import Sixth from "../../assets/images/Our Team/Nidish.jpg";
import Seventh from "../../assets/images/Our Team/Lohit.jpg";
import Ninth from "../../assets/images/Our Team/Yoshita.jpg";
import Tenth from "../../assets/images/Our Team/Bhuvan.jpg";
import Eleventh from "../../assets/images/Our Team/Niranjan.jpg";
import Twelveth from "../../assets/images/Our Team/Sharan.jpg";
function OurTeam(){
  const ourteamdata = [
    {
      name:"Anirudh S Dutt", 
      designation:"Founder",
      facebooklink:"",
      linkedinlink:"",
      twitterlink:"",
      photo: First
    },
    {
      name: "Prajwal GV",
      designation: "Vice President",
      facebooklink: "",
      linkedinlink: "",
      twitterlink: "",
      photo: Second
    },
    {
      name: "Vyshak Iyengar",
      designation: "Board Member",
      facebooklink: "",
      linkedinlink: "",
      twitterlink: "",
      photo: Fourth
    },
    {
      name: "Amar Prabhu",
      designation: "Secretary",
      facebooklink: "",
      linkedinlink: "",
      twitterlink: "",
      photo: Fifth
    },
    {
      name: "Nidish",
      designation: "Secretary",
      facebooklink: "",
      linkedinlink: "",
      twitterlink: "",
      photo: Sixth
    },
    {
      name: "Lohit BN",
      designation: "Board Member",
      facebooklink: "",
      linkedinlink: "",
      twitterlink: "",
      photo: Seventh
    },
    {
      name: "Yoshita Ramesh",
      designation: "Board Member",
      facebooklink: "",
      linkedinlink: "",
      twitterlink: "",
      photo: Ninth
    },
    {
      name: "Bhuvan",
      designation: "Board Member",
      facebooklink: "",
      linkedinlink: "",
      twitterlink: "",
      photo: Tenth
    },
    
    
  ]
  const youthteamdata = [
    {
      name: "Niranjan Muralidhar",
      designation: "Yuva Nayaka",
      facebooklink: "",
      linkedinlink: "",
      twitterlink: "",
      photo: Eleventh
    },
    {
      name: "Sharan",
      designation: "",
      facebooklink: "",
      linkedinlink: "",
      twitterlink: "",
      photo: Twelveth
    }
  ]
    return (
      <section>
        <div className="block">
          <div className="container">
            <div className="sec-ttl text-center">
              <div className="sec-ttl-inr">
                <h2 className="smolfontsize" itemprop="headline">Core Team</h2>
                <span>Our Main Team</span>
                <i className="flaticon-sweat thm-clr"></i>
              </div>
            </div>
            <div className="tem-wrp text-center remove-ext4">
              <div className="row">
                {
                  ourteamdata.map((member)=> (
                  <div className="col-md-3 col-sm-3 col-lg-3">
                    <ProfileCard person={member}></ProfileCard>
                  </div>
                  ))
                }
              </div>
            </div>
          </div>
          {/* Core Team Ends ✅*/}
          {/* Youth Team Starts ✅*/}
          <div className="container youthteampad">
            <div className="sec-ttl text-center">
              <div className="sec-ttl-inr">
                <h2 className="smolfontsize" itemprop="headline">Youth Team</h2>
                <span>Our Youth Wing</span>
                <i className="flaticon-sweat thm-clr"></i>
              </div>
            </div>
            <div className="tem-wrp text-center remove-ext4">
              <div className="row">
                {
                  youthteamdata.map((member) => (
                    <div className="col-md-3 col-sm-3 col-lg-3">
                      <ProfileCard person={member}></ProfileCard>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default OurTeam;