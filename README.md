# Redis
## What is Redis?
- **Re**mote **Di**ctionary **S**erver 의 약자 
- cache, database, message broker 등으로 다양하게 사용
    - memcache 는 cache 하나에 집중한 반면, redis 는 다양한 것들을 처리
    
## Benefits?
- 메모리를 사용하여 저장장치보다 속도가 빠르다
- 단순한 key-value store 가 아니라, 다양한 dataset 을 지원한다
- 특정 시점마다 복제를 뜨는 옵션을 제공한다
- Scale Up-In-Out 하기가 편리하다

## UseCase?
- 캐싱
- 채팅, 메시징
- 세션스토어
- 스트리밍
- 실시간데이터분석

---

Redis 에 관련해서 찾아보다가, [AWS의 Redis 문서](https://aws.amazon.com/ko/redis "AWS Redis Docs: What is Redis?")가 잘 되어있는 걸 보고 빠르게 읽고 정리해봤다.

대략 어떤건진 감을 잡았으니, [Redis 의 npm 문서](https://www.npmjs.com/package/redis, "npm-redis") 로 가서 문서를 읽어보았다.

---

사실 나는 Redis 로 accessToken, refreshToken 을 관리하려고 했다. 특히 refreshToken 을 갱신하기 위해서는 DB에 접근을 한 번 해야하고, refreshToken 을 hashed 해서 전달해 준 값과 사용자의 refreshToken 을 hashing 해서 DB에 저장한 값을 비교하는 과정이 필요한데, 이를 database 가 아니라 in-memory database 에서 처리한다면 비교과정을 조금 더 빠르게 진행할 수 있지 않을까? 라는 생각이 가장 컸다. 

찾아보니 그렇게 쓰는 사람이 몇 보이긴 했다. 물론, 이 경우는 Redis 가 장애가 생긴 경우 DB에 접근하도록 자연스러운 처리가 필요할 것이며 Redis 를 별도의 서비스로 두어 별도의 프로세스로 운용할 것인지, 아니면 사용하는 마이크로서비스에 추가로 Redis 를 붙여서 하나의 프로세스에서 Redis 를 이용할 것인지도 고려를 해야한다. 

그러나 이런 AuthStorage 로서의 Redis 보다, MicroService 간의 소통에 

```zsh
yarn add redis @types/redis
```







