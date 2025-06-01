# Avam Product Demo

A simplified e-commerce product detail page built with Next.js, showcasing modern development practices for a science/tech brand. This demo focuses on component architecture, responsive design, and clean UI implementation using mock data.

![Product Detail Page Demo](./screenshot.jpg)

## 🚀 Live Demo

**[View Live Demo →](https://avam-product-demo.vercel.app/products/avam-nasafe)**

## Tech Stack

- **Next.js 15** with App Router and Server Components for optimal performance
- **React 19** with modern patterns and concurrent features
- **TypeScript 5** for type safety and developer experience
- **Tailwind CSS 4** for utility-first styling and design consistency
- **Node 22** for the latest JavaScript features and performance

## Getting Started

### Prerequisites
- Node.js 22+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd avam-product-demo

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/            # Next.js app routes and pages
├── modules/        # Domain-specific components and logic
├── types/          # TypeScript type definitions
├── utils/          # Helper functions and utilities
├── lib/            # Shared libraries and configurations
├── mocks/          # Mock data for product simulation
└── styles/         # App styles
```


## Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run Biome linter
pnpm lint:fix     # Run Biome fix
```

## Stack Decisions

### What tech stack would you propose for rebuilding avam.com and why?

I chose **Next.js** as the frontend framework because there is currently no more advanced framework that combines loading performance and SEO optimization capabilities. Other frameworks offering static site generation like Astro, Nuxt, and SvelteKit do not currently offer ISR On-demand capability. This means they cannot be connected to a CMS in a way that displays changes immediately after saving.

Additionally, Next.js popularity and the fact that it's based on the React library ensures a huge ecosystem and allows for good scalability. Next also has an extensive API for SEO optimization - you can easily define page metadata or create dynamic OpenGraph images. It's also not a problem to automate Google Structured Data generation or connect Google Analytics and Google Tag Manager. Furthermore, Next allows achieving very good Core Web Vitals results through its performance and the use of various media loading strategies.

**Next.js Pros**:
- **ISR On-demand**: Unlike competitors (Astro, Nuxt, SvelteKit), Next.js supports Incremental Static Regeneration with on-demand revalidation, enabling seamless CMS integration with instant content updates
- **Advanced SEO API**: Built-in metadata API, dynamic OpenGraph image generation, and automated Google Structured Data integration
- **Core Web Vitals optimization**: Superior performance through optimized bundling, automatic code splitting, and intelligent asset loading strategies
- **Ecosystem maturity**: React's extensive ecosystem ensures long-term scalability and developer availability

I chose **Node.js 22** LTS as the runtime for its stable foundation, latest JavaScript features, and long-term support guaranteeing production reliability.

I chose **Tailwind CSS** instead of `SCSS` or `styled-components` because it allows for easy definition of a consistent design system and significantly accelerates the application styling process. There's no need to jump between files and invent unique class names for every div. Modern UI libraries like `shadcn/ui`, which have the perfect balance between customizability and implementation speed, utilize Tailwind. Although not everyone may like that styles are added inline, in my opinion it's worth using Tailwind for the development velocity and consistency it provides.

#### E-commerce Platform Selection

The most critical decision for rebuilding avam.com is choosing the right e-commerce system. This requires deeper consideration based on business needs and budget constraints. I would primarily consider two solutions: **Shopify** and **Medusa.js**.

I have experience with both systems and understand their strengths and weaknesses:

- **Shopify** can be compared to iPhones - quality matters, has its limitations, and can be costly. It offers excellent out-of-the-box functionality and extensive app ecosystem, but comes with transaction fees and platform lock-in.

- **Medusa.js** can be compared to Android - you can configure most things, easy integration capabilities, and costs are essentially limited to maintaining the architecture itself. It provides complete customization freedom and no transaction fees, but requires more development resources.

Both solutions have numerous pros and cons, making it difficult to make an immediate decision without more details about specific business requirements, expected traffic, budget constraints, and technical team capabilities.

Additionally, before deciding on Medusa.js, I believe it's worth examining other emerging open-source e-commerce systems such as **Saleor**, **Vendure**, **Swell**, and others to ensure we select the most suitable solution for the specific use case.

### How would you structure the frontend and backend for scalability and maintainability?

**Architecture Strategy Based on Business Scale**

The optimal architecture depends on the business scope and geographic reach. For companies operating across multiple continents, I recommend implementing an "edge-first" approach where the frontend application is distributed globally via CDN networks. This ensures users can load pages faster regardless of location, which research shows can positively impact conversion rates.

**Global Scale Architecture (Multi-continent)**
- **Edge deployment platforms**: Vercel, Netlify, AWS Lambda, Cloudflare Workers
- **Benefits**: Reduced latency, improved Core Web Vitals, better user experience globally

**Regional Scale Architecture (Single continent)**

For businesses operating within one continent, I suggest simplifying the architecture with a centralized approach using a single powerful server instance. This provides a straightforward scalability path through vertical scaling while maintaining cost efficiency.

I have hands-on experience implementing applications on DigitalOcean consisting of multiple dockerized microservices:
- HTTP server (nginx/caddy)
- Frontend application (Next.js)
- E-commerce platform (Medusa.js)
- Backend application
- CMS server
- Multiple databases

This setup provides predictable monthly costs and clear scaling opportunities through DigitalOcean's infrastructure options.

**Backend Architecture Recommendations**

For the backend server, if the store doesn't require complex business logic, I recommend leveraging the backend endpoint capabilities offered by modern e-commerce systems like Medusa.js. This approach reduces development overhead while providing robust e-commerce functionality.

**Maintainability Considerations**

To ensure long-term maintainability, I recommend implementing:

- **Modular architecture**: Domain-specific modules (products, users, orders) with clear boundaries
- **TypeScript everywhere**: Type safety across frontend, backend, and API contracts
- **Automated testing**: Unit tests, integration tests, and E2E testing
- **Code quality tools**: ESLint, Prettier, Biome, and automated CI/CD pipelines
- **Documentation**: API documentation with OpenAPI/Swagger and component documentation with Storybook
- **Monitoring**: Performance monitoring, error tracking, and health checks for early issue detection

The final architectural decision should be made after understanding specific business requirements, expected traffic patterns, and budget constraints. With more detailed business context, I can provide more targeted architectural recommendations.

### What tools (e.g. CMS, deployment, testing, monitoring) would you include in the full setup?

**Content Management System (CMS)**

For CMS selection, I would consider **Strapi**, **Hygraph**, and **Sanity** depending on budget and requirements. I have the most experience with Strapi and Hygraph, but would analyze other headless CMS options as well.

- **Strapi**: Open-source, self-hosted, good customization
- **Hygraph**: GraphQL-native, managed infrastructure
- **Sanity**: Real-time collaboration, flexible content modeling

**Deployment & Infrastructure**

- **Vercel**: Next.js deployment with edge functions
- **DigitalOcean**: VPS hosting for backend services and databases
- **GitHub Actions**: CI/CD pipeline
- **Docker**: Containerization
- **Kubernetes** (if needed): Container orchestration for large deployments

**Database & Backend Services**

- **PostgreSQL**: Main database for e-commerce data
- **Redis**: Caching and session storage
- **Medusa.js** (if selected): E-commerce backend with APIs
- **Docker Compose**: Local development orchestration

**Testing Strategy**

- **Vitest**: Fast unit testing with TypeScript
- **Playwright**: End-to-end testing for user journeys
- **Storybook** (optional): Component documentation

**Monitoring & Analytics**

- **Sentry**: Error tracking and performance monitoring
- **Google Analytics 4**: Business metrics and conversion tracking
- **Posthog**: User behavior insights

**Performance & SEO**

- **Google Search Console**: SEO monitoring and pages indexing
- **Google Tag Manager**: Analytics tag management and marketing
- **Cloudinary** (optional): Image optimization

**Development Tools**

- **Biome**: Linting and formatting (or `oxc` when stable)
- **TypeScript**: Type safety
- **Conventional Commits** (optional): Standardized commit messages
