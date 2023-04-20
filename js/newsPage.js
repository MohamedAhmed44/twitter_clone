// DOM Elements
const mainPage = document.querySelector(".main-page");
const loginPage = document.querySelector(".login-page");
const middleContent = document.querySelector(".middle-content");
const btnTop = document.querySelector(".btn-top");
const newsFeedPage = document.querySelector(".feeds-page");
const loginModal = document.querySelector(".login-modal");
const modalX = document.querySelector(".login-modal i");
const loginFormBtn = document.querySelector(".login-form-btn");
const postBtn = document.querySelector(".post-btn");
const modalWrapper = document.querySelector(".modal-wrapper");
const modal = document.querySelector(".modal");
const postModalX = document.querySelector(".modal-header i");
const modalPostBtn = document.querySelector(".modal-header button");
const modalFooterPlus = document.querySelector(".modal-footer span");
const modalInput = document.querySelector(".modal-input");
const user = document.querySelector(".user");
const sidebar = document.querySelector(".sidebar");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const xBtn = document.querySelector(".sidebar-header i");
const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");
const hiddinsidebar = document.querySelector(".sidebar-wrapper");
/**************************************/
// following the Friends
const following = document.querySelectorAll(".follow-btn");
var counter = 711;
// const countFollowing = document.querySelector(".count");

function follow() {
  if (this.textContent === "Follow") {
    this.textContent = "Following";
    this.style.backgroundColor = "#1aa1f5";
    this.style.color = "white";
    counter = document.querySelector(".count").textContent = counter + 1;
  } else {
    this.textContent = "Follow";
    this.style.backgroundColor = "white";
    this.style.color = "#1aa1f5";
    counter = document.querySelector(".count").textContent = counter - 1;
  }
}

following.forEach(function (btn) {
  btn.addEventListener("click", follow);
});

/**************************************/
//show more
const showMoreLink = document.querySelector(".follow-link a");
const hiddenDiv1 = document.querySelector(".MyProfile1");
const hiddenDiv2 = document.querySelector(".MyProfile2");

showMoreLink.addEventListener("click", function () {
  hiddenDiv1.style.display = "flex";
  hiddenDiv2.style.display = "flex";
});

/**************************************/
//open camera
const openCameraBtn = document.getElementById("openCameraBtn");
const videoElement = document.getElementById("videoElement");

openCameraBtn.addEventListener("click", () => {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      videoElement.srcObject = stream;
      videoElement.play();
    })
    .catch((err) => {
      console.log("Error: " + err);
    });
});

// News feed page
// Post modal

/**************************************/
// open stickers
const smile = document.querySelector(".fa-smile");
smile.addEventListener("click", function (event) {
  KeyboardEvent(event.code === "KeyS" && event.metaKey);
});

/**************************************/

// write new post
postBtn.addEventListener("click", () => {
  modal.style.display = "block";
  modalWrapper.classList.add("modal-wrapper-display");
});

const changeOpacity = (x) => {
  modalPostBtn.style.opacity = x;
  modalFooterPlus.style.opacity = x;
};

postModalX.addEventListener("click", () => {
  modal.style.display = "none";
  modalWrapper.classList.remove("modal-wrapper-display");

  if (modalInput.value !== "") {
    modalInput.value = "";
    changeOpacity(0.5);
  }
});

modalInput.addEventListener("keypress", (e) => {
  if (e.target.value !== "") {
    changeOpacity(1);
  }
});

modalInput.addEventListener("blur", (e) => {
  if (e.target.value === "") {
    changeOpacity(0.5);
  }
});

/********************************************* */
// show Sidebar
user.addEventListener("click", () => {
  sidebar.classList.add("sidebar-display");
  sidebarWrapper.classList.add("sidebar-wrapper-display");
});

xBtn.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-display");
  sidebarWrapper.classList.remove("sidebar-wrapper-display");
});

hiddinsidebar.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-display");
  sidebarWrapper.classList.remove("sidebar-wrapper-display");
});
/*********************************************/
// dark mode
const darkElements1 = document.querySelectorAll(".dark-mode-1");
const darkElements2 = document.querySelectorAll(".dark-mode-2");
const lighTexts = document.querySelectorAll(".light-text");
const borders = document.querySelectorAll(".border");

