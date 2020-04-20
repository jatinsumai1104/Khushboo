var to = 'Khushboo 😺❤️';
var gift_url = 'http://www.amazon.com/gp/product/B00X4WHP5E/ref=ods_xs_ae_shurl?tag=googhydr-20&hvadid=74652194316&hvpos=1t1&hvexid=&hvnetw=g&hvrand=7560558939874219351&hvpone=&hvptwo=&hvqmt=b&hvdev=c&ref=pd_sl_2vatdqwe3p_b';
var gift_image_url = 'https://www.intouchsol.com/Content/Libraries//echo-blog-body.png';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");

var ans = ["Jatin", "Chirag", "Akshay", "Shyam", "Nikhil", "Dhiren", "Varun", "Akash", "Piyu", "Avisha", "Harsha", "Pearl", "Khushboo"];

var reviews = [
  `HHey Khushboo fakir, Happy Birthday❤️❤️,aaj tere UI ne bohot tang kiya h, ye website banate banate raghani ka HMI ka submission aatak gya😂. and Btw koi kuh bhi bole tereko UI aata h mere jitna nhi but chal jayega😂. Last me kehna chahunga ki agar naganda tereko class se bahar nikal rha h toh dusre din first bench pe chup chap nhi bethneka thoda sikh kuch apne mote se and hum devaro se😂😂.  Wish you a very Happy Birthday Quarantine Partner❤️❤️ have a great day.`,
  `Happy birthday fakirrrrrrrrrr
  Finally this quarantine period destroys all your birthday and Im very happy about that,and today I was so bored that I found all our pics and I will be posting it everywhere and be thankful to god that I have not used any cuss words in my paragraph.I hope it’s your worst birthday 😝`,
  `Happy Birthday Humari UI-Wizard✨🥳(khush mat ho sumai still better hai UI uthane me).Your Journey from being a first-bencher and a Teacher's pet to the girl on the last bench playing "Bollywood"  has been remarkable so far😂😂. Vo Train me Charades se lekar Malls me Deal NoDeal tak, Vo trains me TeenPatti se lekar Mote me Ghar pe Business tak, It all gets more fun when you're there... So stay as mad as you are and Once again Happy Birthday KHUBU!!!🎂🥳🍻 (Fakiiiiiiiiiiiiiiiiirrrrrrrr😂)
  PS: BC wee need more Pics together mere pass Ek Bhi pic nai h tere saath🥺`,
  `You are so lucky q ki har exam Mae hota hu saath Mae padhne k liye aur tabhi tera acha pointer ata h Hope your birthday is as special as you are.May all of your dreams come true. Thanks for being such a great friend. Happy birthday!`,
  `From the day we met every minute , every second we spend together is and always will be special for me. The day I found u ,I not only found a good friend but also love of my life . Our journey together will make us love each other more than we can apprehend. 
  Happy birthday Dear. 
  May god bless u with more of me and bless me with more of u`,
  `Chandnani , Happy Birthday Topper. Kahan se kahan aagye tum : scholor jiski itni fatti thi college se to scholar jiski abhi aur zyada fatti hai college se. Progress growth ekdum perfect hai. But khushboo yaar abhi toh college khatam horha toh itni mehnat jo ki tune 4 saal college mai teachers ke sath uska kya fayda hua? Whatsapp par unse baat hi kar pati hai na? Woh toh Varun bhi karleta hau aur galliyan kha lete hai usme kya hai ab?  Anyway , Happy Quarantine birthday girl ♥️, I hope you've a great one and all the best for Steady wills. 
  #TopperHiRahegiTu`,
  `Happy Birthday Khushboo enjoy your day and an amazing upcoming year as well. Hope your startup booms this year aur tu humse double kamaye aur I hope mein tujhe sade chee pr vapas harau😂 Happy Birthday once again!!`,
  `Hey khushboo fakir, khushboo fakir, khushboo fakir , khushboo fakir, khushboo fakir. Chal bas kaafi hogaya 😂. Hey khushboo ! Wish you a very very Happy birthday 🎈🎂🎉. Dusro ke photos apni phone se delete kar dena bina bheje buri baat hai and I am glad you have learnt it being with me. Chappal ke badle chappal leni Chahiye thi tujhe mote se vaha scope of improvement hai abhi aur. Haar jeet toh Hoti rehti hai life mein aur games(chess) mein, tere case mein sirf haar par hume unse dil chota nahi karna Chahiye aur haar maan Leni Chahiye shanti se. Aur haan mein aur Mota kitna durr rehte hai uss baat se mere aur mote ka amount of time spend together nahi kam hoga kabhi. Mera hakk jyada hai aur rahega hamesha mote ke ghar par. Par yeh sab choti choti baato mein kya rakha hai. Jaane de inko. Wish you a very very happy birthday once again♥`,
  `Hey Khushboo,

  To the most hardworking person I've met. I've had one of the best memories with you. Humari B.E. trip .. Chandigarh ki dj night. Dj night k baad photo shoot. Rock garden me weird poses vale statues k sath pictures. Manali me new year. Dalhousie me snowfall me slomo videos. Grass wall k yaha full blogger style shoot. Amritsar me shopping for dupatta, jutti and what not. Delhi mein full street shopping under 2 hours. Train gossips. 
  Joey's pizza. Barbecue nation. Movies. 
  But the best of all for me was yacht time. 
  
  Happiest birthday Darling 🎂💞💋🍻`,
  `Though I agree we didn’t spend days together lately but we have spent a quality time since 2015. 
  You were always the one to come up with cute tantrums. You will always be the one to have a special corner in my heart for the way you have helped me everytime. From talking to gossiping we did come a long way. 
  Your friendship has been a joy to me. I wish you a very best of the birthdays and look forward to your friendship for many years ahead!
  HAPPY BIRTHDAY❤️💗`,
  `Happy birthday roommate .
  You are the one and only who made me comfortable in this group , I am really thankful for that . Aur tera UI sikhana muje hamesha yaad rahega😂. I wish tera birthday itna khrab na jaye , happy birthday guruji😂`,
  `From fighting for the seat in bus to fighting together with problems
  From talking and doing masti in bus to  talking abt life ssly 
  From same school same subjects to different course different subjects 
  From same collage same friends circle to different collage different friend..
  From doing night for studies to doing nights for masti.. 
  From visiting each other's home for studies. To visiting each other's home for birthdays and parties
  From drinking water in water bottles to drinking vodka together 
  Life has changed alot 
  The only thing remained constant in my life is you.. 
  Thank you for always being with me in every phase of life.. 
  As you are the only person who there with me for last 11 years 
  You are more than a friend you are family ❤️
  Wishing you a happiest bday khushboo ❤ #MissPinkLover ❤`,
  `khushboo u r one of the most dedicated and  beautiful person i have ever know in my life.
  Many people will come and go but u will always be a constant in my life.
  we together have travelled alot in this journey of life and will also continue further towards the brighter future.
  We have changed and u r the girl i one day dreamt of turning into my dream girl ❤❤😍`
];
var already_done = [];

