let handleSuccess = function (response) {
  // handle success
  console.log('Tired')
  console.log(response)
  for (let i = 0; i < response.data.length; i++) {
    // console.log(response.data[i]);
    let messages = response.data[i]

    document.querySelector('ul').innerHTML += `
      <li>
       <div class="chat-box">
         <img src=${messages.profilePic}>
         <div class="msg"><h4>${messages.name}</h4>
           <p class="num">${messages.number}</p> 
           <p class="first-line">${messages.firstLine}</p>
         </div>
         <div class="dt">
           <p class="msg-time">${messages.time}</p>
           <p class="unread">${messages.numbUnread}</p> 
         </div>
        </div> 
      </li>`
    if (response.data.numbUnread > 0) {
      document.getElementsByClassName('chat-box').style.backgroundColor = 'red'
    }
  }

  // document.querySelector("ul").innerHTML=
}

axios
  .get('https://tk-whatsapp.herokuapp.com/messages')
  .then(handleSuccess)
  // handle success is a callback function
  // jab request ayegi to then chalega
  .catch(function (error) {
    // handle error
    console.log('Rttot')
    console.log(error)
  })
  .finally(function () {
    // always executed
    console.log('The end')
  })
