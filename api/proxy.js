import fetch from 'node-fetch';

// api/proxy.js

export default async (req, res) => {
  try {
    const { type, path } = req.query;  // Extract `type` and `path` from the query string

    if (!type || !path) {
      return res.status(400).json({ error: 'Type and path are required' });
    }

    const apiUrls = {
      'restaurants': 'https://www.swiggy.com/dapi/restaurants/list/v5',
      'menu': 'https://www.swiggy.com/dapi/menu/pl/v1',
      'cdn': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/',
    };

    const apiUrl = apiUrls[type];
    if (!apiUrl) {
      return res.status(404).json({ error: 'API type not found' });
    }

    const targetUrl = apiUrl + '/' + path;

    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        'Content-Type': req.headers['content-type'] || 'application/json',
        'Authorization': req.headers['authorization'] || '',  // Optional header
      },
      body: req.method === 'POST' || req.method === 'PUT' ? JSON.stringify(req.body) : null,
    });

    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*');  // Update '*' to your domain for better security
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    res.status(response.status).json(data);
  } catch (error) {
    console.error('Error occurred while proxying request:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
