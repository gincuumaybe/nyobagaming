// import React from 'react';
// import { Input, Heading, Center } from "native-base";
// import Button from '../components/button';

// const Write = () => {
//   return (
//     <>
//       <Center 
//         flex={1}
//         bg="#FFEEDC"
//       >
//       <Input placeholder='Input'/>
//       <Input placeholder='Input'/>
//       <Input placeholder='Input'/>
//       <Input placeholder='Input'/>
//         {/* <Heading>kontol</Heading> */}
//         <Button onPress/>
//       </Center>
//     </>
//   );
// };



// export default Write;


import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
import { View,Text, TextInput, Button, Container, Content, Form, Item, Input, Label } from 'native-base';

const MyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // You can handle form submission here, for example, send the data to an API
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <Container>
      <Content>
        <Form>
          <Item stackedLabel>
            <Label>Name</Label>
            <Input
              onChangeText={(text) => setName(text)}
              value={name}
            />
          </Item>
          <Item stackedLabel>
            <Label>Email</Label>
            <Input
              onChangeText={(text) => setEmail(text)}
              value={email}
              keyboardType="email-address"
            />
          </Item>
        </Form>

        <Button
          title="Submit"
          onPress={handleSubmit}
          disabled={!name || !email}
        />
      </Content>
    </Container>
  );
};

export default MyForm;
