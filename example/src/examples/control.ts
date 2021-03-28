const native = `<Control
  name="name"
  defaultValue=""
  control={control}
  render={({ inputRef, ...rest }) => (
    <input ref={inputRef} {...rest}>
  }
/>`;

const component = `<Control
  name="email"
  defaultValue=""
  control={control}
  render={Input}
/>`;

const validation = `<Control
  name="age"
  defaultValue=""
  control={control}
  render={Input}
  type="number"
  rules={{
    required: true,
    min: 16,
    max: 99
  }}
/>`;

const select = `<Control
  name="speciality"
  defaultValue="cooking"
  control={control}
  rules={required: true}
  render={(props) => (
    <Select {...props}>
      <option value="coding">Coding</option>
      <option value="cooking">Cooking</option>
      <option value="coffee">Drinking cofee</option>
      <option value="other">Other</option>
    </Select>
  )}
/>`;

export default {
  native,
  component,
  validation,
  select,
};
