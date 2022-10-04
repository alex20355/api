module.exports = (app) => {
  app.get('/', (req, res) => {
  res.send(`<p>to use this api: </p>
    <ul> <li>recherche globale: localhost:8000/api/findAll </li>
    <li> recherche unitaire: localhost:8000/api/find/:id </li>
    <li> supprésion unitaire: localhost:8000/api/del/:id </li>
    <li> update unitaire: localhost:8000/api/update/:id </li>
    <li> create: localhost:8000/api/add/ </li> </ul>`)
})
}