
// console.log("content.js running")

// try {


function color() {


  try {
    chrome.storage.sync.get(["key"]).then((result) => {
      console.log("Value currently is " + result.key);
      color1 = ''
      color2 = ''
      accent = ''

      if (result.key == "1") {
        color2 = '#FFC20A';
        color1 = '#0C7BDC';
        accent = '#0C7BDC';

      } else if (result.key == "2") {

        color2 = '#994F00'
        color1 = '#006CD1'
        accent = '#006CD1'

      } else if (result.key == "3") {

        color2 = '#E1BE6A'
        color1 = '#40B0A6'
        accent = '#40B0A6'

      } else if (result.key == "4") {
        color2 = '#E66100'
        color1 = '#5D3A9B'
        accent = '#5D3A9B'
      } else if (result.key == "5") {
        color2 = '#1AFF1A'
        color1 = '#4B0092'
        accent = '#4B0092'
      }
      else if (result.key == "6") {
        color2 = '#FEFE62'
        color1 = '#D35FB7'
        accent = '#D35FB7'
      } else if (result.key == "7") {
        color2 = '#005AB5'
        color1 = '#DC3220'
        accent = '#DC3220'
      } else if (result.key == "8") {
        color2 = '#1A85FF'
        color1 = '#D41159'
        accent = '#D41159'
      };



      body = document.querySelector("body");
      body.style.backgroundColor = color1




      const code = document.querySelectorAll("code");
      if (code != null) {
        code.forEach(Elem => {
          Elem.style.setProperty('color', color2, 'important');
          Elem.style.setProperty('background-color', color1, 'important');
        });
      }
      const ul = document.querySelectorAll("ul");
      if (ul != null) {
        ul.forEach(Elem => {
          Elem.style.setProperty('color', color2, 'important');
          Elem.style.setProperty('background-color', color1, 'important');
        });
      }
      const ol = document.querySelectorAll("ol");
      if (ol != null) {
        ol.forEach(Elem => {
          Elem.style.setProperty('color', color2, 'important');
          Elem.style.setProperty('background-color', color1, 'important');
        });
      };
      const li = document.querySelectorAll("li");
      if (li != null) {
        li.forEach(Elem => {
          Elem.style.setProperty('color', color2, 'important');
          Elem.style.setProperty('background-color', color1, 'important');
        });
      };
      const article = document.querySelectorAll("article");
      if (article != null) {

        article.forEach(Elem => {
          Elem.style.setProperty('color', color2, 'important');
          Elem.style.setProperty('background-color', color1, 'important');
        });
      };
      const cite = document.querySelectorAll("cite");
      if (cite != null) {

        cite.forEach(Elem => {
          Elem.style.setProperty('color', color2, 'important');
          Elem.style.setProperty('background-color', color1, 'important');
        });
      };
      const header = document.querySelectorAll("header");
      if (header != null) {

        header.forEach(Elem => {
          Elem.style.setProperty('color', color2, 'important');
          Elem.style.setProperty('background-color', color1, 'important');
        });
      };
      const section = document.querySelectorAll("section");
      if (section != null) {

        section.forEach(Elem => {
          Elem.style.setProperty('color', color2, 'important');
          Elem.style.setProperty('background-color', color1, 'important');
        });
      };


      const rel = document.querySelectorAll("relative-time");
      //for github
      if (rel != null) {

        rel.forEach(Elem => {
          Elem.style.setProperty('color', color2, 'important');
          Elem.style.setProperty('background-color', color1, 'important');
        });
      };

      //this just fixes some necessary styling on github, BOO GITHUB. using important styles on their website. 
      const github1 = document.querySelectorAll('.color-fg-muted');
      if (github1 != null) {

        for (let i = 0; i < github1.length; i++) {
          github1[i].classList.remove("color-fg-muted");

        };
      };

      const span = document.querySelectorAll('span');
      if (span != null) {

        span.forEach(element => {
          element.style.setProperty('color', color2, 'important');
          element.style.setProperty('background-color', color1, 'important');
        });
      }

      // const sheddit1 = document.querySelectorAll('reddit-recent-pages');
      // if (sheddit1 != null) {

      //   sheddit1.forEach(element => {
      //     element.style.setProperty('color', color2, 'important');
      //     element.style.setProperty('background-color', color1, 'important');
      //   });
      // }

      const summary2 = document.querySelectorAll('summary');
      if (summary2 != null) {

        summary2.forEach(summary23 => {
          summary23.style.setProperty('color', color2, 'important');
          summary23.style.setProperty('background-color', color1, 'important');
        });
      }
      const a2 = document.querySelectorAll('a');
      if (a2 != null) {

        a2.forEach(a23 => {
          a23.style.setProperty('color', color2, 'important');
        });
      }
      const div2 = document.querySelectorAll('div');
      if (div2 != null) {

        div2.forEach(div23 => {
          div23.style.setProperty('color', color2, 'important');
        });
      }

      const li2 = document.querySelectorAll('li');
      if (li2 != null) {

        li2.forEach(liElem => {
          liElem.style.setProperty('color', color2, 'important');
          liElem.style.setProperty('background-color', color1, 'important');
        });
      }
      const button2 = document.querySelectorAll('button');
      if (button2 != null) {

        button2.forEach(buttonElem => {
          buttonElem.style.setProperty('color', color2, 'important');
          buttonElem.style.setProperty('background-color', color1, 'important');
        });
      }
      const yt1 = document.querySelectorAll('yt-formatted-string');
      if (yt1 != null) {

        yt1.forEach(yt1Elem => {
          yt1Elem.style.setProperty('color', color2, 'important');
          yt1Elem.style.setProperty('background-color', color1, 'important');
        });
      }





      const h1 = document.querySelectorAll('h1');
      if (h1 != null) {

        h1.forEach(h1Elem => {
          h1Elem.style.setProperty('color', color2, 'important');
          h1Elem.style.setProperty('background-color', color1, 'important');
        });
      }


      const pre = document.querySelectorAll("pre");
      if (pre != null) {

        pre.forEach(Elem => {
          Elem.style.setProperty('color', color2, 'important');
          Elem.style.setProperty('background-color', color1, 'important');
        });
      }
      const nobr = document.querySelectorAll("nobr");
      if (nobr != null) {
        nobr.forEach(Elem => {
          Elem.style.setProperty('color', color2, 'important');
          Elem.style.setProperty('background-color', color1, 'important');
        });
      };


      const resultstats = document.querySelector("#result-stats");
      if (resultstats != null) {
        resultstats.style.setProperty('color', color2, 'important');
        resultstats.style.setProperty('background-color', color1, 'important');

      }

      const em = document.querySelectorAll("em");
      if (em != null) {
        em.forEach(Elem => {
          Elem.style.setProperty('color', color2, 'important');
          Elem.style.setProperty('background-color', color1, 'important');
        });
      };
      const p = document.querySelectorAll("p");
      if (p != null) {
        p.forEach(Elem => {
          Elem.style.setProperty('color', color2, 'important');
          Elem.style.setProperty('background-color', color1, 'important');
        });
      }
      const strong = document.querySelectorAll("strong");
      if (strong != null) {
        strong.forEach(Elem => {
          Elem.style.setProperty('color', color2, 'important');
          Elem.style.setProperty('background-color', color1, 'important');
        });
      };


      const h2 = document.querySelectorAll("h2");

      const h3 = document.querySelectorAll("h3");

      const h4 = document.querySelectorAll("h4");

      const h5 = document.querySelectorAll("h5");

      const h6 = document.querySelectorAll("h6");
      if (h2 != null) {
        h2.forEach(Elem => {
          Elem.style.setProperty('color', color2, 'important');
          Elem.style.setProperty('background-color', color1, 'important');
        });
      }
      if (h3 != null) {
        h3.forEach(Elem => {
          Elem.style.setProperty('color', color2, 'important');
          Elem.style.setProperty('background-color', color1, 'important');
        });
      }
      if (h4 != null) {
        h4.forEach(Elem => {
          Elem.style.setProperty('color', color2, 'important');
          Elem.style.setProperty('background-color', color1, 'important');
        });
      }
      if (h5 != null) {
        h5.forEach(Elem => {
          Elem.style.setProperty('color', color2, 'important');
          Elem.style.setProperty('background-color', color1, 'important');
        });
      }
      if (h6 != null) {
        h6.forEach(Elem => {
          Elem.style.setProperty('color', color2, 'important');
          Elem.style.setProperty('background-color', color1, 'important');
        });

      }





    });


  }
  catch (error) {

    console.error(error)



  }
};



function observeSearchResults() {
  // identify an element to observe
  const elementToObserve = document.body

  // create a new instance of `MutationObserver` named `observer`,
  // passing it a callback function
  const observer = new MutationObserver(() => {
    color()
  });

  // call `observe()` on that MutationObserver instance,
  // passing it the element to observe, and the options object
  observer.observe(elementToObserve, { subtree: true, childList: true });



}

// Function to create and configure the MutationObserver


// Call the function to start observing the search results

observeSearchResults();



document.addEventListener('DOMContentLoaded', function () {

  color()

})


// } catch (error) {
//   console.error(error)
// }
