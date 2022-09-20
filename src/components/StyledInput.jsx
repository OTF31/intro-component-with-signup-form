import { FormControl, Image, Input } from "native-base";
import { useController } from "react-hook-form";

import iconError from "../assets/icon-error.svg";

const StyledInput = ({ control, name, placeholder, rules }) => {
  const {
    field: { value, onChange },
    formState: { errors },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <FormControl isInvalid={name in errors}>
      <Input
        value={value}
        onChangeText={onChange}
        size={{ base: "md", lg: "lg" }}
        py={4}
        placeholder={placeholder}
        _input={{ ml: 4, fontWeight: 600, color: "DarkBlue" }}
        rightElement={
          <Image
            source={{ uri: iconError }}
            size={6}
            alt={"icon-error"}
            mr={4}
            display={name in errors ? "block" : "none"}
          />
        }
      />
      <FormControl.ErrorMessage
        alignSelf={"flex-end"}
        _text={{ fontWeight: 400, fontStyle: "italic" }}
      >
        {errors[name]?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};

export default StyledInput;
