import React, {Dispatch, FC, SetStateAction, useState} from 'react'
import './Body.css'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'

export const Body: FC = () => {
    const [image, setImage] = useState("");
    const [arrow1, setArrow1] = useState("");
    const [arrow2, setArrow2] = useState("");
    const [arrow3, setArrow3] = useState("");

    function aboba(arrow:Function, action:number){
        if (action) {
            arrow("→")
        } else {
            arrow("")
        }
    }

    return (
        <div>
            <div className='menu'>
                <div className='button' onMouseOver={(e) => aboba(setArrow1, 1)} onMouseOut={(e) => aboba(setArrow1, 0)}>{arrow1}Главная</div>
                <div className='button' onMouseOver={(e) => aboba(setArrow2, 1)} onMouseOut={(e) => aboba(setArrow2, 0)}>{arrow2}Новости</div>
                <div className='button' onMouseOver={(e) => aboba(setArrow3, 1)} onMouseOut={(e) => aboba(setArrow3, 0)}>{arrow3}О нас</div>
            </div>
            <div className='fullscreen'>
                <div className='box'>
                    <div className='box1'>
                        <img src={pic1} onClick={(e) => setImage(pic1)}></img>
                        <img src={pic2} onClick={(e) => setImage(pic2)}></img>
                        <img src={pic3} onClick={(e) => setImage(pic3)}></img>
                    </div>
                    <img src={image} style={{width: "20%"}}></img>
                </div>
            </div>
            <div className='fullscreen'>
                <div className='box'>
                    <div className='box1'>
                        <img src={pic1} className="img"></img>
                        <img src={pic2} className="img"></img>
                        <img src={pic3} className="img"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}