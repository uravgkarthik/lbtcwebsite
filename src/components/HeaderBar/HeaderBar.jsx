import React,{useEffect,useState} from 'react';
import '../HeaderBar/headerbar.min.scss';

const HeaderBar=() => {
  
  const [changeHeader, setChangeHeader] = useState(true);
  useEffect(() => {
    console.log("Change Header");
    setInterval(() => setChangeHeader(!changeHeader), 5000);
    
  }, []);
    return (
      <div
        className="tpbr flex"
        style={{
          margin: "0",
          padding: "0",
          width: "100%",
          backgroundColor: "black",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div className="tpbr-inr">
            <div className="row justify-content-center">
              <div className="col-md-6 col-sm-12 col-lg-6">
                {changeHeader ? (
                  <p itemprop="description">
                    <i className="flaticon-error thm-clr"></i>
                    <strong>Crisis Watch:</strong> Covid-19 In India
                  </p>
                ) : (
                  <p itemprop="description">
                    <i className="flaticon-error thm-clr"></i>
                    <strong>Crisis Watch:</strong> Covid-19 In India
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default HeaderBar;