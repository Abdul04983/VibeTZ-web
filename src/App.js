import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎉 Welcome to VibeTZ</h1>
      <p style={styles.subtitle}>The Future of Social Media — now live on Web!</p>
      <p style={styles.link}><a href="https://vibe-tz.vercel.app" target="_blank" rel="noreferrer">Visit Live Site</a></p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: '100px',
    fontFamily: 'Arial, sans-serif',
    background: '#000',
    color: '#fff',
    height: '100vh'
  },
  title: {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  link: {
    fontSize: '18px',
    marginTop: '20px',
  },
};

export default App;
