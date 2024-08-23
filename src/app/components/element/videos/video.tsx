//import all assets
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import "./video.css"

//The default function
const Video = (props: { photosrc: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) =>  {
    return (
        <div className="Containervideo">
            <div className="videos" style={{background: `url(${props.photosrc})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
            <div className="videoinfo">
                <div><p>{props.title}</p></div>
                <div className="smallaccont"></div>
            </div>
        </div>
    )
}

//expotr the default function
export default Video;