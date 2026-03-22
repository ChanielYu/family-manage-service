import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Welcome to Node Service</h1>
      <p>This is a Next.js powered service.</p>
      <h2>Available API Endpoints:</h2>
      <ul>
        <li><code>GET /api/data</code> - Fetch data</li>
        <li><code>POST /api/process</code> - Process data</li>
      </ul>
    </div>
  );
};

export default Home;