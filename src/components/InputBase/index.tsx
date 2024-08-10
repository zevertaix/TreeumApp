/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, ForwardedRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Pressable,
  TextInputProps,
  StyleProp,
  ViewStyle,
  Text,
} from "react-native";
import OpenEyeSVG from "../../assets/icons/OpenEye";
import CloseEyeSVG from "../../assets/icons/CloseEye";

interface InputProps extends TextInputProps {
  value?: string;
  autofocus?: boolean;
  editable?: boolean;
  label?: string;
  placeholder?: string;
  customStyles?: StyleProp<ViewStyle>;
  withMarginBottom?: boolean | number;
  customParams?: TextInputProps;
  hidden?: boolean;
  blurOnSubmit?: boolean;
}

const InputBase = React.forwardRef<TextInput, InputProps>(
  (
    {
      value = "",
      autofocus = false,
      onChangeText = () => null,
      onFocus = () => null,
      onBlur = () => null,
      editable = true,
      label = "",
      placeholder = "",
      customStyles,
      withMarginBottom = false,
      customParams = {},
      hidden = false,
      blurOnSubmit = false,
    },
    ref: ForwardedRef<TextInput>
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHidden, setIsHidden] = useState(hidden);

    return (
      <View>
        <View style={styles.labelContainer}>
          {label && <Text style={styles.label}>{label}</Text>}
        </View>
        <View
          style={[
            typeof withMarginBottom === "number"
              ? { marginBottom: withMarginBottom }
              : withMarginBottom && styles.margin,
            { borderColor: "transparent", borderWidth: 2 },

            isFocused && [styles.focusedInput, { borderColor: "#04cf6f" }],
          ]}
        >
          <TextInput
            ref={ref}
            editable={editable}
            onBlur={(e) => {
              setIsFocused(false);
              // @ts-ignore
              onBlur(e.nativeEvent.text);
            }}
            onFocus={(e) => {
              setIsFocused(true);
              // @ts-ignore
              onFocus(e.nativeEvent.text);
            }}
            blurOnSubmit={blurOnSubmit}
            numberOfLines={4}
            placeholderTextColor={"#6B7180"}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            autoCapitalize="none"
            autoFocus={autofocus}
            style={[styles.input, customStyles]}
            secureTextEntry={isHidden}
            {...customParams}
          />

          {hidden && (
            <Pressable
              hitSlop={10}
              onPress={() => setIsHidden((prev) => !prev)}
              style={styles.hideShowInputBtn}
            >
              {isHidden ? <CloseEyeSVG /> : <OpenEyeSVG />}
            </Pressable>
          )}
        </View>
      </View>
    );
  }
);

export const styles = StyleSheet.create({
  input: {
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f3f8",
    color: "#040A2C",
    paddingHorizontal: 12,
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#efeef4",
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    color: "#363840",
    marginBottom: 6,
    fontSize: 16,
  },
  focusedInput: {
    borderRadius: 12,
    padding: 1,
  },
  icon: {
    position: "absolute",
    left: 14,
    top: 14,
    zIndex: 999,
  },
  margin: {
    marginBottom: 16,
  },
  hideShowInputBtn: {
    position: "absolute",
    right: 14,
    top: 14,
  },
});

export default InputBase;
