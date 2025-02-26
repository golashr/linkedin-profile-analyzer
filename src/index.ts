import express, { RequestHandler } from 'express';
import { getProfile } from "./features/profile/get-profile.js"
import { getAllPosts, getPostComments } from "./features/post/get-posts.js"

const app = express();
const port = 3001;

// Add JSON middleware
app.use(express.json());

// Add error handling middleware
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.get('/', ((_: express.Request, res: express.Response) => {
  res.json({ message: 'Welcome to the LinkedIn Profile Analyzer' });
}) as RequestHandler);

app.get('/comments', (async (req: express.Request, res: express.Response) => {
  try {
    const name = req.query.name as string;
    if (!name) {
      return res.status(400).json({ error: 'Name parameter is required' });
    }

    const profile = await getProfile(name);
    if (!profile.data.urn) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    const posts = (await getAllPosts(name)).data;
    
    if (!posts.length) {
      return res.status(404).json({ error: 'No posts found' });
    }

    const comments = await getPostComments(posts[0].urn);
    return res.json({
      total: comments.total,
      comments: comments.data,
      post_urn: posts[0].urn
    });
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
}) as RequestHandler);

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});