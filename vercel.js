{
    "version": 2,
    "builds": [
      {
        "src": "api/proxy.js",
        "use": "@vercel/node"
      }
    ],
    "rewrites": [
      {
        "source": "/restaurants/(.*)",
        "destination": "/api/proxy?type=restaurants&path=$1"
      },
      {
        "source": "/menu/(.*)",
        "destination": "/api/proxy?type=menu&path=$1"
      },
      {
        "source": "/cdn/(.*)",
        "destination": "/api/proxy?type=cdn&path=$1"
      }
    ],
    "routes": [
      {
        "src": "/api/proxy",
        "dest": "/api/proxy.js"
      }
    ]
  }
  