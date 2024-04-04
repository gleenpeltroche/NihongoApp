import React from 'react';
import { Button, Icon } from '@ui-kitten/components';

interface Props {
  iconName: string;
  runFunctionOnPress: () => void;
  marginRight?: number;
}

const HeaderButton = ({iconName, runFunctionOnPress, marginRight}: Props) => {
  return (
    <Button 
      accessoryRight={<Icon name={iconName}/>}
      size='medium'
      style={{paddingHorizontal: 16, marginRight}}
      onPress={runFunctionOnPress}
    ></Button>
  )
}

export default HeaderButton;