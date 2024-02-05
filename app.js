const express = require('express');
const router = express();
const port = 3000;

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/auth', (req, res) => {
    res.send({ hello: 'World!' });
});

router.listen(port, () => console.log(`App listening on port ${port}`));