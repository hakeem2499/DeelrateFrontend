import { createClient } from '@/prismicio';
import React from 'react'
import { AnimatedHeader } from './HomeHeader';



async function  DefaultHeader() {
  const client = createClient();
  const settings = await client.getSingle('settings');
  return (
    <AnimatedHeader settings={settings}/>
  )
}

export default DefaultHeader