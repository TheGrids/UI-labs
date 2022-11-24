import React, {FC, useState} from 'react'
import './Body.css'

export const Body: FC = () => {
    const [count, setCount] = useState("");
    const [count1, setCount1] = useState("");
    const [count2, setCount2] = useState("");
    const [count3, setCount3] = useState("");
    const [count4, setCount4] = useState("");
    
    function math() {
        let a = Number(count)
        let b = Number(count1)
        let c = Number(count2)
        let d = Number(count3)
        let e = Number(count4)
        let result = (Math.max(a,b,c,d,e))
        alert("Максимальное число: " + result)
    }

    function triangle() {
        let a = prompt("Введите 1 сторону", "0")
        let b = prompt("Введите 2 сторону", "0")
        let c = prompt("Введите 3 сторону", "0")

        if ((a == "" || a == null) || (b == "" || b == null) || (c == "" || c == null)) {
            alert("Введите корректные значения")
            return
        }

        let a1 = parseInt(a)
        let b1 = parseInt(b)
        let c1 = parseInt(c)

        if (a1 <= 0 || !a1 || b1 <= 0 || !b1 || c1 <= 0 || !c1) {
            alert("Введите корректные значения")
            return
        }

        if (a1 + b1 < c1 || a1 + c1 < b1 || b1 + c1 < a1) {
            alert("Треугольник не существует.")
            return
        }

        alert("Треугольник существует!")
    }


    return (
        <div>
            <div className='fullscreen'>
                <div className='box'>
                    <div className='bigfont'><b>Введите числа:</b></div><br/>
                    <input value={count} onChange={(event) => setCount(event.target.value)}
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                        }
                    }}></input><br/>
                    <input value={count1} onChange={(event) => setCount1(event.target.value)}
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                        }
                    }}></input><br/>
                    <input value={count2} onChange={(event) => setCount2(event.target.value)}
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                        }
                    }}></input><br/>
                    <input value={count3} onChange={(event) => setCount3(event.target.value)}
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                        }
                    }}></input><br/>
                    <input value={count4} onChange={(event) => setCount4(event.target.value)}
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                        }
                    }}></input><br/>
                    <button onClick={math}>Посчитать</button>
                    <br/><br/><br/>
                    <div className='box'>
                        <div className='bigfont'><b>Существует ли треугольник?</b></div><br/>
                        <button onClick={triangle}>Проверить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}