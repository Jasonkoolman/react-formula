const basic = `<Field
  name="lastName"
  label="Achternaam"
  info="Vul je achternaam in."
  control={control}
  render={Input}
  rules={{ required: true }}
/>`;

const recreate = `<Field.Container hasError={!!errors.firstName}>
  <Field.Label htmlFor="first-name" asterix={true}>
    Voornaam
  </Field.Label>
  <Control
    name="firstName"
    id="first-name"
    control={control}
    render={Input}
    rules={{ required: true }}
  />
  <Field.Info>Vul je voornaam in.</Field.Info>
  <Field.Error name="firstName" errors={errors} />
</Field.Container>`;

export default {
  basic,
  recreate,
};
