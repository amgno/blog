# Retro Blog

A minimal, dark mode Jekyll blog with retro Windows XP and terminal aesthetics.

## Features

- Retro-inspired design with modern functionality
- Dark mode by default
- Responsive layout
- Docker support for local development
- GitHub Pages ready

## Local Development

### Using Docker (Recommended)

1. Make sure you have Docker and Docker Compose installed
2. Clone this repository
3. Run the following command:

```bash
docker-compose up
```

The site will be available at `http://localhost:4000`

### Manual Setup

1. Install Ruby and Bundler
2. Install dependencies:

```bash
bundle install
```

3. Run the site:

```bash
bundle exec jekyll serve --livereload
```

## Creating Posts

Create new posts in the `_posts` directory following the naming convention:
`YYYY-MM-DD-title.md`

## Deployment

This blog is designed to work with GitHub Pages. Simply push to your GitHub repository's `main` branch, and enable GitHub Pages in your repository settings.

## License

This project is open source and available under the MIT License. 