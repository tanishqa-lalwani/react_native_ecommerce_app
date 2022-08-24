import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "  http://1a3118aa6df5.ngrok.io/api",
  },
  staging: {
    apiUrl: "  http://1a3118aa6df5.ngrok.io/api",
  },
  prod: {
    apiUrl: "  http://1a3118aa6df5.ngrok.io/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
