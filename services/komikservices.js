async function createKomik(database, komikData) {
    const { title, description, author, imageType, imageName, imageData } = komikData;


    if (!title || !description || !author) {
    throw new Error('Title, description, dan author wajib diisi');
    }


    const newKomik = await database.Komik.create({
    title,
    description,
    author,
    imageType: imageType || null,
    imageName: imageName || null,
    imageData: imageData || null,
    });

return newKomik;
}