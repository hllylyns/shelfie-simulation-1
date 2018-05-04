let inventory = [];

module.exports = {
    read: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.get_inventory()
            .then(inventory => res.status(200).send(inventory))
            .catch(() => res.status(500).send('error'));
    },
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { name, image_url, price } = req.body;
        inventory.push({name, image_url, price});
        console.log(inventory);

        dbInstance.create_product([name, image_url, price])
            .then(() => res.status(200).send('all good'))
            .catch(() => res.status(500).send());
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {item_id} = req;

        dbInstance.delete_product()
            .then(()=> res.status(200).send('all good'))
            .catch(()=>res.status(500).send())
    }
};