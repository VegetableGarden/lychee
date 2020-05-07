let lastBuilt = 0;
module.exports = {
  config: ({app}) => {
    app.get('/fake-hmr', (req, res) => {
      res.json({lastBuilt})
    })
  },
  built: () => {
    lastBuilt = Date.now();
    console.log(`hmr ready at ${lastBuilt}`)
  }
}