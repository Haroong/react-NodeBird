import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'; // HTML head 수정하고 싶을때
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore';

// 모든 페이지에서 공통인 부분을 작성
const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
