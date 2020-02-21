const appVersion = {
  appVersion: "V0.0.1"
};

const debugs = {
  NODE_ENV: "development",
  LocalUrl: "https://cnodejs.org/api/v1",
};

const test = {
  NODE_ENV: "test",
  LocalUrl: "/mock",
}

const production = {
  NODE_ENV: "production",
  LocalUrl: "http://dhse.5iyuntong.com/",
};

let INFO = {};
if (process.env.NODE_ENV === "development") {
  INFO = { ...debugs, ...appVersion };
}
if (process.env.NODE_ENV === "test") {
  INFO = { ...test, ...appVersion };
}
if (process.env.NODE_ENV === "production") {
  INFO = { ...production, ...appVersion };
}
export default INFO;
