const { octokitObj } = require('./auth');

const getUser = (username) => {
    octokitObj.users.getByUsername({
        username
    })
        .then(data => {
            console.info(data.data);
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

const getUserIdentifier = (username) => {
    octokitObj.users.getByUsername({
        username
    })
        .then(data => {
            console.info(data.data.id);
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
    getUser,
    getUserIdentifier
};
