const $doc = document

$doc.querySelector("#next-btn").addEventListener('click', (e)=>{
    $doc.querySelector(".hobby-list").scrollBy(300, 0);
})

$doc.querySelector("#prev-btn").addEventListener('click', (e)=>{
    $doc.querySelector(".hobby-list").scrollBy(-300, 0);
})

$doc.querySelector(".hobby-list").addEventListener("swiped-left", (event)=>{
    $doc.querySelector(".hobby-list").scrollBy(300, 0);
});

$doc.querySelector(".hobby-list").addEventListener("swiped-right", (event)=>{ 
    $doc.querySelector(".hobby-list").scrollBy(-300, 0);
});

function scrollHobby()
{
    $doc.querySelector(".hobby-list").scrollBy(300, 0);
}

var observer = new IntersectionObserver((entries)=>{
    if (entries[0].isIntersecting === true)
        scrollHobby()
}, {threshold: [1]})

observer.observe($doc.querySelector(".hobbies-container"))