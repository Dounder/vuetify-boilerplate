<p align="center">
  <a href="https://vuetifyjs.com/en/" target="blank"><img src="https://cdn.vuetifyjs.com/docs/images/brand-kit/v-logo-atom.svg" width="200" alt="Nest Logo" /></a>
</p>

# Vuetify Boilerplate + Pinia and Vue Router, and

🚀 This boilerplate project is a ready-to-use template that incorporates Pinia for state management, Vue Router for routing, and Vuetify as the UI framework.

## Features:

- **Vuetify Core**: Utilizing the capabilities of Vuetify, a Vue UI library with beautifully handcrafted Material Components to create visually engaging and functional interfaces.

- **Pinia for State Management**: Manage your application's state with the power and flexibility of Pinia, designed to work hand-in-hand with Vue's Composition API.

- **Vue Router**: Seamless navigation and SPA functionality using Vue Router, configurable to handle complex routing requirements.

- **Theme Customization**: Built-in support for light and dark themes, leveraging Vuetify's theme system.

- **Docker Integration**: The project includes a Dockerfile for containerization, making it easier to build, ship, and run the application in various environments.

### Getting Started

1. **Clone the Repository**: [Repo](https://github.com/Dounder/vuetify-boilerplate.git)

   ```bash
   git clone https://github.com/Dounder/vuetify-boilerplate.git
   ```

2. **Install dependencies**:

   ```bash
   yarn
   # or
   npm install
   ```

3. **Rename `.env.template` to `.env` and set environment variables to use**

4. **Run api in dev mode**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

5. **Open browser and navigate to [URL](http://localhost:9000)**

### Build and Run Docker Image

1. **Build Docker Image**

   ```bash
   docker build -t vuetify-boilerplate .
   ```

2. **Run Docker Image**

   ```bash
   # The image exposes port 80, so we map it to port 9000 on the host
   docker run -p 9000:80 vuetify-boilerplate
   ```

3. **Open browser and navigate to [URL](http://localhost:9000)**

### Build and Run Docker Image with Docker Compose

1. **Build Docker Image**

   ```bash
   docker-compose build
   ```

2. **Run Docker Image**

   ```bash
    docker-compose up
   ```

3. **Open browser and navigate to [URL](http://localhost:9000)**

### Further Reading

- [Vuetify Documentation](https://vuetifyjs.com/en/)
- [Pinia Documentation](https://pinia.esm.dev/)
- [Vue Router Documentation](https://router.vuejs.org/)
