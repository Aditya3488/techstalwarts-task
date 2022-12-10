import React from "react";
import "./upperpart.css";

import vector from "../Photos/Vector.png";

const UpperPart = () => {
  return (
    <div className="main-container">
      <div className="box-1">
        <div className="para">
          Build an <span className="ai-power">AI-powered equity portfolio</span>{" "}
          for just <span className="strike">₹399</span>{" "}
          <span className="ai-power">₹100</span> and make the most of volatile
          stock markets.
        </div>

        <div className="box-2">
          <div className="line-1">
            <div className="small-box-1">
              <i>
                <img src={vector} />
              </i>
              <p className="box-1-cont">
                Ai-based research using 12 million parameters
              </p>
            </div>
            <div className="small-box-2">
              <i>
                <img src={vector} />
              </i>
              <p className="box-2-cont">Onboard with just 5 simple steps</p>
            </div>
            <div className="small-box-3">
              <i>
                <img src={vector} />
              </i>
              <p className="box-3-cont">
                Personalised portfolio based on your risk profile
              </p>
            </div>
          </div>
          <div className="line-2">
            <div className="small-box-4">
              <i>
                <img src={vector} />
              </i>
              <p className="box-4-cont">Ongoing personalised recommendations</p>
            </div>
            <div className="small-box-5">
              <i>
                <img src={vector} />
              </i>
              <p className="box-5-cont">3000+ stock universe</p>
            </div>
            <div className="small-box-6">
              <i>
                <img src={vector} />
              </i>
              <p className="box-6-cont">
                Trusted by over 1 lac happy customers
              </p>
            </div>
          </div>
          <div className="line-3">
            <div className="small-box-7">
              <i>
                <img src={vector} />
              </i>
              <p className="box-7-cont">
                24X7 risk management for risk-free returns
              </p>
            </div>
            <div className="small-box-8">
              <i>
                <img src={vector} />
              </i>
              <p className="box-8-cont">
                Timely rebalancing to optimise the returns{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="box-3">
          <button className="btn">
            <span className="btn-text">Get Started</span>
          </button>
          <p className="term">*Terms & Conditions Apply</p>
        </div>

      </div>
    </div>
  );
};

export default UpperPart;
