function getWord() 
{
    let x = (document.getElementById("wordValue")).value;
    // normalize string - remove white spaces,numbers and non-alphabetic characters
    if(x == "")
    {alert ("Please enter a value")};

    let h = x.replace().replace(/[^a-zA-Z0-9 ]/g, '');
    let b = h.replace(/ /g,'');
    let g = b.toLowerCase();
    let u = g.replace(/[0-9]/g, '');

    //create an array from each character in the word:
    let forwardsArray = u.split("");
    CreateBackwardsArray(forwardsArray);
}

    function CreateBackwardsArray(forwardsArray)
{
    //create an index counter for the creation of a new array to hold the values backwards
    let total = 0;
    for (i in forwardsArray) {
    total++;
    }
    // intialize new array, create the array which contains the values backwards.
    var backwardsArray = [];
    count =0;
    for(i=total-1; i>=0; i--)
    {
        backwardsArray[count] = forwardsArray[i]
        count++
    }
    displayPalindrome(forwardsArray, backwardsArray);
}


    function displayPalindrome(forwardsArray, backwardsArray)
{
    // convert the arrays into strings to display to the screen
    var out1 = forwardsArray.join("");
    var out2 = backwardsArray.join("");

    //display the output to the screen.
    if(out1 == out2)
    {
        var d = document.getElementById("output1");
        d.classList.remove("invisible");
        d.innerHTML = `<b>Congratulations! You have entered a Palindrome.</b><br><hr>
                      <em>Your word reversed is:</em><b> ${out2}</b>`;
    }
    else
    {
        var d = document.getElementById("output1");
        d.classList.remove("invisible");
        d.innerHTML = `<b>Sorry, You have not entered a Palindrome.</b><br><hr>
                       Your word reversed is:<em> ${out2}</em>`;
     }
}
   