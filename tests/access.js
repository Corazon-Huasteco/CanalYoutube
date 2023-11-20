const { Selector } = require("testcafe");
                                   
fixture`Testiando el acceso`.page("https://canal-youtube.vercel.app/acceso");


test('Validar el acceso', async (t) =>{
    await t
    .expect(Selector('title').innerText).notContains('404');
});