// const 변수(variables) = "데이터";
// const는 문자만 가능한건가? 숫자는 안되는건가?
const lunch = "베이컨 토마토 디럭스";
alert(lunch);

// 콘솔로 넣기.
const coffee = "조지아 오리지널 캔커피";
console.log(coffee);

// mbti라는 별명만들고 콘솔로 출력.
const mbti = "INFJ";
console.log(mbti);

// 2개의 변수 및 언어를 합치거나 데이터를 합칠 때 사용하는 방법.
// 이 상태에서는 내 mbti는 ${mbti}라는 log가 그대로 남게 된다.

console.log("내 mbti는 ${mbti}");
// 이 상태에서는 내 mbti는 INFJ라는 log가 남게 된다.

console.log(`내 mbti는 ${mbti}`);
console.log("내 mbti는 " + mbti);

const my_name = "곽경섭";
const ott_platform = "YouTube";
const youtube_name = "한동숙";
const dinner = "부대찌개";

console.log(`안녕하세요 저의 이름은 ${my_name}입니다.
    저의 mbti는 ${mbti}이고요,
    제가 좋아하는 OTT 플랫폼은 ${ott_platform}입니다.
    요즘 즐겨보는 유튜버는 ${youtube_name}입니다.
    오늘 저녁은 ${dinner}를 먹을 예정입니다.`);
