const { octokitObj } = require('./gbauth');

const getUser = (username) => {
    octokitObj.users.getByUsername({
        username
    })
        .then(data => {
            console.info(data);
        })
        .catch(err => {
            if (err.status == 404) {
                console.info(username + ' not found');
            }
            else {
                console.info(err);
            }
        });
};

module.exports = {
    getUser
};
