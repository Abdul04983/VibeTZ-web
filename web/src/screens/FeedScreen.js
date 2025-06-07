
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import React, { useState } from 'react';

const FeedScreen = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: '@jay_254',
      time: '2h ago',
      content: 'Weekend vibes in Zanzibar 🏖️',
      likes: 0,
      comments: []
    },
    {
      id: 2,
      username: '@nana_artsy',
      time: '4h ago',
      content: 'New painting out now 🎨',
      likes: 0,
      comments: []
    }
  ]);

  const handleLike = (id) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleComment = (id, text) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === id ? { ...post, comments: [...post.comments, text] } : post
      )
    );<View style={styles.post}>
  <Text style={styles.username}>@{post.username}</Text>
  <Text style={styles.time}>{post.timeAgo}</Text>
  <Text style={styles.content}>{post.content}</Text>

  };

  return (
    <div style={{ padding: 20 }}>
      <h2>VibeTZ Feed</h2>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: 20, padding: 15, background: '#f0f0f0', borderRadius: 10 }}>
          <p><strong>{post.username}</strong> <span style={{ color: 'gray' }}>{post.time}</span></p>
          <p>{post.content}</p>

          <button onClick={() => handleLike(post.id)}>
            ❤️ Like ({post.likes})
          </button>

          <div style={{ marginTop: 10 }}>
            <input
              type="text"
              placeholder="Add comment..."
              onKeyDown={e => {
                if (e.key === 'Enter' && e.target.value) {
                  handleComment(post.id, e.target.value);
                  e.target.value = '';
                }
              }}
              style={{ width: '100%', padding: 5 }}
            />
            {post.comments.map((c, i) => (
              <p key={i} style={{ marginLeft: 10 }}>💬 {c}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

  <TouchableOpacity
    style={[styles.likeButton, liked && { backgroundColor: '#ffccd5' }]}
    onPress={() => setLiked(!liked)}
  >
    <Text>{liked ? '💔 Unlike' : '❤️ Like'}</Text>
  </TouchableOpacity>
</View>
