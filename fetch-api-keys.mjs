import https from 'https';

const token = 'ik_f6d3fcc754494c93d4785b77179b94ce';
const projectId = '128f15dc-662f-4c97-b1c5-872d5ac50661';

const options = {
  hostname: 'api.insforge.dev',
  port: 443,
  path: `/api/v1/projects/${projectId}/api-keys`,
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(data);
  });
});

req.on('error', error => {
  console.error(error);
});

req.end();
