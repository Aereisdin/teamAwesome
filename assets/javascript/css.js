var requestURL = "https://api.github.com/repos/30-seconds/30-seconds-of-css/git/trees/c6f0f3cd5f86a99a9f5f64e1f7516af143cca6";

var snippets = document.querySelector(".snippets");

fetch (requestURL)
    .then (function(response) {
        return response.json();
    })
    .then (function(data) {
        console.log(data);
        for (var i = 0; i < 4; i++) {
            console.log("Snippet name is: " + data.tree[i].path)
            
            var snippetName = document.createElement("li");
            var snippetAnchor = document.createElement("a");

            snippetAnchor.textContent = data.tree[i].path;
            snippetAnchor.setAttribute("href", ("https://github.com/30-seconds/30-seconds-of-css/tree/master/snippets/" + data.tree[i].path));
            snippetAnchor.setAttribute("target", "_blank");
            snippetName.appendChild(snippetAnchor);
            snippets.appendChild(snippetName);

        }
    })