function init() {

  present.addEventListener("click", function (e) {
    document.getElementById("present_text").style.display = "block";
    if (already_done.length != ans.length) {
      random_num = Math.floor((Math.random() * 13));
      console.log(random_num);
      if (already_done.includes(random_num)) {
        do {
          console.log(random_num);
          random_num = Math.floor((Math.random() * 13));
        } while (already_done.includes(random_num));
      }
      already_done.push(random_num);

      present.classList.add("open");
      console.log(ans[random_num]);
      document.getElementById("guess_img").src = "images/posts/" + ans[random_num] + ".jpg";
      setTimeout(function () {
        document.getElementById("questions").style.visibility = "visible";
        document.getElementById("questions").style.opacity = 1;
        document.getElementById("questions").style.display = "block";
      }, 300);
    } else {
      window.alert("Oo Beta, Sunn Meri Batt bht hogya tera😂");
    }
  }, true);

  document.getElementById("view_answer").addEventListener("click", function (e) {
    document.getElementById("reviewer_name_with_khushboo").src = "images/pics_with_khushboo/" + ans[random_num] + ".jpeg";
    document.getElementById("reviewer_name").innerHTML = ans[random_num];
    document.getElementById("review").innerHTML = reviews[random_num];

    document.getElementById("questions").style.visibility = "hidden";
    document.getElementById("questions").style.opacity = 0;
    document.getElementById("questions").style.display = "none";
    document.getElementById("answers").style.visibility = "visible";
    document.getElementById("answers").style.opacity = 1;
    document.getElementById("answers").style.display = "block";
  }, true);


  document.getElementById("guess_another").addEventListener("click", function (e) {
    document.getElementById("answers").style.visibility = "hidden";
    document.getElementById("answers").style.opacity = 1;
    document.getElementById("answers").style.display = "none";
    document.getElementById("present_text").style.display = "none";
    setTimeout(function () {
      present.classList.remove("open");
    }, 300);
  }, true);


  nametag.innerText = to;
}

init();
