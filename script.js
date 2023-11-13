//use js dom to get class accordion
var acc = document.querySelectorAll('.accordion')

//use for each to initialize event listener
acc.forEach((accs)=>{
  accs.addEventListener('click',function(){
    this.classList.toggle('active')
    
    //next element sibling is a propery that immediately following the specified one in the parent list
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  })
 
})