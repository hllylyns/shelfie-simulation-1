
module.exports = {
    read: ( req, res ) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_inventory()
            .then(() => res.status(200).send(inventory))
            .catch(() => res.status(500).send('error'));
        console.log(res.name);
      },
};