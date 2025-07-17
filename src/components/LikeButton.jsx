import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <p>❤️ 좋아요 {likes}개</p>
      <button onClick={() => setLikes(likes + 1)}>좋아요</button>
    </div>
  );
}