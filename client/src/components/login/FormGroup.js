import { useState } from 'react';
import InputGroup from "./InputGroup";
import { Container } from "./styles";
import Input from './Input';
import useErrors from '../../hooks/useHooks';

export default function FormGroup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    setError, removeError, getErrorMessageByFieldName, errors,
  } = useErrors();

  function handleChangeEmail(e) {
    setEmail(e.target.value);

    if(!e.target.value) {
      setError({ field: 'email', message: 'E-mail é obrigatório'});
    } else {
      removeError('email');
    }
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);

    if(!e.target.value) {
      setError({ field: 'password', message: 'Senha é obrigatório'});
    } else {
      removeError('password');
    }
  }

  return (
    <Container>
      <InputGroup error={getErrorMessageByFieldName('email')}>
        <Input
        error={getErrorMessageByFieldName('email')}
        placeholder='E-mail' 
        value={email}
        type='email'
        onChange={(e) => handleChangeEmail(e)}
        />
      </InputGroup>
      <InputGroup error={getErrorMessageByFieldName('password')}>
      <Input
        error={getErrorMessageByFieldName('password')}
        placeholder='Senha' 
        value={password}
        type='password'
        onChange={(e) => handleChangePassword(e)}
        />
      </InputGroup>
    </Container>
  )
}