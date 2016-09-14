if (document.addEventListener) {
    document.addEventListener("click", handleClick, false);
}
else if (document.attachEvent) {
    document.attachEvent("onclick", handleClick);
}

function handleClick(event) {
    event = event || window.event;
    event.target = event.target || event.srcElement;

    var element = event.target;

    // Climb up the document tree from the target of the event
    while (element) {
        if (element.nodeName === "BUTTON" && /foo/.test(element.className)) {
            // The user clicked on a <button> or clicked on an element inside a <button>
            // with a class name called "foo"
            doSomething(element);
            break;
        }

        element = element.parentNode;
    }
}

function doSomething(button) {
    // do something with button

 document.getElementById("show").innerHTML = button.innerHTML+Date();
}

/*
Anywhere on the page that a <button class="foo">...</button> element appears, clicking it, or any HTML tag inside of it, will run the doSomething function.

Since Event Delegation is used, only a single click handler is registered on the document object. If more <button>s are created as a result of an AJAX call, you don't have to register click handlers on those new <button>s since we take advantage of the click event bubbling up from the element the user clicked on to the document object itself.
*/
