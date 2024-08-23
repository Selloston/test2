//import all assets
import "./Container.css"
import { Video } from "../element/index";
import Link from "next/link";
import tham from '../Container/Capture.ico'

//The default function
function Container (){
    return (
        <div className="Container">
            <Link className="Link" href={{pathname: "/videos", query: {src: "videos/VID_20240709_151005.mp4"}}}><Video title="طريقه مضمونه WeLinkIt كيف تربح من" photosrc='photos/Capture.png'></Video></Link>
            <Link className="Link" href={{pathname: "/videos", query: {src: "videos/VID_20240709_151005.mp4"}}}><Video title="اغرب حادث حصل بحياتي شاهد قبل الحذف" photosrc="./favicon.ico"></Video></Link>
            <Link className="Link" href={{pathname: "/videos", query: {src: "videos/VID_20240709_151005.mp4"}}}><Video title="ليه يا تره الناس غريبه؟" photosrc="./favicon.ico"></Video></Link>
            <Link className="Link" href={{pathname: "/videos", query: {src: "videos/VID_20240709_151005.mp4"}}}><Video title="سيره الصحابه عليهم السلام" photosrc="./favicon.ico"></Video></Link>
            <Link className="Link" href={{pathname: "/videos", query: {src: "videos/VID_20240709_151005.mp4"}}}><Video title="فديو محظور لا تتدخل لا ينصح للقلوب الضعيفه" photosrc="./favicon.ico"></Video></Link>
            <Link className="Link" href={{pathname: "/videos", query: {src: "videos/VID_20240709_151005.mp4"}}}><Video title="how to make website with zero code" photosrc="./favicon.ico"></Video></Link>
            <Link className="Link" href={{pathname: "/videos", query: {src: "videos/VID_20240709_151005.mp4"}}}><Video title="Are You Okey?" photosrc="./favicon.ico"></Video></Link>
            <Link className="Link" href={{pathname: "/videos", query: {src: "videos/VID_20240709_151005.mp4"}}}><Video title="666 احظر من رقم" photosrc="photos/666.png"></Video></Link>
            <Link className="Link" href={{pathname: "/videos", query: {src: "videos/VID_20240709_151005.mp4"}}}><Video title="ليه يا ترى في قمر {زيك يا قمر هههه}" photosrc="./favicon.ico"></Video></Link>
        </div>
    )
}

//expotr the default function
export default Container;