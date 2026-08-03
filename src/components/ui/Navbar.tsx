const links = [
"About",
"Skills",
"Projects",
"Experience",
"Certifications",
"Contact"
];


export default function Navbar(){

return (

<nav
className="
fixed
top-0
left-0
right-0
z-50
bg-[#070B14]/80
backdrop-blur
border-b
border-white/10
"
>

<div
className="
max-w-7xl
mx-auto
px-6
py-5
flex
justify-between
items-center
"
>


<h1
className="
text-xl
font-bold
text-cyan-400
"
>
Amjad Nazar
</h1>


<div
className="
hidden
md:flex
gap-8
text-gray-300
"
>

{
links.map((item)=>(

<a
key={item}
href={`#${item.toLowerCase()}`}
className="
hover:text-cyan-400
transition
"
>
{item}
</a>

))
}


</div>


</div>

</nav>

);

}