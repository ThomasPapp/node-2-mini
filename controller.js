function getPlanes(req, res) {
    const db = req.app.get('db');
    db.get_planes([ 25 ])
    .then(planes => res.status(200).json(planes))
    .catch(err => console.log(err) || res.status(500).send(err));
}

module.exports = {
    getPlanes
}