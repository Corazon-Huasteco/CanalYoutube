// const { Selector } = require("testcafe");

// fixture`Testiando el acceso`.page("https://canal-youtube.vercel.app/acceso");

// test('Validar el acceso', async (t) => {
//     const pageTitle = await Selector('title').innerText;
//     const is404 = pageTitle.includes('404');

//     await t
//         .expect(is404).notOk('Page should not be a 404 error');
// });

const { Selector } = require("testcafe");

fixture`Testiando el acceso`.page("https://canal-youtube.vercel.app/acceso");

test('Validar el acceso', async (t) => {
    const is404 = await Selector('.error-title').exists;

    await t
        .expect(is404).notOk('Page should not be a 404 error');
});
