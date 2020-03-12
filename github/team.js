const { octokitObj } = require('./auth');

const getTeamMembers = (org, team_slug) => {
    octokitObj.teams.listMembersInOrg({
        org,
        team_slug
    })
        .then(data => {
            console.info(data.data);
        })
        .catch(err => {
            console.info(err);
        });
};

module.exports = {
    getTeamMembers
};
