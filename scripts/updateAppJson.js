const fs = require("fs");
const configPath = "./app.json";
let config = JSON.parse(fs.readFileSync(configPath, "utf-8"));

config.expo.icon = "./assets/vibetz-icon.png";
config.expo.splash = {
  image: "./assets/splash.png",
  resizeMode: "contain",
  backgroundColor: "#ffffff"
};

fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
console.log("✅ Updated app icon & splash in app.json.");
