﻿<View style={styles.postContainer}>
  <Text style={styles.username}>@jay_254</Text>
  <Text style={styles.time}>2h ago</Text>
  <Text style={styles.postText}>Weekend vibes in Zanzibar ðŸ–ï¸</Text>

  {/* Buttons */}
  <View style={styles.buttonsContainer}>
    <TouchableOpacity style={styles.button}>
      <Text>â¤ï¸ Like</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Text>ðŸ’¬ Comment</Text>
    </TouchableOpacity>buttonsContainer: {
  flexDirection: 'row',
  marginTop: 8,
  gap: 12,
},
button: {
  backgroundColor: '#eee',
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderRadius: 20,
},

  </View><View style={styles.buttonRow}>
  <TouchableOpacity style={styles.likeButton}>
    <Text>â¤ï¸ Like</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.commentButton}>
    <Text>ðŸ’¬ Comment</Text>
  </TouchableOpacity>
</View>

</View>
