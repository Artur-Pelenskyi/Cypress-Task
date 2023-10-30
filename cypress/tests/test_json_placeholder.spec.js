describe('Check each json placeholder response', () => {
    for(let postNumber = 1; postNumber <= 100; postNumber++) {
        it(`Check response No ${postNumber} title length is more than 25 characters`, () => {
            cy.request({
                method: 'GET',
                url: `https://jsonplaceholder.typicode.com/posts/${postNumber}`
            }).then((response) => {
                cy.log('Response:', response.body);
                expect(response.body.title.length > 25).to.be.true;
            });
        });
    }
});