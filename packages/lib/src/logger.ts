import { Logger } from "tslog";

const isProduction = process.env.NODE_ENV === "production";

const logger = new Logger({
  name: "AppLogger", // optional name for the logger
  type: isProduction ? "json" : "pretty", // 'pretty' for dev, 'json' for prod

  minLevel: isProduction ? 3 : 1, // 3 = info, 1 = trace

  maskValuesOfKeys: ["password", "token", "secret"], // hide sensitive info

  hideLogPositionForProduction: true, // omit file path in prod

  prettyLogTimeZone: isProduction ? "UTC" : "local",
  stylePrettyLogs: true,

  prettyLogTemplate: "{{hh}}:{{MM}}:{{ss}} [{{logLevelName}}]",

  prettyErrorTemplate:
    "\n{{errorName}} {{errorMessage}}\nerror stack:\n{{errorStack}}",

  prettyLogStyles: {
    logLevelName: {
        info: ["green", "bold"],
        error: ["red", "bold"],
        debug: ["blue", "italic"],
        warn: ["yellow", "underline"],
    },
    dateIsoStr: ["gray"],
    name: ["magenta"],
  },
});

export default logger;
