const InputTypes = [
  {
    name: "Text Input",
    type: "TextInput",
    properties: {
      placeholder: "Default Placeholder for TextInput",
      label: "Default Label for TextInput",
      required: false,
    },
  },
  {
    name: "Drop down",
    type: "DropDown",
    properties: {
      label: "Default Label for DropDown",
      placeholder: "Default placeholder for DropDown",
      required: false,
      options: ["Hello", "one", "three"],
    },
  },
  {
    name: "Radio Button",
    type: "RadioBtn",
    properties: {
      label: "Default question label for RadioButton",
      required: false,
      options: ["Yellow", "Green", "Orange"],
    },
  },
];

export { InputTypes };
