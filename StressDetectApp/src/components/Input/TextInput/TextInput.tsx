import React from 'react';
import { KeyboardTypeOptions } from 'react-native';
import { TextInput as NativeTextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from '../../../theme';
import styles from './TextInput.styles';

interface TextInputProps {
  placeholderText: string;
  val: string | undefined;
  keyboardType: KeyboardTypeOptions;
  func: (text: string) => void;
  secureText: boolean;
  iconName: string;
}

const TextInput = ({
  placeholderText,
  val,
  keyboardType,
  func,
  secureText,
  iconName,
}: TextInputProps) => {
  const { colors } = useTheme;
  return (
    <NativeTextInput
      mode="outlined"
      label={placeholderText}
      value={val}
      keyboardType={keyboardType}
      secureTextEntry={secureText}
      style={styles.input}
      theme={{
        colors: {
          background: colors.textInput,
          text: colors.text,
          primary: '#7999FD',
          placeholder: colors.border,
        },
        roundness: 8,
      }}
      onChangeText={func}
      left={
        <NativeTextInput.Icon
          name={() => <Icon name={iconName} color="#7999FD" size={styles.iconSize.height} />}
        />
      }
    />
  );
};

export default TextInput;
