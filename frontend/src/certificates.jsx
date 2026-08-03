import Certificate from './certificate.jsx'
import React,{useContext} from 'react';
import { userContext } from './App';


function Certificates(){

    const username = useContext(userContext);

    const certificates =[
        {
            name: username.name,
            course: "HTML",
            provider: "course provider",
            year:"**/**/****"
        },
        {
            name: username.name,
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
