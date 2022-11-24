import React, {FC, useState} from 'react'
import './Body.css'

export const Body: FC = () => {
    const [count, setCount] = useState("");
    const [count1, setCount1] = useState("");
    const [count2, setCount2] = useState("");
    const [result, setResult] = useState(0);
    const [result1, setResult1] = useState(0);
    
    function math() {
        let r = Number(count)
        setResult(Math.PI * r * r)
    }

    function math1() {
        let n1 = Number(count1)
        let n2 = Number(count2)
        setResult1(Math.sqrt(n1*n1 + n2*n2))
    }


    return (
        <div>
            <div className='fullscreen'>
                <div className='box'>
                    <div className='bigfont'><b>Введите радиус:</b></div><br/>
                    <div className='bigfont' style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                        π *&nbsp;<div className='border' style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>{count}</div>² = {result}
                    </div>
                    <input value={count} onChange={(event) => setCount(event.target.value)} 
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                        }
                    }}></input><br/>
                    <button onClick={math}>Посчитать</button>
                </div>
            </div>
            <div className='fullscreen'>
                <div className='box'>
                    <div className='bigfont'><b>Введите катеты:</b></div><br/>
                    <div className='bigfont' style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                        √(<div className='border' style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>{count1}</div>² +&nbsp;<div className='border' style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>{count2}</div>²) = {result1}
                    </div>
                    Катет #1
                    <input value={count1} onChange={(event) => setCount1(event.target.value)} 
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                        }
                    }}></input><br/>
                    Катет #2
                    <input value={count2} onChange={(event) => setCount2(event.target.value)} 
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                        }
                    }}></input><br/>
                    <button onClick={math1}>Посчитать</button>
                </div>
            </div>
        </div>
    )
}