"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef, useEffect } from "react";

interface SelectInputProps {
  name: string;
  value: string | number;
  label?: string;
  options: Option[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: string;
  labelStyle?: string;
  dropStyle?: string;
  placeholder?: string;
}

interface Option {
  value: string | number;
  label: string;
}

interface formFiledProps {
  value?: string;
  placeholder?: string;
  title?: string;
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: string;
}

type CheckboxGroupProps = {
  options: string[];
  value: string | string[];
  onChange: (value: string | string[]) => void;
  multiple?: boolean;
  className?: string;
};

const FormField: React.FC<formFiledProps> = ({
  value,
  placeholder,
  title,
  handleInputChange,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <p>{title}</p>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        className="px-4 py-2 border-2 border-gray-100 rounded-lg"
      />
    </div>
  );
};

export default FormField;

export const UnderlineFormField: React.FC<formFiledProps> = ({
  value,
  placeholder,
  title,
  handleInputChange,
  style,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {title && <label className="text-sm font-medium">{title}</label>}
      <div
        className={`w-full border-b-2 border-gray-200  group ${style} focus-within:border-green-500 transition p-1`}
      >
        <div className="h-full bg-gray-100 rounded-md px-3">
          <input
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={handleInputChange}
            className="outline-0 bg-transparent w-full text-gray-800 placeholder:text-gray-800 h-full"
          />
        </div>
      </div>
    </div>
  );
};

export const Input = ({
  value,
  title,
  placeholder,
  handleChangeText,
  type,
  isError,
  max,
}: {
  value: string;
  placeholder: string;
  handleChangeText?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  title?: string;
  type?: string;
  isError?: boolean;
  max?: number;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const borderColor = isFocused
    ? "border-green-500"
    : isError
    ? "border-red-500"
    : "border-gray-200";

  return (
    <div>
      {title && (
        <label className="text-gray-800 ml-4 text-sm mb-2">{title}</label>
      )}
      <div className={`p-1 h-12 bg-white  rounded-xl border-2  ${borderColor}`}>
        <div className="text-base flex flex-row items-center px-4 justify-start h-full w-full rounded-lg bg-gray-100">
          <input
            className="flex-1 text-base outline-0 bg-transparent border-0 placeholder:text-gray-500 "
            placeholder={placeholder}
            value={value}
            onChange={handleChangeText}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            type={showPassword ? "text" : type}
            maxLength={max}
          />

          {placeholder === "Password" && (
            <button
              className="ml-2"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(!showPassword);
              }}
            >
              {!showPassword ? (
                <LuEye className="size-5 text-gray-500" />
              ) : (
                <LuEyeClosed className="size-5 text-gray-500" />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  value,
  onChange,
  multiple = false,
  className = "",
}) => {
  const handleChange = (option: string) => {
    if (multiple) {
      const current = value as string[];
      if (current.includes(option)) {
        onChange(current.filter((v) => v !== option));
      } else {
        onChange([...current, option]);
      }
    } else {
      onChange(option);
    }
  };

  const isChecked = (option: string) => {
    return multiple ? (value as string[]).includes(option) : value === option;
  };

  return (
    <div className={`flex gap-6 ${className}`}>
      {options.map((option) => {
        const checked = isChecked(option);

        return (
          <label
            key={option}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={() => handleChange(option)}
              className="hidden"
            />

            {/* Custom checkbox */}
            <span
              className={`w-5 h-5 flex items-center justify-center rounded border-2 transition-all duration-200
                ${
                  checked
                    ? "bg-green-500 border-green-500"
                    : "border-gray-400 hover:border-green-400"
                }`}
            >
              {checked && (
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              )}
            </span>

            <span className="text-gray-800 capitalize">{option}</span>
          </label>
        );
      })}
    </div>
  );
};

export const TextArea = ({
  value,
  title,
  placeholder,
  handleChangeText,
  isError,
  max,
  rows = 4,
}: {
  value: string;
  placeholder: string;
  handleChangeText?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  title?: string;
  isError?: boolean;
  max?: number;
  rows?: number;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = isFocused
    ? "border-green-500"
    : isError
    ? "border-red-500"
    : "border-gray-200";

  return (
    <div>
      {title && (
        <label className="text-gray-800 ml-4 text-sm mb-2 block">{title}</label>
      )}

      <div className={`p-1 bg-white rounded-xl border-2 ${borderColor}`}>
        <div className="text-base flex px-4 py-2 w-full rounded-lg bg-gray-100">
          <textarea
            className="w-full text-base outline-0 bg-transparent border-0 placeholder:text-gray-500 resize-none"
            placeholder={placeholder}
            value={value}
            onChange={handleChangeText}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            maxLength={max}
            rows={rows}
          />
        </div>
      </div>
    </div>
  );
};

export const SelectInput: React.FC<SelectInputProps> = ({
  name,
  value,
  label,
  options,
  onChange,
  style,
  labelStyle,
  placeholder,
  dropStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  const handleOptionClick = (val: string) => {
    const event = {
      target: { name, value: val },
    } as React.ChangeEvent<HTMLSelectElement>;
    onChange(event);
    setIsOpen(false);
  };

  const selectedOption = options.find(
    (opt) => opt.value.toString() === value?.toString()
  );

  const selectedLabel = selectedOption?.label || placeholder || "Select";

  return (
    <div className="relative w-full" ref={selectRef}>
      {label && (
        <label
          className={`block text-base font-medium text-gray-800 ${labelStyle}`}
        >
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full border-2 border-gray-200 text-gray-800  rounded-lg focus:outline-none ${style} p-1`}
      >
        <div className="w-full flex justify-between items-center h-full bg-gray-100 rounded-md pl-5 pr-3">
          <span className="text-gray-800">{selectedLabel}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute z-50 w-full mt-3 bg-gray-100 rounded-lg shadow-md overflow-hidden pt-4 pb-2 ${dropStyle}`}
          >
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionClick(option.value.toString())}
                className="px-4 py-2 hover:bg-gray-100  cursor-pointer text-sm"
              >
                {option.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
