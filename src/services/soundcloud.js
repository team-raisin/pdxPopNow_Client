const request = require('superagent');

export const getSoundCloudId = url => request.get(url)
  .then(res => {
    return res.text.match(/users\:(?<id>\d+)/).groups.id;
  });
