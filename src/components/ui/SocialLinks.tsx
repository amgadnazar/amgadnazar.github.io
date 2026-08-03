import {
FaGithub,
FaLinkedin,
FaEnvelope
} from "react-icons/fa";


export default function SocialLinks(){

return (

<div className="flex gap-5 text-2xl">

<a
href="https://github.com/"
target="_blank"
className="hover:text-cyan-400 transition"
>
<FaGithub/>
</a>


<a
href="https://linkedin.com/"
target="_blank"
className="hover:text-cyan-400 transition"
>
<FaLinkedin/>
</a>


<a
href="mailto:amgadnazar11@gmail.com"
className="hover:text-cyan-400 transition"
>
<FaEnvelope/>
</a>


</div>

);

}