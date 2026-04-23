import gamecubeGif from "../assets/gamecube.gif";
export default function Home(){
    return (
        <div className="text-center items-center justify-center">
            <img src={gamecubeGif} className="mx-auto mt-6 w-100 h-100"></img>
        </div>
    )
}