toggle.addEventListener("click", () => {
  circle.classList.toggle("move");
  Array.from(darkElements1).map((darkEl1) =>
    darkEl1.classList.toggle("dark-1")
  );
  Array.from(darkElements2).map((darkEl2) =>
    darkEl2.classList.toggle("dark-2")
  );
  Array.from(lighTexts).map((lighText) => lighText.classList.toggle("light"));
  Array.from(borders).map((border) => border.classList.toggle("border-color"));
});

// ************************************************************************************************


// sidebar keroles
/********************************************* */
// show Sidebar
const user2 = document.querySelector("#message");
const sidebar2 = document.querySelector(".sidebar2");
const sidebarWrapper2 = document.querySelector(".sidebar-wrapper2");
const xBtn2 = document.querySelector(".sidebar-header2 i");
const hiddinsidebar2 = document.querySelector(".sidebar-wrapper2");

user2.addEventListener("click", () => {
  sidebar2.classList.add("sidebar-display2");
  sidebarWrapper2.classList.add("sidebar-wrapper-display2");
});

xBtn2.addEventListener("click", () => {
  sidebar2.classList.remove("sidebar-display2");
  sidebarWrapper2.classList.remove("sidebar-wrapper-display2");
});

hiddinsidebar2.addEventListener("click", () => {
  sidebar2.classList.remove("sidebar-display2");
  sidebarWrapper2.classList.remove("sidebar-wrapper-display2");
});
/*********************************************/
// dark mode
const darkElements12 = document.querySelectorAll(".dark-mode-12");
const darkElements22 = document.querySelectorAll(".dark-mode-22");
const lighTexts2 = document.querySelectorAll(".light-text2");
const borders2 = document.querySelectorAll(".border2");

toggle.addEventListener("click", () => {
  circle.classList.toggle("move2");
  Array.from(darkElements12).map((darkEl1) =>
    darkEl1.classList.toggle("dark-12")
  );
  Array.from(darkElements22).map((darkEl2) =>
    darkEl2.classList.toggle("dark-22")
  );
  Array.from(lighTexts2).map((lighText) => lighText.classList.toggle("light"));
  Array.from(borders2).map((border) => border.classList.toggle("border-color"));
});

// Asma post

// show Or Hide New Post Card
let startNewPost = document.getElementById("in_new_post_starter");
let newContantPost = document.getElementById("in_new_post_content");
function showOrHideNewPostCard() {
  let popUp = document.getElementById("div_modal");
  let overlay = document.getElementById("overlay");
  let textStored, linesCount;

  if (popUp.style.opacity == "1") {
    popUp.style.opacity = "0";
    popUp.style.transitionDuration = ".3s";
    popUp.style.pointerEvents = "none";
    // popUp.classList.add("popUpStyl")

    overlay.style.opacity = "0";
    overlay.style.transitionDuration = ".2s";
    overlay.style.pointerEvents = "none";

    textStored = newContantPost.value;
    linesCount = newContantPost.rows;
    startNewPost.value = textStored;
    startNewPost.rows = linesCount;
    startNewPost.focus();
  } else {
    popUp.style.opacity = "1";
    popUp.style.transitionDuration = ".3s";
    popUp.style.pointerEvents = "auto";
    // popUp.classList.remove("popUpStyl");

    overlay.style.opacity = "1";
    overlay.style.transitionDuration = ".2s";
    overlay.style.pointerEvents = "auto";

    textStored = startNewPost.value;
    linesCount = startNewPost.rows;
    newContantPost.value = textStored;
    newContantPost.rows = linesCount;
    newContantPost.focus();
  }
}

startNewPost.addEventListener("click", showOrHideNewPostCard);

// when click on ESC button close the write new post
newContantPost.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    showOrHideNewPostCard();
  }
});

// end -- show Or Hide New Post Card --------------------------------------------------------------------------

// Post button
let btnConfirm = document.getElementById("btn_confirm_post");
btnConfirm.addEventListener("click", function () {
  let text = newContantPost.value;
  let picture = document.getElementById("img_chosen").src;

  createNewPost(text, picture, null);

  //close modal and empty input
  newContantPost.value = "";
  document.getElementById("img_chosen").src = "";
  document.getElementById("div_new_post_img").style.borderWidth = "0px";
  document.getElementById("img_chosen").style.display = "none";

  showOrHideNewPostCard();
});

