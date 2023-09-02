import React, { useEffect, useCallback, useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { useForm, SubmitHandler } from "react-hook-form";
import { supabase } from "../../../src/store/supabase";

type SignUpFormValues = {
  name: string;
  password: string;
};

const SignUp = () => {
  const { register, handleSubmit, setValue } =
    useForm<SignUpFormValues>({
      defaultValues: {
        name: "",
        password: "",
      },
    });
  const [isRegistered, setIsRegistered] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit: SubmitHandler<SignUpFormValues> = useCallback(
    async (formData) => {
      const { data, error } = await supabase.from("users").insert({
        name: formData.name,
        password: formData.password,
      });
      if (!error && !data) {
        setIsRegistered(true);
        setIsError(false);
      } else {
        setIsRegistered(false);
        setIsError(true);
      }
    },
    []
  );

  const onChangeField = useCallback(
    (fieldName: keyof SignUpFormValues) => (fieldValue: string) => {
      setValue(fieldName, fieldValue);
    },
    []
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Registration</Text>
      <TextInput
        {...register("name")}
        style={styles.input}
        placeholder="Name"
        onChangeText={onChangeField("name")}
      />
      <TextInput
        {...register("password")}
        style={styles.input}
        secureTextEntry
        autoComplete="password"
        placeholder="Password"
        onChangeText={onChangeField("password")}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      {isRegistered && (
        <Text style={styles.successText}>Registration successful!</Text>
      )}
      {isError && <Text style={styles.errorText}>Registration failed</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20, // Increased margin between boxes
    width: "40%", // Shortened width
  },
  button: {
    padding: 50, // Increased button size
  },
  successText: {
    color: "green",
    marginTop: 10,
    fontSize: 17,
  },
  errorText: {
    color: "red",
    marginTop: 10,
    fontSize: 17,
  },
});

export default SignUp;
