// create a new XHR request
var xhr = new XMLHttpRequest();

// url of the file
var url = './health_article.json';

// open a get request to the file
xhr.open('GET', url, true);

// the response to be json
xhr.responseType = 'json';

// when data loads
xhr.onload = function(){
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
    
        var title = document.createElement('h2');
        title.textContent = article.title;
    
        var description = document.createElement('p');
        description.textContent = article.description;
    
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';
    
        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });
    
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';
    
        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });
    
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);
    
        articlesDiv.appendChild(articleDiv);
    });
}

// Handle network errors
xhr.onerror = function() {
    console.error('Network error');
};

xhr.send();