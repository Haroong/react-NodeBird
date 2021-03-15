import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import FollowerList from '../components/FollowerList';

const Profile = () => {
  const followerList = [
    { nickname: '강주한' },
    { nickname: '장재영' },
    { nickname: '글렌 맥퀸' },
  ];
  const followingList = [
    { nickname: '하선우' },
    { nickname: '윤구' },
    { nickname: '쪼람쥐' },
  ];

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header='팔로잉 목록' data={followingList} />
        <FollowerList header='팔로워 목록' data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
