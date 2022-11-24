import React, {FC, useState} from 'react'
import './Body.css'

export const Body: FC = () => {
    const [x1, setX1] = useState("");
    const [y1, setY1] = useState("");
    const [x2, setX2] = useState("");
    const [y2, setY2] = useState("");
    const [x3, setX3] = useState("");
    const [y3, setY3] = useState("");
    const [x4, setX4] = useState("");
    const [y4, setY4] = useState("");
    const [i1, setI1] = useState("");
    const [i2, setI2] = useState("");
    const [result, setResult] = useState(0);
    const [result2, setResult2] = useState(0);

    function s() {
        let ax = parseInt(x1)
        let bx = parseInt(x2)
        let cx = parseInt(x3)
        let ay = parseInt(y1)
        let by = parseInt(y2)
        let cy = parseInt(y3)
        setResult(0.5 * (Math.abs((ax - cx) * (by - cy) - ( bx - cx) * (ay - cy))))
    }

    function l() {
        let x = parseInt(x4)
        let y = parseInt(y4)
        setResult2(Math.pow(x*x + y*y, 0.5))
    }

    function f() {
        let x = i1
        setI1(i2)
        setI2(x)
    }

    return (
        <div>
            <div className='fullscreen'>
                <div className='bigfont'><b>Площадь треугольника:</b></div>
                X1
                <input value={x1} onChange={(event) => setX1(event.target.value)} 
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                    }
                }}></input><br/>
                Y1
                <input value={y1} onChange={(event) => setY1(event.target.value)} 
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                    }
                }}></input><br/>
                X2
                <input value={x2} onChange={(event) => setX2(event.target.value)} 
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                    }
                }}></input><br/>
                Y2
                <input value={y2} onChange={(event) => setY2(event.target.value)} 
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                    }
                }}></input><br/>
                X3
                <input value={x3} onChange={(event) => setX3(event.target.value)} 
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                    }
                }}></input><br/>
                Y3
                <input value={y3} onChange={(event) => setY3(event.target.value)} 
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                    }
                }}></input><br/>
                Результат (обладает свойством focus):
                <input value={result} onFocus={(e) => s()} style={{backgroundColor: "gainsboro"}}></input><br/>
            </div>
            <div className='fullscreen'>
                <div className='bigfont'><b>Расстояние до начала координат:</b></div>
                X
                <input value={x4} onChange={(event) => setX4(event.target.value)} 
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                    }
                }}></input><br/>
                Y
                <input value={y4} onChange={(event) => setY4(event.target.value)} 
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                    }
                }}></input><br/>
                Результат (обладает свойством select):
                <input value={result2} onSelect={(e) => l()} style={{backgroundColor: "gainsboro"}}></input><br/>
            </div>
            <div className='fullscreen'>
                <div className='bigfont'><b>Поменяй переменные местами:</b></div>
                <input value={i1} onChange={(event) => setI1(event.target.value)}></input><br/>
                (Данное поле обладает свойством blur)
                <input value={i2} onChange={(event) => setI2(event.target.value)} onBlur={(e) => f()}></input><br/>
            </div>
        </div>
    )
}