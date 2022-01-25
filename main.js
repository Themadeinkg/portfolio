 
const header = document.getElementById('header')
const box = document.createElement('div')
const imageslogo = document.createElement('img')
const divlist = document.createElement('div')
const box2 = document.createElement('div')
const paragraph = document.createElement('p')
const paragraph2 = document.createElement('p')
const btn = document.createElement('button')




imageslogo.src='./images/logo.svg'

header.append(box,box2)
box.append(imageslogo,divlist)
box2.append(paragraph,paragraph2,btn)



divlist.innerHTML=`

<ul>
<a href="#section"><li class="list">Skills</li></a>
<a href="#section2"><li class="list">Portfolio</li></a>
<a href="#section3"><li class="list">Video</li></a>
<a href="#section4"><li class="list">Price</li></a>
<a href="#section5"><li class="list">Contacts</li></a>
<a href="#section"><li class="list">en/ru</li></a>
</ul>
`

box.className='container'
divlist.className='container2'
box2.className='container3'
paragraph.className='text'
paragraph2.className='text2'
btn.className='button'
imageslogo.className='imageslogo'
paragraph.innerHTML=`
Alexa Rise
`
paragraph2.innerHTML=`Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise`

btn.innerHTML=`
Hire me`



const section = document.getElementById('section')
const Skills = document.createElement('div')
const span = document.createElement('span')

const box4 = document.createElement('div')

const box5 = document.createElement('div')
const i = document.createElement('img')
const paragraph3 = document.createElement('p')
const paragraph4 = document.createElement('p')

const box6 = document.createElement('div')
const i2 = document.createElement('img')
const paragraph5 = document.createElement('p')
const paragraph6 = document.createElement('p')

const box7 = document.createElement('div')
const i3 = document.createElement('img')
const paragraph7 = document.createElement('p')
const paragraph8 = document.createElement('p')

const box8 = document.createElement('div')
const i4 = document.createElement('img')
const paragraph9 = document.createElement('p')
const paragraph10 = document.createElement('p')







section.append(Skills,box4)
Skills.append(span)

box4.append(box5,box6,box7,box8)

box5.append(i,paragraph3,paragraph4,)
box6.append(i2,paragraph5,paragraph6)
box7.append(i3,paragraph7,paragraph8)
box8.append(i4,paragraph9,paragraph10)





section.className='section'
Skills.className='title'

box4.className='features'

box5.className='features_item'
i.className='features_icon'
paragraph3.className='features_title'
paragraph4.className='features_text'

box6.className='features_item'
i2.className='features_icon'
paragraph5.className='features_title'
paragraph6.className='features_text'

box7.className='features_item'
i3.className='features_icon'
paragraph7.className='features_title'
paragraph8.className='features_text'

box8.className='features_item'
i4.className='features_icon'
paragraph9.className='features_title'
paragraph10.className='features_text'

span.innerHTML=`
Skills`

i.src='./images/logocamera.svg'

paragraph3.innerHTML=`Digital photography`
paragraph4.innerHTML=`High-quality photos in the studio and on the nature`

i2.src='./images/video.svg'

paragraph5.innerHTML=`Video shooting`
paragraph6.innerHTML=`Capture your moments so that they always stay with you`

i3.src='./images/photo.svg'

paragraph7.innerHTML=`Retouch`
paragraph8.innerHTML=`I strive to make photography surpass reality`

i4.src='./images/micro.svg'

paragraph9.innerHTML=`Audio`
paragraph10.innerHTML=`Professional sounds recording for video, advertising, portfolio`


const section2 = document.getElementById('section2')
const Portfolio = document.createElement('div')
const span2 = document.createElement('span')
const boxbtn = document.createElement('div')
const photodiv = document.createElement('div')

document.body.append(section2)
section2.append(Portfolio,boxbtn,photodiv)
Portfolio.append(span2)

span2.innerHTML=`Portfolio`
boxbtn.innerHTML=`
<button class="button2">Winter</button>
<button class="button2">Spring</button>
<button class="button2">Summer</button>
<button class="button2">Autumn</button>
`
 
photodiv.innerHTML=`
<img src="./images/1.jpg" class="img">
<img src="./images/2.jpg" class="img">
<img src="./images/3.jpg" class="img">
<img src="./images/4.jpg" class="img">
<img src="./images/5.jpg" class="img">
<img src="./images/6.jpg" class="img">
`

section2.className='section2'
boxbtn.className='boxbtn'
Portfolio.className='title2'
photodiv.className='photo'


const section3 = document.getElementById('section3')
const Video = document.createElement('div')
const span3 = document.createElement('span')
const videobox = document.createElement('div')
const i5 = document.createElement('img')

document.body.append(section3)
section3.append(Video,videobox)
videobox.append(i5)
Video.append(span3)

span3.innerHTML=`
Video
`
i5.src='./images/Play_hover.svg'
// videobox.innerHTML=`
// <img src"./images/Play_hover.svg" class="img2">

// `

Video.className='title3'
section3.className='section3'
videobox.className=`videobox`
i5.className='img2'

const section4 = document.getElementById('section4')
const Price = document.createElement('div')
const span4 = document.createElement('span')

const boxprice = document.createElement('div')

document.body.append(section4)
section4.append(Price,boxprice)
Price.append(span4)

span4.innerHTML=`
Price
`
boxprice.innerHTML=`
<div class="boxprice2">
<h2 class="h2">Standard</h2>
<p class="p500">500 $</p>
<p class="info">One location</p>
<p class="info">120 photos in color</p>
<p class="info">12 photos in retouch</p>
<p class="info">Readiness 2-3 weeks</p>
<p class="info">Make up, visage</p>
<button>Order shooting</button>

</div>
<div class="boxprice2">
<h2 class="h2">Premium</h2>
<p class="p500">700 $</p>
<p class="info">One or two locations</p>
<p class="info">200 photos in color</p>
<p class="info">20 photos in retouch</p>
<p class="info">Readiness 1-2 weeks</p>
<p class="info">Make up, visage</p>
<button>Order shooting</button>
</div>
<div class="boxprice2">
<h2 class="h2">Gold</h2>
<p class="p500">1000 $</p>
<p class="info">Three locations or more</p>
<p class="info">300 photos in color</p>
<p class="info">50 photos in retouch</p>
<p class="info">Readiness 1 week</p>
<p class="info">Make up, visage, hairstyle</p>
<button>Order shooting</button>
</div>
`

section4.className='section4'
Price.className='title4'
boxprice.className='boxprice'



const section5 = document.getElementById('section5')

 
document.body.append(section5)

section5.innerHTML=`
<div class="cme">
<h2 class="Contact">Contact me</h2>
<input type="text" class="Eph" placeholder='  E-mail'>
<input type="text" class="Eph" placeholder='  Phone'>
<input type="text" class="Message" placeholder='  Message'>
<button class="button3">Send message</button>
</div>
`
section5.className='section5'



const end = document.createElement('footer')

document.body.append(end)

end.className='fter'

end.innerHTML=`
<div class="end">
<img src="./images/ff.svg" class="end2">
<p class="end2">2022</p>
<p class="end2">github</p>
</div>

<div class="dvim">
<img src="./footer/1.svg" class="svg">
<img src="./footer/2.svg" class="svg">
<img src="./footer/3.svg" class="svg">
<img src="./footer/4.svg" class="svg">
</div>
`
