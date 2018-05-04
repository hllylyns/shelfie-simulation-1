
module.exports = {
    read: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_inventory()
            .then(() => res.status(200).send(inventory))
            .catch(() => res.status(500).send('error'));
    },
    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const { name, image_url, price } = req.body;
        console.log(name, image_url, price);

        dbInstance.create_product()
            .then(() => res.status(200).send('all good'))
            .catch(() => res.status(500).send());
    }
};