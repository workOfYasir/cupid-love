import React,{useContext} from 'react'
import { Observer } from "mobx-react-lite"

const AboutUs = () => {

    return (
        <Observer>
            {() => (
                <>
                    <div className="container bg-grey">
                        <div className="col bg-white rounded">
                            <div className="display-7">About Us</div>
                        </div>
                        <div className="row">
                            <div className="col">
                                drtfcv bhjkmld ctfvgbnimo,p.sdfghjnkmo,lsedrfynctvybuhnj fgyh fgbhnm  tvbuin mvyub itfyg bhtcuybi orc yubimoyctv uit jk drtfcv bhjkmld ctfvgbnimo,p.sdfghjnkmo,lsedrfynctvybuhnj fgyh fgbhnm  tvbuin mvyub itfyg bhtcuybi orc yubimoyctv uit jk drtfcv bhjkmld ctfvgbnimo,p.sdfghjnkmo,lsedrfynctvybuhnj fgyh fgbhnm  tvbuin mvyub itfyg bhtcuybi orc yubimoyctv uit jk drtfcv bhjkmld ctfvgbnimo,p.sdfghjnkmo,lsedrfynctvybuhnj fgyh fgbhnm  tvbuin mvyub itfyg bhtcuybi orc yubimoyctv uit jk drtfcv bhjkmld ctfvgbnimo,p.sdfghjnkmo,lsedrfynctvybuhnj fgyh fgbhnm  tvbuin mvyub itfyg bhtcuybi orc yubimoyctv uit jk drtfcv bhjkmld ctfvgbnimo,p.sdfghjnkmo,lsedrfynctvybuhnj fgyh fgbhnm  tvbuin mvyub itfyg bhtcuybi orc yubimoyctv uit jk
                            </div>
                            <div className="col">
                                <img src={window.location.origin +"images/aboutus.png"} className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Observer>
    )
}