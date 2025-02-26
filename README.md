# LinkedIn Profile & Post Analyzer

A TypeScript application that fetches and analyzes LinkedIn profiles and posts using the LinkedIn API.

## Features

- Fetch LinkedIn profiles by URL
- Get user's posts and their engagement metrics
- Retrieve post comments and replies
- ESM-compatible build output

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with your API credentials:
```env
RAPID_API_KEY=your_api_key
BASE_URL=https://fresh-linkedin-profile-data.p.rapidapi.com
RAPID_API_HOST=fresh-linkedin-profile-data.p.rapidapi.com
```

3. Build the project:
```bash
npm run build
```

## ESM Configuration

This project uses ES Modules (ESM) for the production build. The key configuration in `tsconfig.build.json`:

```json
{
  "compilerOptions": {
    "module": "NodeNext",  // Enables ESM output
    "moduleResolution": "NodeNext"
  }
}
```

This allows:
- Native ESM imports/exports
- `.js` extension in imports
- Full ESM compatibility in the dist output

## Usage

Run the development version:
```bash
npm run dev
```

Run the production build:
```bash
npm run start:prod
```

## API Examples

```typescript
// Fetch a profile
const profile = await getProfile('user-id');

// Get user's posts
const posts = await getAllPosts('username');

// Get post comments
const comments = await getPostComments('post-urn');
```

## Set up commands

```bash
mkdir ts-project
cd ts-project
npm init
npm install --save-dev typescript
touch tsconfig.json
npm install --save express
npm install -save-dev @types/express
npm run start
npm install --save-dev eslint
npm init @eslint/config@latest
npm i -g nodemon
npm install --save-dev ts-node
git init
touch .gitignore
```

## License

MIT