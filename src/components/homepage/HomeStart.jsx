import React from 'react'
import '../../css/homestart.css'
import InspiredIcon from '../../../images/inspiredIcon.png'
import ConnectedIcon from '../../../images/connectedIcon.png'
import EquipIcon from '../../../images/equipIcon.png'

function HomeStart() {
  return (
    <>
        <div className='start-wrapper'>
          <div className='start-text'>
              <span>Start your journey.</span>
              <span>Come as you are. Bring your talents, your brilliance, your frustations,
                    your struggles-and let's turn them into something awesome.
              </span>
          </div>

          <div className='start-block'>
              <div>
                  <img src={InspiredIcon}/>
                  <span>Be inspired.</span>
                  <span>We want to give you the help and support you need to make huge strides 
                    towards the vision you're after in your business.</span>
              </div>

              <div>
                  <img src={ConnectedIcon}/>
                  <span>Get connected.</span>
                  <span>Jam with fellow tribe members, share experiences, stay accountable, and
                    encourage one another on your journey.
                  </span>
              </div>

              <div>
                  <img src={EquipIcon}/>
                  <span>Equip yourself.</span>
                  <span>Discover the tools and resources you need to build a beautiful website
                    and create an amazing brand and digital platform.
                  </span>
              </div>
          </div>

          <a className='start-firststep-btn'>TAKE THE FIRST STEP TODAY &rarr;</a>

        </div>
    </>
  )
}

export default HomeStart