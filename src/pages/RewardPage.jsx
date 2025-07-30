import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';

function RewardPage() {
  const { user, token } = useAuth();
  const [rewards, setRewards] = useState(null);

  useEffect(() => {
    axios.get(/api/earnings/, {
      headers: { Authorization: Bearer  }
    })
    .then(res => setRewards(res.data));
  }, []);

  if (!rewards) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Total Earnings: TZS {rewards.totalEarnings}</h1>
      <h2 className="text-lg mb-4">Total Views: {rewards.totalViews}</h2>
      <ul className="space-y-2">
        {rewards.posts.map(post => (
          <li key={post.postId} className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.views} views = TZS {post.earnings}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RewardPage;
