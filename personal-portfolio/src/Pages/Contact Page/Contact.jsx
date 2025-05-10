
import './Contact.css'
import RecruiterForm from '../../Components/RecruiterForm'

import Navigation from '../../Components/Navigation'
import { GitHubCard, LinkedInCard, EmailCard, CellnumberCard } from '../../Components/LinkCards'
export default function Contact() {
  return (
    <div>
    <Navigation/>
<div className='contact-page'>  

   <h1>Recruiting? Lets get in Touch!</h1>

        <div className='panel'>
            <div className='cards'>
              <CellnumberCard/>
              <EmailCard/>
              <LinkedInCard/>
              <GitHubCard/>
            </div>
            <br></br>
            <div className='form'>
            <RecruiterForm/>
            </div>
        </div>

   </div>
</div>
  )
}
