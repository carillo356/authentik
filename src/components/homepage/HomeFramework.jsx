import React from 'react'
import '../../css/homeframework.css'
import WebsiteLogo from "../../../images/websiteLogo.png"

function HomeFramework() {
  return (
    <div className='framework-wrapper'>
        <div>
            <div className='framework-text'>
                <span>Get started today.</span>
                <span>Introducing the Authentik Framework&trade; for creative entrepreneurs.</span>
            </div>

            <div className='framework-block'>
                <div>
                    <span>Authentik Living</span>
                    <span>We believe that living an honest and intentional life will carry over to the way you run your business.</span>
                </div>

                <div>
                    <span>Authentik Design</span>
                    <span>We believe that amazing typography and white space will help you build a beautiful website experience.</span>
                </div>

                <div>
                    <span>Authentik Business</span>
                    <span>We believe that being geniuine and transparent with your audience is paramount to a successful business.</span>
                </div>
                    
                <div>
                    <span>Authentik Community</span>
                    <span>We believe that doing life together-both business and personal-is the only way to go about this journey.</span>
                </div>
            </div>
        </div>

        <div className='framework-email-wrapper'>
            <div>
                <img src={WebsiteLogo}/>
                <span>Start your journey.</span>
                <span>We help creative entrepreneurs build an honest brand & digital platform.</span>
                <div className='inputs-div'>
                    <input typeof='input' placeholder='First Name'/>
                    <input typeof='input' placeholder='Email Address'/> 
                </div>

                <div className='checkbox-div'>
                    <input type='checkbox'/>
                    <span>I accept the <span className='underline'>terms of service</span> and <span className='underline'>privacy policy</span>.</span>
                </div>  
                <button>GET STARTED TODAY</button>
            </div>
        </div>
    </div>
  )
}

export default HomeFramework