newContantPost.addEventListener("input", function () {
  newContantPost.value.length != 0
    ? (btnConfirm.disabled = false)
    : (btnConfirm.disabled = true);
});

// add photo to post
var loadFile = function (event) {
  document.getElementById("div_new_post_img").style.borderWidth = "1px";
  var image = document.getElementById("img_chosen");
  image.src = URL.createObjectURL(event.target.files[0]);
  document.querySelector("#div_modal #div_new_post_img i").style.display =
    "inline-block";
};
// remove photo
var removeFile = function (event) {
  document.getElementById("div_new_post_img").style.borderWidth = "0px";
  var image = document.getElementById("img_chosen");
  image.src = "";
  document.querySelector("#div_modal #div_new_post_img i").style.display =
    "none";
};

//////////////////////////////////////////////////////////////////////////////////////
// ------------------------ Data Grabbing Functions ------------------------------ //
////////////////////////////////////////////////////////////////////////////////////

let postsLayout = document.querySelector("#main_container");

// Show posts from local Storage

function gettingDataFromLocalServer(key, doWithData) {
  let posts;
  localStorage.getItem(key) == null
    ? (posts = [])
    : (posts = JSON.parse(localStorage.getItem(key)));
  doWithData(posts);
}

function makingPostsOutOfData(Data, nextElement) {
  Data.forEach((post) => {
    let divCardPost = document.createElement("div");
    divCardPost.classList.add("div-card-post");
    divCardPost.id = post.postID;

    // =============== Post ================ //

    createPostHead(
      divCardPost,
      post.owner.picture,
      post.owner.firstName,
      post.owner.lastName,
      new Date(post.publishDate).toUTCString()
    );

    createPostBody(divCardPost, post.text, post.image);

    createLikeCommentShareBtns(divCardPost, post);

    // =============== Comment Section ================ //

    post.comments.forEach((comment) => {
      showComment(
        divCardPost,
        comment.owner.name,
        comment.owner.picture,
        post.id,
        comment.text,
        comment.likes,
        comment.likeDetails
      );
    });

    createWriteAComment(divCardPost, src="/img/user1.jpg");

    //Insert post to the page
    postsLayout.insertBefore(divCardPost, nextElement);
  });
}

//////////////////////////////////////////////////////////////////////////////////////
// ------------------------ Creational Functions --------------------------------- //
////////////////////////////////////////////////////////////////////////////////////

function createNewPost(text, picture, video) {
  let newPost = {
    owner: {
      picture: src="/img/user1.jpg",
      firstName: "Asmaa",
      lastName: "Ali",
    },
    publishDate: new Date().toUTCString(),
    text: text,
    image: picture,
    likes: 0,
    comments: [],
  };

  //Getting posts from local
  let localPosts;
  gettingDataFromLocalServer("posts", function (posts) {
    localPosts = posts;
  });

  //Adding Post
  localPosts.unshift(newPost); //Using unshift() to add for the beginning to let the new posts show up first

  //Back to save in local
  localStorage.setItem("posts", JSON.stringify(localPosts));

  makingPostsOutOfData([newPost]);
}

function createPostHead(divCardPost, avatar, firstname, lastname, publishDate) {
  let divPostHead = document.createElement("div");
  divPostHead.id = "div_post_head";
  let img_post_creator = document.createElement("img");
  img_post_creator.src = avatar;
  img_post_creator.id = "img_post_creator";

  let span1 = document.createElement("span");
  let h4_1_1 = document.createElement("h4");
  h4_1_1.id = "h4_post_creator_name";
  h4_1_1.innerHTML = firstname + " " + lastname;

  let span1_1 = document.createElement("span");
  span1_1.innerHTML = publishDate + " . ";
  let i1_1 = document.createElement("i");
  i1_1.id = "i_post_publicity_state";
  i1_1.classList.add(...["fa-solid", "fa-user-group", "fa-xs"]);
  span1_1.appendChild(i1_1);

  span1.appendChild(h4_1_1);
  span1.appendChild(span1_1);

  divPostHead.appendChild(img_post_creator);
  divPostHead.appendChild(span1);
  // di

  divCardPost.appendChild(divPostHead);
}

//TODO if you add video input this is the place
//TODO detect hashTag (Optional)

