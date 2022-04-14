
var btn = document.querySelector('button');
// btn.onclick = displayMessage();
/*You might be wondering why we didn't include the parentheses after the function name.
 This is because we don't want to call the function immediately, only after the button has been clicked
 so we remove the parentheses.
 Parentheses are called "function call/invocation operator". 
 You only use them when you want to execute the function immediately in the current scope.*/
// btn.onclick = displayMessage;

// btn.onclick = function() {
//     displayMessage('Your inbox is almost full — delete some mails', 'warning');
//   };

  btn.onclick = function() {
    displayMessage('Brian: Hi there, how are you today?','chat');
  };
  

function displayMessage(msgText, msgType) {
    var html = document.querySelector('html');

    var panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);

    var msg = document.createElement('p');
    msg.textContent = msgText;
    panel.appendChild(msg);

    var closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);

    closeBtn.onclick = function () {
        //anonymous function
        panel.parentNode.removeChild(panel);
    }


    if (msgType === 'warning') {
        msg.style.backgroundImage = 'url(icons/warning.png)';
        panel.style.backgroundColor = 'red';
      } else if (msgType === 'chat') {
        msg.style.backgroundImage = 'url(icons/chat.png)';
        panel.style.backgroundColor = 'aqua';
      } else {
        msg.style.paddingLeft = '20px';
      }
      

}

// displayMessage();

