const config = {
  enabled: true,
  appearance: {
    font: "Lexend Deca",
    font_size: 16,
    font_weight: 400,
  },
  birthday: {
    enabled: true,
    date: "2000-01-01",
    message: "Happy {nth} Birthday, {name}!", // todo: investigate translations
  },
  name: "default",
  events: [
    {
      // todo: move this to defaults, so you can add custom like people's birthdays etc
      name: "christmas",
      enabled: true,
    },
  ],
  times: { // todo: defaults
    morning: "11:59:59",
    afternoon: "17:59:59",
    evening: "23:59:59",
    night: "05:59:59",
  },
};

export default config;
// do we want to call it default.config, .default or .config, or something else?

