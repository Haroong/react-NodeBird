import React, { useCallback } from 'react';
import useInput from '../hooks/useInput';
import { Input, Form, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const LoginWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch('');

  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(loginAction(id, password));
  }, [id, password]);

  // 리액트의 리렌더링: return 내에서 이전과 달라진 부분만 확인하여 그것만 리렌더링
  // return 부분이 virtual DOM
  return (
    <LoginWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor='user-id'>아이디</label>
        <br />
        <Input name='user-id' value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor='user-password'>비밀번호</label>
        <br />
        <Input
          name='user-password'
          type='password'
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type='primary' htmlType='submit' loading={false}>
          로그인
        </Button>
        <Link href='/signup'>
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </LoginWrapper>
  );
};

export default LoginForm;
