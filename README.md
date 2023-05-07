# sewf
Provide informations about coalitions in 42 SEOUL

그동안 42서울 코알리숑인 건, 곤, 감, 리의 소속된 본과정생들을 볼 수 있는 방법이 없었습니다.
코알리숑 마스터가 되면서 모든 건 멤버들을 알고싶었고, 이를 위해서 만들게 된 사이트입니다.

구조는 다음과 같습니다.
- 한달에 한번 데이터 갱신을 위해 매월 1일 00시가 되면 AWS 람다가 동작
- 람다 위에선 노드가 돌아가고 42 APIs 호출
- 코알리숑별 본과정생 데이터를 모으면 연결된 저장소를 참조
- 정적 사이트를 만들고 S3에 배포

42 APIs 활용안
1. OAuth2 Token 획득
2. 42 SEOUL capmus_id 조회
3. campus_id로 42 SEOUL의 bloc_id 조회 (코알리숑 그룹이라고 생각하면 됨)
4. bloc_id를 통해 coalition_ids(건, 곤, 감, 리) 획득
5. Cursus users 데이터를 page[number]=1 부터 마지막까지 조회
6. Coalition users * 4 데이터를 page[number]=1 부터 마지막까지 조회
7. 5번 6번 데이터를 조합해 필요한 데이터만 추출
8. 가공된 데이터로 리액트에게 전달