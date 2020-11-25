/*

이 리액트 앱을 구성하는 모듈 패키지 입니다.
package.json 에 모듈 정보가 들어있지만

git clone 시 yarn start 를 해도 테스트서버가 실행되지 않으면
모듈 설치가 제대로 되지 않은 원인이 큽니다.
이럴 때는 node_modules 폴더를 완전히 지우고 yarn install 을 실행하여 모듈 재설치 후 yarn start 
하여 테스트 서버가 실행되는지 확인하세요.

git pull 이후 yarn install 이 잘 안될 시 설치된 모듈을 참조할 때 보세요

yarn add react-router-dom
yarn add cross-env --dev
yarn add react-select
yarn add antd
yarn add axios
yarn add @react-google-maps/api

*/