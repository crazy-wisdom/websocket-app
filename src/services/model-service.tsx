export const sortTalks = function(talks: any) {
  talks.sort(function(a: any, b: any) {
    if ((a.rank && b.rank) && (a.rank > b.rank)) {
      return a.rank - b.rank
    } else {
      return b - a;
    }
  });

  return talks;
};


export const buildTalkData = function(talks: any) {
  const sortedTalks = sortTalks(talks);

  var count = sortedTalks.length;
  var talkData: any = {};
  for (var i = 0; i < count; i++) {
    talkData[i] = sortedTalks[i];
  }

  return talkData;
};
