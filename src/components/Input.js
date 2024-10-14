import { StyleSheet, Text, TextInput, View } from "react-native";
import PropTypes from "prop-types";
import { BLACK, GRAY, PRIMARY } from "../colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState, forwardRef } from "react";

export const keyboardTypes = {
  DEFAULT: "default",
  EMAIL: "email-address",
};

export const ReturnKeyTypes = {
  DONE: "done",
  NEXT: "next",
};

export const IconNames = {
  EMAIL: "email",
  PASSWORD: "lock",
};

const Input = ({ title, placeholder, value, iconName, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          isFocused && styles.focusedTitle,
          isFocused && styles.hasValueTitle,
        ]}
      >
        {title}
      </Text>
      <View>
        <TextInput
          {...props}
          ref={ref}
          style={[
            styles.input,
            isFocused && stules.focusedInput,
            values && styles.hasValueInput,
          ]}
          placeholder={placeholder ?? title}
          placeholderTextColor={GRAY.DEFAULT}
          autoapitalize="none"
          autoCorrect={false}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name={iconName}
            size={20}
            color={(() => {
              switch (true) {
                case isFocused:
                  return PRIMARY.DEFAULT;
                case !!value:
                  return BLACK;
                default:
                  return GRAY.DEFAULT;
              }
            })()}
          />
        </View>
      </View>
    </View>
  );
};

Input.defaultProps = {
  keyboardType: keyboardTypes.DEFAULT,
  returnKeyType: ReturnKeyTypes.DONE,
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.oneOf(Object.values(keyboardTypes)),
  returnKeyType: PropTypes.oneOf(Object.values(ReturnKeyTypes)),
  secureTextEntry: PropTypes.bool,
  value: PropTypes.string,
  iconName: PropTypes.oneOf(Object.values(IconNames)),
};

const styles = StyleSheet.create({
  hasValueTitle: {},
  hasValueInput: {
    borderColor: BLACK,
    color: BLACK,
  },
  container: {
    width: "100%",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 42,
    paddingLeft: 30,
  },
  icon: {
    position: "absolute",
    left: 8,
    height: "100%",
    justifyContent: "center",
  },
});

export default Input;
