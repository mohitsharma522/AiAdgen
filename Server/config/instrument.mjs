import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://4bb621b7fab1b2c97b531826a3cdfb75@o4511483662303232.ingest.de.sentry.io/4511483674099792",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});