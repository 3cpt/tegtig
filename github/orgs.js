const { octokitObj } = require('./auth');

const getOrg = (org) => {
    octokitObj.orgs.get({
        org
    })
        .then(data => {
            console.info(data);
        })
        .catch(err => {
            if (err.status == 404) {
                console.info(org + ' not found');
            }
            else {
                console.info(err);
            }
        });
};

module.exports = {
    getOrg
};
