# tic-tac-toe

## Preview
![test](https://user-images.githubusercontent.com/74028161/133083046-47946497-61ed-4de7-b698-71c9e746c493.png)

## 링크
[Tic-Tac-Toe](https://mauv-hub.github.io/tic-tac-toe/)

## Stack
### 1. Vanilla JS
>Algorithm
### 2. HTML
>Show Page
### 3. Webpack
>Bundling

## Methods list
Method Name | Explanation
------------ | -------------
_AISelectMove | AI의 턴을 관리합니다.
_CheckGameOver | 게임이 누구의 승리인지 판별합니다.
_CreateBoard | 3*3 형태의 그리드를 생성합니다. x 축에 `div`를 생성하고 `div`안에 y 축을 생성합니다. <br/> e.g. ```<div>...<img></div>```
_EvaluateBoard | 이길 수 있는 경우의 수를 판별하고 게임 결과를 return 합니다.
_HighlightSquares | 그리드 아이템을 랜덤으로 찍어 Highlight를 줍니다.
_GetBoardStates | 각 그리드 아이템에 저장되어 있는 `img`node를 value 값으로 치환하여 `Array`에 저장합니다. e.g. `[...[1],[2]] 
_GetSquareElementNodes | x,y좌표로 구분된 그리드 아이템을 Array에 넣어 반환합니다.
_HandlePlayerClick | player가 그리드 아이템을 클릭하면 발생하는 이벤트입니다.
_InitializeState | `_Setup()`에 의해 호출되며 게임의 초기 데이터를 지정합니다.
_Minimax | 추정되는 최대의 손실을 최소하는 기법을 적용하는 AI를 구성합니다.
_Setup | HTML 문서를 불러온 후 DOMContentLoaded를 통해 초기값을 설정합니다.

## Work flow
### 1. 화면 구성(`_Setup()`)
> 3*3 형태의 그리드를 구성합니다.

### 2. Player 그리드 클릭(`_HandlePlayerClick()`) 
> 해당 그리드에 `img`파일을 업데이트하고, 게임의 결과 여부를 동시에 확인합니다.

### 3. AI turn(`_AISelectMove()`)
> AI는 Player와 AI의 선택에 기반하여 모든 경우의 수를 파악합니다.

### 4. Minimax(`_Minimax(), _Minimax_Miximize(), _Minimax_Minimize()`)
> 기존의 선택된 그리드 정보에 새로운 객체를 할당하여 이길 수 있는 경우의 수와 지게 되는 경우의 수를 확인합니다. <br/>경우의 수는 각 자의 턴에 최선의 선택을 한다고 가정하며 이 때, 지게 되는 상황이 발생 시 지는 상황을 막을 수 있는 곳에 수를 둡니다.

## 참고 사이트
[SimonDev](https://www.youtube.com/watch?v=4KyYjERkmPg)

