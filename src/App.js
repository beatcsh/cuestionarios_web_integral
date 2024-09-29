import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import { FormOne, FormTwo, FormThree, FormFour, FormFive, FormSix, FormSeven, FormEight, FormNine, FormTen } from './components/Forms'

const App = () => {

  const [data, setData] = useState({})

  const onChange = (e) => {
    e.preventDefault()
    const obj = data
    obj[e.target.name] = e.target.value
    setData(obj)
    // console.log(data)
  }

  const onClick = () => {
    console.log(data)
    alert('ok')
  }

  const forms = {
    1: <FormOne onChange={onChange} onClick={onClick} />,
    2: <FormTwo onChange={onChange} onClick={onClick} />,
    3: <FormThree onChange={onChange} onClick={onClick} />,
    4: <FormFour onChange={onChange} onClick={onClick} />,
    5: <FormFive onChange={onChange} onClick={onClick} />,
    6: <FormSix onChange={onChange} onClick={onClick} />,
    7: <FormSeven onChange={onChange} onClick={onClick} />,
    8: <FormEight onChange={onChange} onClick={onClick} />,
    9: <FormNine onChange={onChange} onClick={onClick} />,
    10: <FormTen onChange={onChange} onClick={onClick} />
  }

  const cards = Object.entries(forms).map(([key, form]) => {
    return (
      <>
        <Col>
          <Card className='w-100 mt-4 mb-4' key={key}>
            <Card.Body>
              <p>{key}</p>
              {form}
            </Card.Body>
          </Card>
        </Col>
      </>
    )
  })

  return (
    <Container>
      <Row className='justify-content-md-center' lg={2} md={1} xs={1}>
        {cards}
      </Row>
    </Container>
  )
}

export default App