// import { Heading, Center } from "native-base";

// const Calculator = () => {
//   return (
//     <>
//       <Center 
//         flex={1}
//         bg="#FFEEDC"
//       >
//         <Heading>Calculator</Heading>
//       </Center>
//     </>
//   );
// };

// export default Calculator;

import React, { useState } from 'react';
import { Container, Content, Form, Item, Input, Button, Text } from 'native-base';

const Calculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  return (
    <Container>
      <Content padder>
        <Form>
          <Item>
            <Input
              placeholder="Weight (kg)"
              keyboardType="numeric"
              value={weight}
              onChangeText={(text) => setWeight(text)}
            />
          </Item>
          <Item>
            <Input
              placeholder="Height (cm)"
              keyboardType="numeric"
              value={height}
              onChangeText={(text) => setHeight(text)}
            />
          </Item>
          <Button onPress={calculateBMI} full>
            <Text>Calculate BMI</Text>
          </Button>
          {bmi !== null && (
            <Text style={{ marginTop: 20 }}>
              Your BMI is: {bmi}
            </Text>
          )}
        </Form>
      </Content>
    </Container>
  );
};

export default Calculator;