function createPostBody(divCardPost, text, image) {
  if (text.length != 0) {
    let p_post_caption = document.createElement("p");
    p_post_caption.innerHTML = text;
    p_post_caption.id = "p_post_caption";

    //Define direction of writing
    if (
      /^[^a-zA-Z0-9]+$/.test(p_post_caption.innerHTML) &&
      p_post_caption.innerHTML != ""
    ) {
      p_post_caption.dir = "rtl";
      p_post_caption.style.fontSize = "20px";
    } else p_post_caption.dir = "ltr";

    divCardPost.appendChild(p_post_caption);
  }

  let img_post_content = document.createElement("img");
  img_post_content.src = image;
  img_post_content.id = "img_post_content";
  divCardPost.appendChild(img_post_content);
}

// create Post Counters
function createPostCounters(divCardPost, likes, likeDetails, comments) {
  let div_post_interactions_counters = document.createElement("div");
  div_post_interactions_counters.id = "div_post_interactions_counters";
  let i_like_ico = document.createElement("i");

  //TODO change to love or hahaha
  i_like_ico.id = "i_like_ico";
  i_like_ico.classList.add("fas");
  i_like_ico.classList.add("fa-thumbs-up");
  i_like_ico.id = "i_like_ico";
  
  let span_post_interactions_counter = document.createElement("span");
  span_post_interactions_counter.id = "span_post_interactions_counter";
  span_post_interactions_counter.innerHTML = likes;

  let span_top_interactions_icons = document.createElement("span");
  span_top_interactions_icons.id = "span_top_interactions_icons";

  let span_comments_counter = document.createElement("span");
  span_comments_counter.id = "span_comments_counter";
  span_comments_counter.innerHTML = `comments.length + <i class="far fa-comment"></i>`;

  let hr1 = document.createElement("hr");
  hr1.style.marginBottom = "2px";
}

//  Create Like Comment Share Buttons
function createLikeCommentShareBtns(divCardPost, post) {
  let div_post_interactions = document.createElement("div");
  div_post_interactions.id = "div_post_interactions";

  let l_post_react = document.createElement("label");
  l_post_react.id = "l_post_react";
  l_post_react.for = "checkbox_like";

  let checkbox_like = document.createElement("input");
  checkbox_like.id = "checkbox_like";
  checkbox_like.type = "checkbox";

  let i_post_react = document.createElement("i");
  i_post_react.id = "i_post_react";
  i_post_react.classList.add("far");
i_post_react.classList.add("fa-heart");
  i_post_react.style.marginRight = "6px";
  l_post_react.appendChild(checkbox_like);
  l_post_react.appendChild(i_post_react);
  // l_post_react.innerHTML += "Like";

  let span_post_comment = document.createElement("span");
  span_post_comment.id = "span_post_comment";

  let i_post_comment = document.createElement("i");
  i_post_comment.id = "i_post_comment";
  i_post_comment.classList.add("far");
  i_post_comment.classList.add("fa-comment");
  i_post_comment.style.marginRight = "6px";
  span_post_comment.appendChild(i_post_comment);
  // span_post_comment.innerHTML += "Comment";
  span_post_comment.addEventListener("click", function () {
    document.querySelector("#" + post.postID + " #in_comment").focus();
  });

  let span_post_share = document.createElement("span");
  span_post_share.id = "span_post_share";

  let i_post_share = document.createElement("i");
  i_post_share.id = "i_post_share";
  i_post_share.classList.add("fas");
  i_post_share.classList.add("fa-retweet");
  i_post_share.style.marginRight = "6px";
  span_post_share.appendChild(i_post_share);
  // span_post_share.innerHTML += " Share";
  //TODO share post (Optional)

  let hr2 = document.createElement("hr");
  hr2.style.marginTop = "2px";

  div_post_interactions.appendChild(l_post_react);
  div_post_interactions.appendChild(span_post_comment);
  div_post_interactions.appendChild(span_post_share);

  divCardPost.appendChild(div_post_interactions);
  divCardPost.appendChild(hr2);
}

