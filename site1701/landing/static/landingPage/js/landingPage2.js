// 시간 변경 기능
const changeTimeForm = document.querySelector(".changeTimeForm ")
// const askPersonInput = document.querySelector("#askPerson")
// const changePersonInput = document.querySelector("#changePerson")
// const askWhenInput = document.querySelector("#askWhen")
// const changeWhenInput = document.querySelector("#changeWhen")
const changePost = document.querySelector(".changePost")

// 시간 변경 게시 기능

// function changeTimePost(){
//     changeTimeForm.addEventListener("submit", handleSubmit)
// }

// function paintChange(sentence){
//     const changePosts = document.querySelectorAll(".posts")
//     let div = document.createElement("div");
//     div.classList.add("posts");
//     const id = changePosts.length + 1
//     console.log(changePosts)
//     div.innerHTML = `<div class="postMenu" id="${id}">
//                         <button id="edit${id}">수정</button>
//                         <button id="del${id}">삭제</button>
//                     </div>
//                     <p>${sentence}</p>`
    
//     const editBtn = div.querySelector(`#edit${id}`)
//     editBtn.addEventListener("click",editPost)
//     const delBtn = div.querySelector(`#del${id}`)
//     delBtn.addEventListener("click",delPost)
//     changePost.appendChild(div)
// }


// function handleSubmit(event){
//     event.preventDefault();
//     let askPerson = askPersonInput.value;
//     let changePerson = changePersonInput.value;
//     let askWhen = askWhenInput.value;
//     let changeWhen = changeWhenInput.value;
//     sentence = `${askPerson}의 ${askWhen} 시간과 ${changePerson}의 ${changeWhen}시간을 바꿈`
//     paintChange(sentence);
//     askPersonInput.value = "";
//     askPersonInput.blur();
//     changePersonInput.value = "";
//     changePersonInput.blur();
//     askWhenInput.value = "";
//     askWhenInput.blur();
//     changeWhenInput.value = "";
//     changeWhenInput.blur();
// }

// 시간변경 수정 기능

// function editPost(event){
//     const editBtn = event.target
//     //  editPost ==> class="posts" 인 div
//     console.log(editBtn)
//     const editPost = editBtn.parentNode.parentNode;
//     console.dir (editPost)
//     // editPostText ==> p태그
//     const editPostText = editPost.children[1]
//     console.log(editPostText)
//     // originText ==> 원래 쓰여져 있던 글
//     const originText = editPostText.innerText
//     console.log(editPostText)

//     editPostText.innerHTML = `<form class="editForm">
//                                 <input type="text" id="editInput" placeholder="${originText}">
//                                 <button type="submit">완료</button>
//                               </form>`
//     // editInput ==> 수정을 누르면 뜨는 input
//     const editInput = editPostText.childNodes[0][0]
//     editInput.value = originText
//     // editForm ==> 수정을 누르면 뜨는 form
//     const editForm = document.querySelector(".editForm")
//     editForm.addEventListener("submit",function(event){
//         event.preventDefault();
//         if(editInput.value === "" || editInput.value.length < 7 ){
//             editInput.value = originText
//         }
//         editPostText.innerText = editInput.value
//     })
// }

// 시간변경 삭제 기능
// function delPost(event){
//     const delBtn = event.target
//     const delPost = delBtn.parentNode.parentNode;
//     changePost.removeChild(delPost)
// }

// 검색 기능
const SearchInput = document.querySelector('.search-input')

SearchInput.addEventListener("keypress", search)
function search(e){
    const word = SearchInput.value
    const posts = changePost.children
    console.log(posts.length)
    for (let i = 0 ; i<posts.length ; i++){
        // .posts 의 게시물 내용
        const context = posts[i].children[1].innerText
        if (!context.includes(word)){
            posts[i].style.display = "none"
        } else {
            posts[i].style.display = ""
        }
    }
}

// 슬라이더를 그냥 시간표로 토글 하는 기능

// 슬라이더 기능
const slide = document.querySelector(".dayCardSlide"),
    slideCards = document.querySelectorAll(".dayCard"),
    // buttons 
    preBtn = document.querySelector("#preBtn"),
    nextBtn = document.querySelector("#nextBtn"),
    size = 200

function getDay(){
    const date = new Date()
    let day = date.getDay();
    return day
}

const day = getDay()
let counter = day;
slide.style.transform = 'translateX('+(-size * counter) + 'px'


nextBtn.addEventListener('click', function(){
    if (counter >= 6){counter= -1}
    slide.style.transition = "transform 0.4s ease"
    counter++;
    slide.style.transform = 'translateX('+(-size * counter) + 'px'
})


preBtn.addEventListener('click', function(){
    if (counter <= 0){counter= 7}
    slide.style.transition = "transform 0.4s ease"
    counter--;
    slide.style.transform = 'translateX('+(-size * counter) + 'px'
})
    
function changeNumToDay(){
    const days= ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
    const daysH2 = document.querySelectorAll('.days')
    for(let i = 0; i<daysH2.length ;i++){
        console.log('a')
        daysH2[i].innerText = days[i]
    }
    
}



// 이니셜라이저
function init(){
    // changeTimePost()
    changeNumToDay()
}

init()