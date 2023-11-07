const InputTypes = [
  {
    name: "Text Input",
    type: "TextInput",
    properties: {
      placeholder: "Default Placeholder for TextInput",
      label: "Default Label for TextInput",
      required: true,
    },
  },
  {
    name: "Text Area",
    type: "TextArea",
    properties: {
      label: "Default Label for TextArea",
      placeholder: "Default label for Text Area",
      required: false,
    }
  },
  {
    name: "Drop down",
    type: "DropDown",
    properties: {
      label: "Default Label for DropDown",
      placeholder: "Default placeholder for DropDown",
      required: false,
      options: ["DropDown1", "DropDown2", "DropDown3"],
    },
  },
  {
    name: "Radio Button",
    type: "RadioButton",
    properties: {
      label: "Default question label for RadioButton",
      required: false,
      options: ["RadioOption1", "RadioOption2", "RadioOption3"],
    },
  },
  {
    name: "Check Boxes",
    type: "CheckBoxes",
    properties: {
      label: "Default label for Checkboxes",
      required: false,
      options: ["CheckBox1", "CheckBox2", "CheckBox3"]
    }
  }
];

export { InputTypes };
