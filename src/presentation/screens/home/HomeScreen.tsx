import React from 'react';
import { Layout, Text } from '@ui-kitten/components';

export const HomeScreen = () => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: "100%"}}>
      <Layout style={{
        flexDirection: "row",
      }}>
        <Text category='h1'>{"こんにちは世界!"}</Text>
      </Layout>
    </Layout>
  )
}