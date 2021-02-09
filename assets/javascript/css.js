var requestURL = "https://api.github.com/repos/30-seconds/30-seconds-of-css/git/trees/c6f0f3cd5f86a99a9f5f64e1f7516af143cca6";

var snippets = document.querySelector(".snippets");

fetch (requestURL)
    .then (function(response) {
        return response.json();
    })
    .then (function(data) {
        console.log(data);
        for (var i = 0; i < 4; i++) {

            // This section creates a random number so that each time snippets are shown on the page, they are a random collection of snippets.
            var max = (data.tree.length);
            var min = 0;
            var num = (Math.floor(Math.random() * (max - min)) + min);
        
            // This section creates the <li> and <a> elements that comprise the list of snippets and add the href to each entry. The random numbers generated above are used to determine the item from the snippet within the object. 
            var snippetName = document.createElement("li");
            var snippetAnchor = document.createElement("a");

            snippetAnchor.textContent = data.tree[num].path;
            snippetAnchor.setAttribute("href", ("https://github.com/30-seconds/30-seconds-of-css/tree/master/snippets/" + data.tree[num].path));
            snippetAnchor.setAttribute("target", "_blank");
            snippetName.appendChild(snippetAnchor);
            snippetName.className += "referenceList";
            snippets.appendChild(snippetName);

        }
    })


    // This function removes the existing snippets list.
    function removeSnippets() {
        while (snippets.firstChild) {
            snippets.removeChild(snippets.firstChild);
        }}

    // This is the event listener that allows the Shuffle button to display a new collection of snippets.
    $("#shuffle").on("click", function() {
        console.log("The button worked");
        removeSnippets();

        // After the removeSnippets function is called, the fetch request occurs again, providing new data to present on the page. 
        fetch (requestURL)
            .then (function(response) {
            return response.json();
    })
            .then (function(data) {
            for (var i = 0; i < 4; i++) {

            // This section creates a random number so that each time snippets are shown on the page, they are a random collection of snippets.
            var max = (data.tree.length);
            var min = 0;
            var num = (Math.floor(Math.random() * (max - min)) + min);
        
            // This section creates the <li> and <a> elements that comprise the list of snippets and add the href to each entry. The random numbers generated above are used to determine the item from the snippet within the object. 
            var snippetName = document.createElement("li");
            var snippetAnchor = document.createElement("a");

            snippetAnchor.textContent = data.tree[num].path;
            snippetAnchor.setAttribute("href", ("https://github.com/30-seconds/30-seconds-of-css/tree/master/snippets/" + data.tree[num].path));
            snippetAnchor.setAttribute("target", "_blank");
            snippetName.appendChild(snippetAnchor);
            snippetName.className += "referenceList";
            snippets.appendChild(snippetName);
        }
    })
    })