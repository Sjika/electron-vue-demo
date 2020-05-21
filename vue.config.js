module.exports = {
  pluginOptions: {
    electronBuilder: {
      chainWebpackMainProcess: config => {
        const _ = config.entryPoints.store.get("background");
        config.entryPoints.store.set("client", _);
        config.entryPoints.store.delete("background");
      },
      mainProcessFile: "./src/client.js"
    }
  }
} 