import React from 'react';
import { Input, Heading, Center } from "native-base";
import Button from '../components/button';

const Write = () => {
  return (
    <>
      <Center 
        flex={1}
        bg="#FFEEDC"
      >
      <Input placeholder='Input'/>
      <Input placeholder='Input'/>
      <Input placeholder='Input'/>
      <Input placeholder='Input'/>
        {/* <Heading>kontol</Heading> */}
        <Button onPress/>
      </Center>
    </>
  );
};



export default Write;
