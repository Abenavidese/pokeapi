const app = import(`./dist/poke-api1/server/server.mjs`).then(server => server.app());
exports.handle = (req,res) => app.then(it => it(req,res));
