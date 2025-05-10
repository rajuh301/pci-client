"use client";

import { Input } from "@nextui-org/input";
import { useFormContext, FieldErrors } from "react-hook-form";
import { IInput } from "@/src/types";

interface IProps extends IInput {}

export default function FXInput({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors?.[name]?.message;

  return (
    <Input
      {...register(name)}
      errorMessage={errorMessage ? String(errorMessage) : ""}
      isInvalid={!!errors?.[name]}
      label={label}
      required={required}
      size={size}
      type={type}
      variant={variant}
    />
  );
}