function createWriteAComment(divCardPost, selfAvatar) {
  let div_write_comment = document.createElement("div");
  div_write_comment.id = "div_write_comment";
  let img_personal = document.createElement("img");
  img_personal.id = "img_personal";
  img_personal.className = "img-personal";
  img_personal.src = selfAvatar;

  let l_write_comment = document.createElement("label");
  l_write_comment.id = "l_write_comment";
  let in_comment = document.createElement("textarea");
  in_comment.id = "in_comment";
  in_comment.placeholder = "Write a comment";
  in_comment.rows = "1";
  // in_comment.type = "text";
  in_comment.style.resize = "none";
  in_comment.style.overflow = "hidden";
  in_comment.style.padding = "4px 0px";

  let linesCount = 1;

  //reverse the typing direction based on what language you type in
  // in_comment.addEventListener("input", function () {
  //   addOrRemoveLines(in_comment);

  //   if (/^[^a-zA-Z0-9]+$/.test(this.value) && this.value != "") {
  //     in_comment.dir = "rtl";
  //     span4_1.style.right = null;
  //     span4_1.style.left = "4px";
  //   } else {
  //     in_comment.dir = "ltr";
  //     span4_1.style.left = null;
  //     span4_1.style.right = "4px";
  //   }
  // });

  //showComment when pressing enter or Add line when Enter + Shift
  // in_comment.addEventListener("keydown", function (e) {
  //   addOrRemoveLines(e.target);

  //   if (e.key === "Enter") {
  //     if (e.shiftKey) {
  //       linesCount++;
  //       in_comment.rows = linesCount;
  //     } else {
  //       e.preventDefault();

  //       // divCardPost.removeChild(in_comment.parentNode.parentNode);

  //       showComment(
  //         divCardPost,
  //         getCookie("firstname") + " " + getCookie("surname"),
  //         getCookie("avatar"),
  //         divCardPost.id,
  //         e.target.value,
  //         0,
  //         []
  //       );

  //       // createWriteAComment(divCardPost, getCookie("avatar"));
  //       e.target.value = "";
  //       e.target.rows = "1";
  //     }
  //   }
  // });

  //to decrease lines when removing

  let span4_1 = document.createElement("span");
  span4_1.className = "span-btns-in-comment";

  let i4_1 = document.createElement("i");
  i4_1.classList.add("fab");
  i4_1.classList.add("fa-pied-piper-square");
  let l1_1 = document.createElement("label");
  l1_1.for = "in_img_comment";
  let in_img_comment = document.createElement("input");
  in_img_comment.id = "in_img_comment";
  in_img_comment.type = "file";
  in_img_comment.style.display = "none";
  let i7_1 = document.createElement("i");
  i7_1.classList.add("fas");
  i7_1.classList.add("fa-camera");

  l1_1.appendChild(in_img_comment);
  l1_1.appendChild(i7_1);

  let i6_1 = document.createElement("i");
  i6_1.classList.add("fas");
  i6_1.classList.add("fa-face-laugh-wink");

  span4_1.appendChild(i4_1);
  // span4_1.appendChild(i5_1);
  span4_1.appendChild(l1_1);
  span4_1.appendChild(i6_1);
  span4_1.style.position = "absolute";
  span4_1.style.bottom = "4px";
  span4_1.style.right = "4px";

  l_write_comment.appendChild(in_comment);
  l_write_comment.appendChild(span4_1);

  let span_comment_img = document.createElement("span");
  span_comment_img.id = "span_comment_img";
  let in_comment_img = document.createElement("img");
  in_comment_img.className = "in-comment-img";
  let i3_1 = document.createElement("i");
  i3_1.classList.add("fas");
  i3_1.classList.add("fa-xmark");

  span_comment_img.appendChild(in_comment_img);
  span_comment_img.appendChild(i3_1);

  div_write_comment.appendChild(img_personal);
  div_write_comment.appendChild(l_write_comment);
  div_write_comment.appendChild(span_comment_img);

  divCardPost.appendChild(div_write_comment);
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//
// search
const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

let users = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  users.forEach((user) => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  });
  userCardContainer.classList.toggle("user-cards", value === "");
});

fetch("json/Data.json")
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = user.name;
      body.textContent = user.email;
      userCardContainer.append(card);
      return { name: user.name, email: user.email, element: card };
    });
  });

///////////////////////////////// highlighting ////////////////////////////

// const searchInputd = document.getElementById("search");

// searchInputd.addEventListener("input", function () {
//   const searchValue = this.value.trim();
//   const pageContent = document.body.innerHTML;
//   const highlightedContent = pageContent.replace(
//     new RegExp(searchValue, "gi"),
//     '<span class="highlight">$&</span>'
//   );
//   document.body.innerHTML = highlightedContent;
// });