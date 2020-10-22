const app = document.getElementById('root');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=parkering_rorelsehindrade&q=', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    
    data.records.forEach(pplatser => {
      
      const pplats = document.createElement('div');
      pplats.setAttribute('class', 'pplats');

      const h1 = document.createElement('h1');
      h1.textContent = pplatser.namn;
      console.log(pplatser.namn)
    //  const p = document.createElement('p');
    //  persons.description = persons.description.substring(0, 300);
    //  p.textContent = `${persons.description}...`;

      container.appendChild(pplats);
      pplats.appendChild(h1);
    //  person.appendChild(p);
    });
  } 
  // If there no such file or bad request. 
  else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Could not find a file';
    app.appendChild(errorMessage);
  }
}

request.send();





/*
const app = document.getElementById('root');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=parkering_rorelsehindrade&q=', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    
    data.records.forEach(pplatseer => {
        pplatseer.fields.forEach(pplatser => {
          const pplats = document.createElement('div');
          pplats.setAttribute('class', 'pplats');

          const h1 = document.createElement('h1');
          h1.textContent = pplatser.namn;
          console.log(pplatser.namn)
        //  const p = document.createElement('p');
        //  persons.description = persons.description.substring(0, 300);
        //  p.textContent = `${persons.description}...`;

          container.appendChild(pplats);
          pplats.appendChild(h1);
        //  person.appendChild(p);
    });
  })
}
  // If there no such file or bad request. 
  else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Could not find a file';
    app.appendChild(errorMessage);
  }
}

request.send();
*/