import React, {FC, useState} from 'react'
import './Body.css'

export const Body: FC = () => {
    const [values, setValues] = useState("0");
    const [angle, setAngle] = useState("0");


    return (
        <div>
            <div className='fullscreen'>
                <div className='box'>
                    <div className='bigfont'><b>Измени линию!</b></div><br/>
                    <div className='line' style={{width: values+"vw", rotate: angle+"deg"}}></div><br/>
                    <input className='slider' type="range" min="0" max="90" value={values} onChange={(event) => setValues(event.target.value)}/><br/>
                    <input className='slider' type="range" min="0" max="180" value={angle} onChange={(event) => setAngle(event.target.value)}/><br/>
                </div>
            </div>
            <div className='fullscreen'>
                <div className='box'>
                    <div className='bigfont'><b>Анонимная анкета:</b></div><br/>
                    Ваш пол:
                    <div className='horizontal'><input type="radio" name='gender' value="male"/> Мужской</div>
                    <div className='horizontal'><input type="radio" name='gender' value="female"/> Женский</div><br/>
                    Ваш возраст:
                    <input type="date"/><br/>
                    Семейное положение:
                    <div className='horizontal'><input type="radio" name='status' value="unmarried"/> Не замужем / Холост</div>
                    <div className='horizontal'><input type="radio" name='status' value="married"/> Замужем / Женат</div>
                    <div className='horizontal'><input type="radio" name='status' value="divorced"/> Разведена / Разведён</div>
                    <div className='horizontal'><input type="radio" name='status' value="widow"/> Вдова / Вдовец</div><br/>
                </div>
            </div>
        </div>
    )
}