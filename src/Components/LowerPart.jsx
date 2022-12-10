import React from 'react'
import './lowerpart.css'
import Vector from '../Photos/Vector.png'

const LowerPart = () => {
  return (
    <div className='plan'>
      <div className='lower-heading'>
        <p className='lower-heading-p'>Our Plans & Pricing</p>
      </div>
      <div className='plans'>
        <div className='mon-haf'>
          <button className='btn-mon'>
            <span className='mon-text'>Monthly</span></button>
          <button className='btn-haf'><span className='haf-text'>Half-Yearly</span></button>
        </div>
        <div className='three-table'>
          <div className="table-1">
            <div className="up-t1">
              <p className='up-text'>Jarvis Portfolio</p>
              <div className="list">
                <p className="list-1"><img src={Vector}/>
                <span className='text-1'>Risk Profiling</span> </p>
                <p className="list-2"><img src={Vector} />
                <span className='text-2'>Personalised Portfolio</span></p>
                <p className="list-3"><img src={Vector} /><span className='text-3'>Real time risk management System</span></p>
                <p className="list-4"><img src={Vector} /><span className='text-4'>Chart Support</span></p>
                <p className="list-5"><img src={Vector} /><span className="text-5">Max AUM limit is 10,00,000</span></p>
              </div>
            </div>
            <div className="low-t1">
              <div className="upper-box">
                <p className='first'>
                  <span className='rupee-symbol'>₹</span>
                  <span className='number'>399</span>
                  <span className='monthly'>/monthly</span>
                  </p>
              </div>
              <div className="lower-box">
                <p className='conti'>Continue</p>
              </div>
            </div>
          </div>
          <div className="table-2">
            <div className="up-t2">
              <p className='tb-2-txt'>Jarvis Portfolio Plus+</p>
              <div className="list-mid-tb">
                <div className="item1">
                  <img src={Vector} />
                  <p className='txt-1'>Risk Profiling</p>
                </div>
                <div className="item2">
                  <img src={Vector} />
                  <p className="txt-2">Personalised Portfolio</p>
                </div>
                <div className="item3">
                  <img src={Vector} />
                  <p className="txt-3">Real time risk management system</p>
                </div>
                <div className="item4">
                  <img src={Vector} />
                  <p className="txt-4">Chart Support</p>
                </div>
                <div className="item5">
                  <img src={Vector} />
                  <p className="txt-5">Dedicated Relationship Manager</p>
                </div>
                <div className="item6">
                  <img src={Vector} />
                  <p className="txt-6">Free access to other products</p>
                </div>
                <div className="item7">
                  <img src={Vector} />
                  <p className="txt-7">Customization</p>
                </div>
                <div className="item8">
                  <img src={Vector} />
                  <p className="txt-8">Max AUM limit is 50,00,000</p>
                </div>
              </div>
            </div>
            <div className="low-t2">
              <div className="low-t2-upper-part">
                <div className="low-t2-upper-part-1">
                  <div className="pricing-part">
                    <p className='rupee-symbol'>₹</p>
                    <p className='price'>3999</p>
                  </div>
                  <p className='monthly-2'>/monthly</p>
                </div>
              </div>
              <div className="low-t2-lower-part">
                <p className='con'>Continue</p>
              </div>
            </div>
          </div>
          <div className="table-3">
            <div className="up-t3">
              <p className='up-t3-head'>Jarvis Portfolio Unlimited</p>
              <div className="up-t3-body">
                <div className="up-t3-body-item1">
                  <img src={Vector}/>
                  <p className='tb-txt-1'>Risk Profiling</p>
                </div>
                <div className="up-t3-body-item2">
                  <img src={Vector} />
                  <p className='tb-txt-2'>Personalised Portfolio</p>
                </div>
                <div className="up-t3-body-item3">
                  <img src={Vector} />
                  <p className='tb-txt-3'>Real time risk management system</p>
                </div>
                <div className="up-t3-body-item4">
                <img src={Vector} />
                  <p className='tb-txt-4'>Chart Support</p>
                </div>
                <div className="up-t3-body-item5">
                <img src={Vector} />
                  <p className='tb-txt-5'>Dedicated Relationship Manager</p>
                </div>
                <div className="up-t3-body-item6">
                <img src={Vector} />
                  <p className='tb-txt-6'>Free access to other products</p>
                </div>
                <div className="up-t3-body-item7">
                <img src={Vector} />
                  <p className='tb-txt-7'>Customization</p>
                </div>
                <div className="up-t3-body-item8">
                <img src={Vector} />
                  <p className='tb-txt-8'>Transaction Support</p>
                </div>
                <div className="up-t3-body-item9">
                <img src={Vector} />
                  <p className='tb-txt-9'>Access To Fund Manager</p>
                </div>
                <div className="up-t3-body-item10">
                <img src={Vector} />
                  <p className='tb-txt-10'>No AUM limit</p>
                </div>
              </div>
            </div>
            <div className="low-t3">
              <div className="low-t3-upper-body">
                <div className='price-box-3'>
                  <div className='price-half'>
                    <p className='rupee-symbol'>₹</p>
                    <p className='price-3'>8999</p>
                  </div>
                  <p className='monthly-3'>/monthly</p>
                </div>
              </div>
              <div className="low-t3-lower-body">
                <p className='cont-3'>Continue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LowerPart