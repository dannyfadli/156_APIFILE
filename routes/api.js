// routes/api.js (diperbaiki)
const express = require('express');
const router = express.Router();
const multer = require('multer');
const komikController = require('../controllers/komikController');
const upload = multer({ storage: multer.memoryStorage() });

// pastikan nama fungsi sesuai dengan yang diekspor oleh controller
router.get('/komiks', komikController.getAllKomik);
router.get('/komiks/:id', komikController.getKomikById);
router.post('/komiks', upload.single('gambar'), komikController.createKomik);
router.put('/komiks/:id', upload.single('gambar'), komikController.updateKomik);
router.delete('/komiks/:id', komikController.deleteKomik);

module.exports = router;
