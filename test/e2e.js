import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `http://127.0.0.1:5500/demo/`;
    
test(`New Test`, async t => {
    await t
        .click(Selector('#editor div').withText('console.log(\"Hello world!\");'))    
        .pressKey('enter')
        .pressKey('enter')
        .pressKey('enter');
});