# Node.js Mongoose TypeScript App

## Dependencies

Here is a list of packages and their versions used in this project:

- **bcrypt:** v5.1.1
- **cors:** v2.8.5
- **dotenv:** v16.3.1
- **eslint:** v8.54.0
- **express:** v4.18.2
- **mongoose:** v8.0.1
- **typescript:** v5.3.2
- **zod:** v3.22.4

**Note:** The versions listed are those installed at the time of creating this README. You may want to check for updates and use the latest compatible versions when setting up the project.

# Quick Start

Follow these steps to set up and run your Node.js Mongoose TypeScript app locally.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/somratsam/mongoose-ass-2.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mongoose-ass-2
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root of the project.

2. Open the `.env` file and set the following environment variables:

   - `NODE_ENV`: Environment mode (e.g., 'development', 'production')
   - `PORT`: Port number for the server
   - `DATABASE_URL`: Connection URI for the MongoDB database
   - `BCRYPT_SALT_ROUNDS`: Number of salt rounds for hashing passwords with Bcrypt

## Usage

Run this application locally:

```bash
npm run start:dev
```
