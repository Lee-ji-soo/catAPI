# catAPI
catAPI _ JS

## lang
JS, SCSS, HTML

## webpack install
- [x] SCSS (css-loader,node-sass,sass-loader,style-loader)
- [x] intersection-observer

## Open source CAT API 
https://thecatapi.com/

![alt text](https://raw.githubusercontent.com/Lee-ji-soo/catAPI/main/fetchcat2.jpeg?raw=true)

<h3>1.Home</h3>
<p>인터렉션을 활용 : 마우스 위치 이벤트, 롤링 텍스트</p>
<img width='1180' src='https://raw.githubusercontent.com/Lee-ji-soo/catAPI_JS/main/gif/catchcat1.gif'/>
<br>
<br>

<h3>2.SearchResult</h3>
<p>1. lazyloading 활용</p>
<p>2. IntersectionObserver 활용 : 
   데이터를 받아오는 갯수를 3개로 설정.<br>last-Element에
   접근 시 추가 데이터 fetch</p>
<img width='1180' src='https://raw.githubusercontent.com/Lee-ji-soo/catAPI_JS/main/gif/catchcat2.gif'/>
<br>
<br>
<h3>3.Category</h3>
<p>1.해당 nav, 선택 카테고리 활성화된 스타일로 변경</p>
<p>2.Loading 컴포넌트 활용</p>
<p>3.api GET 활용 : 선택된 카테고리의 id값을 통해 해당 cat을 불러온다. (box, clothes, hats, sink, space,sunglass,tie)</p>
<img width='1180' src='https://raw.githubusercontent.com/Lee-ji-soo/catAPI_JS/main/gif/catchcat3.gif'/>
<br>
<br>
<h3>4.Breed</h3>
<p>1.Select의 갯수에 따라서 prev,next 버튼추가 + 스크롤</p>
<img width='1180' src='https://raw.githubusercontent.com/Lee-ji-soo/catAPI_JS/main/gif/catchcat4.gif'/>
<br>
<br>
<h3>5.SearchInfo</h3>
<p>각 Element에 클릭 이벤트를 통해 디테일 렌딩</p>
<img width='1180' src='https://raw.githubusercontent.com/Lee-ji-soo/catAPI_JS/main/gif/catchcat5.gif'/>

<br>
<br>
<h3>6.DarkMode</h3>
<p>1. local Storage를 활용해, 새로고침을 해도 설정된 mode값을 유지</p>
<img width='1180' src='https://raw.githubusercontent.com/Lee-ji-soo/catAPI_JS/main/gif/catchcat6.gif'/>
<br>
<br>
<h3>7.Vote & Favorite</h3>
<p>1. api POST : vote에서 좋아요 표시 된 이미지를 favorite에 랜딩</p>
<p>2. api DELETE : favorite에서 삭제 버튼 클릭시 해당 데이터 삭제</p>
<img width='1180' src='https://raw.githubusercontent.com/Lee-ji-soo/catAPI_JS/main/gif/catchcat7.gif'/>
<br>
<br>
<h3>8.Mobile responsive</h3>
<p>1.navigation -> 햄버거메뉴로 축약 + 모션 추가</p>
<p>2.Select -> scroll로 변경</p>
<p>3.grid 미디어 쿼리 적용 3->2(768px)->1(576px)</p>
<img width='1180' src='https://raw.githubusercontent.com/Lee-ji-soo/catAPI_JS/main/gif/catchcat8.gif'/>

## JS 
### Components
- [x] Navigation
- [x] Category
- [x] Breed
- [x] Result
   - [x] 무한 스크롤 
   - [x] LazyLoading
- [x] Detail
- [x] Vote
- [x] Favorite

### API
- [x] Search & Pagination (InterSectionObserver) [GET]
- [x] Search by Breed [GET]
- [x] Search by Category [GET]
- [x] Vote [POST]
- [x] Favorite [GET]
- [x] Delete Favorite [DELETE]

### others
- [x] Darkmode
- [x] isLoading

## CSS
- [x] Home
- [x] Navigation
   - [x] responsive
- [x] Select - Category
   - [x] responsive
- [x] Select - Breed
   - [x] responsive
- [x] Result
   - [x] responsive
- [x] Info
   - [x] responsive
- [x] Vote
   - [x] responsive
- [x] Favorite
   - [x] responsive
- [x] Loading & Lazy Loading gif
