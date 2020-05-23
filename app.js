const menu = [{
        id: 1,
        title: "Carbonara &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "PASTA",
        price: 11.00,
        img: "./images/food4.jpg",
        desc: `(αυγα, πεκορινο ρομανο, φρεσκοτριμμενο πιπερι)`,
    },
    {
        id: 2,
        title: "Cacio e pepe",
        category: "PASTA",
        price: 14.00,
        img: "./images/pic4.jpg",
        desc: ` (πεκορινο ρομανο, φρεσκοτριμμενο πιπερι) 
Με φρεσκια καλοκαιρινη τρουφα `,
    },
    {
        id: 3,
        title: "Cacio e pepe &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "PASTA",
        price: 10.00,
        img: "./images/sweet1.jpg",
        desc: `(πεκορινο ρομανο, φρεσκοτριμμενο πιπερι) 10 ευρω`,
    },
    {
        id: 4,
        title: "Pasta ai 3 pomodori &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "PASTA",
        price: 10.00,
        img: "./images/pic3.jpg",
        desc: `(3 ειδη ντοματας μαγειρεμενα με 3 διαφορετικους τροπους, grana padano, βασιλικος) `,
    },
    {
        id: 5,
        title: " Lasagne  Napul’e   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "PASTA",
        price: 10.00,
        img: "./images/pic3.jpg",
        desc: ` η &nbsp; μυστικη &nbsp; μας &nbsp; συνταγη&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `,
    },
    {
        id: 6,
        title: "Tagliolini Amalfi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "PASTA",
        price: 11.00,
        img: "./images/sweet2.jpg ",
        desc: `(κατσικισιο&nbsp;&nbsp;&nbsp; τυρι, λεμονι,&nbsp;&nbsp;&nbsp; μμυρωδικα)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
    },
    {
        id: 7,
        title: "Pesto di rucola  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "PASTA",
        price: 12.00,
        img: "./images/pic5.jpg",
        desc: ` (ροκα,&nbsp;&nbsp;&nbsp; κασιους,&nbsp;&nbsp;&nbsp; grana, pancetta)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `,
    },
    {
        id: 8,
        title: "Pesto di pistacchi  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "PASTA",
        price: 13.00,
        img: "./images/food3.jpg",
        desc: ` (φυστικι&nbsp;&nbsp;&nbsp; Αιγινης&nbsp;&nbsp;&nbsp;, grana &nbsp;&nbsp;&nbsp; padano)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  `,
    },
    {
        id: 9,
        title: "Apertas  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "DRINKS",
        price: 7.50,
        img: "./images/drink1.jpg",
        desc: ` (κιτρο, Aperol, πορτοκαλι)`,
    },
    {
        id: 10,
        title: "Cubotto  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "DRINKS",
        price: 7.50,
        img: "./images/drink1.jpg",
        desc: `(το ιταλικο cuba libre)`,
    },
    {
        id: 11,
        title: "Nerano &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ",
        category: "PASTA",
        price: 13.00,
        img: "./images/pic5.jpg",
        desc: `  (κολοκυθακια,&nbsp;&nbsp;&nbsp; βασιλικος,&nbsp;&nbsp;&nbsp; provolone&nbsp;&nbsp;&nbsp; del &nbsp;&nbsp;&nbsp;Monaco)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
    },
    {
        id: 12,
        title: "Linguine alle cozze  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "PASTA",
        price: 14.00,
        img: "./images/food3.jpg",
        desc: `(λινγκουινι με μυδια αχνιστα)   `,
    },
    {
        id: 13,
        title: "Aperol  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "DRINKS",
        price: 7.50,
        img: "./images/drink1.jpg",
        desc: `Spritz`,
    },
    {
        id: 14,
        title: "Negroni   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "DRINKS",
        price: 7.50,
        img: "./images/drink1.jpg",
        desc: ``,
    },
    {
        id: 15,
        title: "Wine by glass &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "DRINKS",
        price: 3.00,
        img: "./images/drink1.jpg",
        desc: `(μοσχοφιλερο, μαλαγουζια, cabernet/merlot)`,
    },
    {
        id: 16,
        title: "Birra italiana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "DRINKS",
        price: 3.50,
        img: "./images/drink1.jpg",
        desc: `(peroni, moretti 330ml)`,
    }, {
        id: 17,
        title: "Birra Moretti Rossa &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "DRINKS",
        price: 4.50,
        img: "./images/drink1.jpg",
        desc: `330ml`,
    },
    {
        id: 18,
        title: "Birra Moretti Toscana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "DRINKS",
        price: 6.00,
        img: "./images/drink1.jpg",
        desc: `330ml`,
    }, {
        id: 19,
        title: "Peroni Gran Riserva &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "DRINKS",
        price: 6.00,
        img: "./images/drink1.jpg",
        desc: `500ml`,
    },
    {
        id: 20,
        title: "Peroni Gran Riserva Rossa &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "DRINKS",
        price: 6.00,
        img: "./images/drink1.jpg",
        desc: `500ml`,
    },

    {
        id: 21,
        title: "Soft drink Coca cola/ Fanta/Sprite &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "DRINKS",
        price: 2.80,
        img: "./images/drink1.jpg",
        desc: `soft drinks`,
    }, {
        id: 22,
        title: " Εμφιαλωμενο νερο 1l  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: `DRINKS`,
        price: 2.00,
        img: "./images/drink1.jpg",
        desc: `1l`,
    },
    {
        id: 23,
        title: "Ανθρακουχο εμφιαλωμενο νερο Galvanina &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "DRINKS",
        price: 3.50,
        img: "./images/drink1.jpg",
        desc: `750ml`,
    },
    {
        id: 24,
        title: "Spaghetti ai ricci &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "PASTA",
        price: 3.50,
        img: "./images/drink1.jpg",
        desc: `(αχινομακαροναδα)`,
    },
    {
        id: 25,
        title: "Καλαθακι χωριατικο προζυμενιο ψωμι &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "ANTIPASTI",
        price: 2.00,
        img: "./images/drink1.jpg",
        desc: ``,
    },
    {
        id: 26,
        title: "Burrata Fritta &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "ANTIPASTI",
        price: 14.00,
        img: "./images/drink1.jpg",
        desc: `(μπουρατα μπουφαλα, μορταδελα, ζυμη πιτσας, σαλτσα ντοματας, πεκορινο, βασιλικος)`,
    },
    {
        id: 27,
        title: "Mozzarella di bufala &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "ANTIPASTI",
        price: 16.00,
        img: "./images/drink1.jpg",
        desc: `ripiena di parmigiana (μοτσαρελα μπουφαλα 500γρ γεμιστη με ψητες μελιτζανες,
σαλτσα ντοματας, παρμεζανα)`,
    },

    {
        id: 28,
        title: "Panzanella &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "ANTIPASTI",
        price: 12.00,
        img: "./images/drink1.jpg",
        desc: `(ντοματινια, burrata bufala, κρεμμυδι, χειροποιητα κρουτον, βασιλικος)`,
    }, {
        id: 29,
        title: " Insalata di vitello tonnato &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "ANTIPASTI",
        price: 13.00,
        img: "./images/drink1.jpg",
        desc: `(baby πρασινη σαλατα, ψητο μοσχαρακι γαλακτος, sauce τονου)`,
    },
    {
        id: 30,
        title: "Insalata di polpo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        category: "ANTIPASTI",
        price: 14.00,
        img: "./images/drink1.jpg",
        desc: `(χταποδι*, πατατες, σελερυ, μυρωδικα)`,
    },



];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function() {
    diplayMenuItems(menu);
    displayMenuButtons();
});

function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        // console.log(item);

        return `<article class="menu-item">
         
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">€${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(
        function(values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        }, ["all"]
    );
    const categoryBtns = categories
        .map(function(category) {
            return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            // console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                diplayMenuItems(menu);
            } else {
                diplayMenuItems(menuCategory);
            }
        });
    });
}