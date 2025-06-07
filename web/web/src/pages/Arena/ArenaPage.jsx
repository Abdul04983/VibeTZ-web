import React from "react";
import { useNavigate } from "react-router-dom";

export default function ArenaPage() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>🎮 VibeTZ Arena</h1>
      <button style={styles.button} onClick={() => navigate("/arena/pool")}>🎱 Play Pool</button>
      <button style={styles.button} onClick={() => navigate("/arena/checkers")}>♟️ Play Checkers</button>
      <button style={styles.button} onClick={() => navigate("/arena/cards")}>🃏 Play Cards</button>
    </div>
  );
}

const styles = {
  container: { display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" },
  button: { padding: "10px 20px", margin: "10px", fontSize: "16px", cursor: "pointer" }
};
