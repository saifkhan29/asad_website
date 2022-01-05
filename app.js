
// <================== start of navbar ======================>const hamburger = document.querySelector('.navImg');
const navMain = document.querySelector('.navMain');
const cancel = document.querySelector('.navImg2')
const allLinks = document.querySelectorAll('ul li')
const navbar = document.querySelector('nav')
const hamburger = document.querySelector('.navImg');


hamburger.addEventListener('click', () => {
    NavFunc();
    iconFunc();
    navbar.classList.add('pos_fixed')

})

cancel.addEventListener('click', () => {
    NavFunc();
    iconFunc();
    navbar.classList.remove('pos_fixed')

})



allLinks.forEach(function(singleLink) {
    singleLink.addEventListener('click' ,() => {
        NavFunc();
        iconFunc();
    })
})

const NavFunc = () => {
    if(navMain.classList.contains('show')){
        navMain.classList.remove('show')
        
    } else {
        navMain.classList.add('show')
        
    }

}

const iconFunc = () => {
    if(hamburger.classList.contains('hideHam')){
        hamburger.classList.remove('hideHam')
        cancel.classList.remove('navImg22')
    } else {
        hamburger.classList.add('hideHam')
        cancel.classList.add('navImg22')
    }

}
// <================== end of navbar ======================>


//start of our work gallery section

const gallery = document.querySelectorAll('.gallery .image4')
const previewBox = document.querySelector('.preview-box')
const previewImg = previewBox.querySelector('img')
const closeIcon = previewBox.querySelector('.icon')
const currentImg = previewBox.querySelector('.current-image')
const totalImg = previewBox.querySelector('.total-img')
const shadow = document.querySelector('.shadow')

window.onload = () => {
    for(let i = 0; i < gallery.length; i++){
        totalImg.textContent = gallery.length;
        let newIndex = i;
        let clickImgIndex;
        gallery[i].onclick = () => {
            clickImgIndex= newIndex;
            console.log(i)
            
            function preview(){
                currentImg.textContent = newIndex + 1;
                let selectedImgUrl = gallery[newIndex].querySelector('img').src;
                previewImg.src = selectedImgUrl
                console.log(selectedImgUrl)
            }


            const prevBtn = document.querySelector('.prev')
            const nextBtn = document.querySelector('.next')

            if(newIndex == 0){
                prevBtn.style.display = "none";
            }

            if(newIndex >= gallery.length - 1){    
                nextBtn.style.display = "none";
            } 

            prevBtn.onclick = () => {
                newIndex--;
                if(newIndex == 0){
                    preview();
                    prevBtn.style.display = "none";

                } else {
                    preview();
                    nextBtn.style.display = "block";
                }
            }
            nextBtn.onclick = () => {
                newIndex++;
                if(newIndex >= gallery.length - 1){
                    preview();
                    nextBtn.style.display = "none";
                } else {
                    preview();
                    prevBtn.style.display = "block" ;

                }
            }



            preview();


            previewBox.classList.add('show2')
            shadow.style.display = "block";
            document.querySelector('body').style.overflow = "hidden";
            
            closeIcon.onclick = () => {
                document.querySelector('body').style.overflow = "visible";
                newIndex = clickImgIndex;
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                shadow.style.display = "none";

                previewBox.classList.remove('show2')
            }

        }
    }
}

//end of our work gallery section

//start of testimonials page
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Ajay Mishra',
    position: 'Marketing Manager',
    photo:
      'https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    text:
      "Great service, efficient communication and a really easy way to get a mortgage with lots of help and support to get the right deal.",
  },
  {
    name: 'Mohan Shah',
    position: 'Product Manager',
    photo: 'https://images.unsplash.com/photo-1472213984618-c79aaec7fef0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    text:
      '“Our experience has been a very positive one. Working with a management team that is accommodating and sensitive to our needs. What a concept! Their professionalism shows in management, quality of work and customer service.”',
  },
  {
    name: 'Karim Ahmed',
    position: 'Architect',  
    photo: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    text:
      "“Our architect and several subs have specifically mentioned how much they enjoyed working with SP Construction. I was also very pleased with the timeliness of the construction. It was a pleasure to work with professionals that treated the project and jobsite as if it were their own property and building.”",
  },
  {
    name: 'Renee Sims',
    position: 'HR Manager',
    photo: 'https://images.unsplash.com/photo-1591543620767-582b2e76369e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60',
    text:
      "“During the course of our project,SP Construction maintained the highest standards of quality, value, professionalism, safety, and cleanliness. Our project was completed on schedule and under budget. ",
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
  },
  {
    name: 'Rohit Sharma',
    position: 'Senior Accountant',
    photo:
      'https://media.istockphoto.com/photos/low-angle-of-tall-building-in-manhattan-picture-id1291177121?b=1&k=20&m=1291177121&s=170667a&w=0&h=aI1PkWS_GkXJ4Qz0gz2cTOud95SS4hUa4iZc1kqWYL4=',
    text:
      'I want to say that the working relationship between the building committee that  assimilated at that time and the entire SP Construction team could not have been more collaborative or productive',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Project Director',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'Throughout the duration of the project from design to actual construction the representatives of SP Construction have conducted themselves with the utmost professionalism and extended every courtesy possible to my group.',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
//end of testimonials page