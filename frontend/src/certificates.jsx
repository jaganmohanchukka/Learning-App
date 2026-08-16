import Certificate from './certificate.jsx'
import React,{useContext} from 'react';
import { useAuth } from './auth.jsx';


function Certificates(){

    const {user} = useAuth();

    const certificates =[
        {
            name: user.name,
            course: "HTML",
            provider: "course provider",
            year:"**/**/****"
        },
        {
            name: user.name,
            course: "JAVA SCRIPT",
            provider: "course provider",
            year:"**/**/****"
        },
    ];
    return(
        <div id="outer" >
            <p id = "learn-para" > Your Certifcicates:</p>
            <div id="learn-inner">
                {certificates.map((cert , index)=>(
                    <Certificate key={index} name={cert.name} course={cert.course} provider={cert.provider} year={cert.year} />
                ))}
            </div>
        </div>
    )
}
export default Certificates
