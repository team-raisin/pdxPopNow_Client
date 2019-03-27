const request = (path, method, body) => {
  return fetch(`${process.env.API_URL}${path}`, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: {
      'Content-Type':'application/json'
    }
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const get = path => request(path, 'GET');
export const post = (path, body) => request(path, 'POST', body);
