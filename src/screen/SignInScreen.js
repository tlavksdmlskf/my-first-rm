import { StyleSheet, Image, View, Keyboard } from "react-native";
import Input, {
  ReturnKeyTypes,
  KeyboardTypes,
  IconNames,
  keyboardTypes,
} from "../components/Input";
import { useState, useRef, useEffect } from "react";
import Button from "../components/Button";
import { signIn } from "../api/auth";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   console.log('always: ', email, password)
  // });

  // useEffect(() => {
  //   console.log('first rendering: ', email, password)
  // }, []);

  // useEffect(() => {
  //   console.log('only email: ', email, password)
  // }, [email]);

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = async () => {
    if (!isLoading && !disabled) {
      try {
        keyboard.dimiss();
        const data = await signIn(email, password);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    // signIn(email, password)
    // .then((data) => console.log(data))
    // .catch((error) => console.log(error));
  };

  console.log(email, password);
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/main.png")} style={styles.image} />
      <Input
        title={"이메일"}
        placeholder="test@email.com"
        keyboardType={KeyboardTypes.EMAIL}
        retrunKeyType={ReturnKeyTypes.NEXT}
        value={email}
        onChangeText={(email) => setEmail(email.trim())}
        iconName={IconNames.EMAIL}
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <Input
        title={"비밀번호"}
        ref={passwordRef}
        returnKeyType={ReturnKeyTypes.DONE}
        secureTextEntry
        value={password}
        onChangeText={(password) => setPassword(password.trim())}
        iconName={IconNames.PASSWORD}
        onSubmitEditing={onSubmit}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="로그인"
          onPress={onSubmit}
          disabled={disabled}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SignInScreen;
