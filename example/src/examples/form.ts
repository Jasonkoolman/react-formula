const basic = `<Form onSubmit={handleSubmit}>
  <Field
    name="username"
    label="Username"
    render={Input}
    rules={{ required: true }}
  />
  <Field
    name="password"
    label="Password"
    render={Input}
    type="password"
    rules={{ required: true }}
  />
  <button type="submit">Login</button>
</Form>`;

export default {
  basic,
};
