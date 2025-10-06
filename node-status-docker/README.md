# Node Status Docker

## Starting the Application
```bash
docker build -t node-status-app:1.0 .
docker run -d --name node-status-app -p 3000:3000 node-status-app:1.0
## Reflection
Docker containers share the host OS kernel and package only the application and its dependencies, so they’re lightweight and start quickly. Virtual machines include a full guest OS, which makes them heavier and slower to boot. For this Node.js app, containers provide a consistent, reproducible environment across laptops and CI/CD with minimal overhead, which is why teams commonly prefer Docker over VMs.
