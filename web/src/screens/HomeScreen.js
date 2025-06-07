import React from 'react';

const posts = [
  { id: 1, username: 'jay_254', content: 'Weekend vibes in Zanzibar 🏖️', time: '2h ago' },
  { id: 2, username: 'nana_artsy', content: 'New painting out now 🎨', time: '4h ago' },
];

const HomeScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">VibeTZ Feed</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-2xl shadow-sm border">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-lg text-gray-800">@{post.username}</h2>
              <span className="text-sm text-gray-400">{post.time}</span>
            </div>
            <p className="text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;

