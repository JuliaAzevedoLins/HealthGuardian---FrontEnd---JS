import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

const Main = styled.div`
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #9CBCCC;
`;

const Login_ = styled.div`
  margin-top : 4%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Frase_inicial = styled.div`
  padding-top: 7%;
  font-size: 30px;
  text-align: center;
  justify-content: center;

`;


function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://healthguardian-e9b30-default-rtdb.firebaseio.com/DadosClientes.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const dataArray = Object.values(data);
      for (let i = 0; i < dataArray.length; i++) {
        console.log(dataArray[i].Email);
        if (dataArray[i].Email === form.email) {
          if (dataArray[i].Senha === form.password) {
            console.log("Senha correta");
            return // colocar aqui o que caraios vao quere faze quando a senha estiver correta
            window.location("ssasas")
          }
        }
      }
    });
  }

  return (

    <Main>
    <Frase_inicial className='Frase_inicial'>De volta ao Health Guardian!</Frase_inicial>
    <Login_>
    <Form onSubmit={handleSubmit} style={{width:"30%"}}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="email" placeholder="Digite seu email" name="email" value={form.email} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Digite sua senha" name="password" value={form.password} onChange={handleChange} />
      </Form.Group>
      <Form.Control className="botao" type="submit" value="Submit"  style={{margin:"0 auto", width:"50%"}}/>
    </Form>
    </Login_>
    </Main>
  );
}

export default Login;