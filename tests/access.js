const { Selector } = require("testcafe");

fixture`Testiando el acceso`.page("https://canal-youtube.vercel.app/acceso");


test('Validar el acceso', async (t) =>{
    const button = await Selector('.MuiButton-contained.MuiButton-containedPrimary.MuiButton-fullWidth').withText('ENTRAR');;
    const title = await Selector('.MuiTypography-root.MuiTypography-h5.MuiTypography-gutterBottom.css-adrpgk').withText('Hola, Bienvenido');

    await t
    .typeText('[name="email"]',"eduazuara0@gmail.com")
    .typeText('[name="password"]', "Eduardo18@")
    .click(button)
    .expect(t.eval(() => window.location.href)).eql('https://canal-youtube.vercel.app/user/administrador');
});