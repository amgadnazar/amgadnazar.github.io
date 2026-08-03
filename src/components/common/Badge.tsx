type Props = {
  children: string;
};


export default function Badge({
  children
}: Props){

return (

<span
className="
px-3
py-1
rounded-full
text-sm
bg-cyan-500/10
text-cyan-400
border
border-cyan-400/20
"
>
{children}
</span>

);

}