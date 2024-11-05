function friendRecommendations(network, user) {
  let bestFriends = [];
  let recomFriends = [];
  const FRIENDS = Object.keys(network);
  if (!FRIENDS.includes(user)) {
    return "존재하지 않는 사용자입니다.";
  } else {
    // 1. target의 친구 리스트 저장(bestFriends)
    bestFriends = network[user];
  }
  // 2. keys 값으로 network 순회
  FRIENDS.map((it) => {
    if (!bestFriends.includes(it) && it !== user) {
      recomFriends.push(it);
    }
  });
  return recomFriends;
}

export default friendRecommendations;