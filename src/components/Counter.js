import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";

const CounterComponent = () => {

    const [counter, setCounter] = useState(0)
    const [numerines, setNumerines] = useState([1])
    const [suma, setSuma] = useState(0)
    const [data, setData] = useState({})

    const add = () => {
        const numerin = numerines
        numerin.push(numerin.length + 1)
        setNumerines([...numerin])
        for(const prop in data){
            console.log(data[prop])
            setSuma(suma + parseInt(data[prop]))
        }
    }

    const reset = () => {
        window.location.reload()
    }

    const onChange = (e) => {
        e.preventDefault()
        const obj = data
        obj[e.target.name] = e.target.value
        setData(obj)
        console.log(data)
    }

    return (
        <>
            <main className="m-4">
                <h2>Contador</h2>
                <p>{counter}</p>
                <Button onClick={() => setCounter(counter - 1)} variant="danger" className="m-1">-</Button>
                <Button onClick={() => setCounter(counter + 1)} variant="success" className="m1">+</Button>
                {/* <Button onClick={() => setCounter(0)} variant="info">Reset</Button> */}
                <hr></hr>
                <h2>Lista Dinamica</h2>
                <Button onClick={reset} type="submit" variant="danger" className="m-1">Reset</Button>
                <Button onClick={add} variant="success" className="m1">+</Button>
                <p className="m-3">Suma: {suma}</p>
                {
                    numerines.map((value, index) => (
                        <>
                            <p className="m-3">Cifra: {index + 1}</p>
                            <Form.Control onChange={onChange} className="w-50 m-3" name={`cif${index+1}`} type="number" placeholder="Escribe un número" />
                        </>
                    ))
                }
            </main>
        </>
    )
}

export default CounterComponent