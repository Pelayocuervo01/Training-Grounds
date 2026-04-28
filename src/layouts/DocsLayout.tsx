interface DocsTable{
    name: string;
    link: string;
}

export default function DocsCard({name, link}: DocsTable){
    return(
        <div>
            <a href={link} target="_blank" rel="noreferrer" className="text-slate-400 text-sm hover:text-cyan-400">
                {name}
            </a>
        </div>
    )
}
