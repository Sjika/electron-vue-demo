module.exports = {
  pluginOptions: {
    electronBuilder: {
      chainWebpackMainProcess: config => {
        config.entryPoints.set("client", config.entry("background")).delete("background");
      },
      mainProcessFile: "./src/client.js"
    }
  }
} 