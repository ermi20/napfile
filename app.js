const menu = [{
        id: 1,
        title: "Carbonara",
        category: "PASTA",
        price: 10.99,
        img: "./images/food4.jpg",
        desc: `(αυγα, πεκορινο ρομανο, φρεσκοτριμμενο πιπερι)`,
    },
    {
        id: 2,
        title: "Cacio e pepe",
        category: "PASTA",
        price: 13.99,
        img: "./images/pic4.jpg",
        desc: ` (πεκορινο ρομανο, φρεσκοτριμμενο πιπερι) 10 ευρω
Με φρεσκια καλοκαιρινη τρουφα `,
    },
    {
        id: 3,
        title: "Cacio e pepe",
        category: "PASTA",
        price: 9.99,
        img: "./images/sweet1.jpg",
        desc: `(πεκορινο ρομανο, φρεσκοτριμμενο πιπερι) 10 ευρω`,
    },
    {
        id: 4,
        title: "Pasta ai 3 pomodori",
        category: "PASTA",
        price: 20.99,
        img: "./images/pic3.jpg",
        desc: `(3 ειδη ντοματας μαγειρεμενα με 3 διαφορετικους τροπους, grana padano, βασιλικος) `,
    },
    {
        id: 5,
        title: " Lasagne  Napul’e ",
        category: "PASTA",
        price: 20.99,
        img: "./images/pic3.jpg",
        desc: ` η &nbsp; μυστικη &nbsp; μας &nbsp; συνταγη `,
    },
    {
        id: 6,
        title: "Tagliolini Amalfi",
        category: "PASTA",
        price: 10.99,
        img: "./images/sweet2.jpg ",
        desc: `(κατσικισιο τυρι, λεμονι, μμυρωδικα)`,
    },
    {
        id: 7,
        title: "Pesto di rucola",
        category: "PASTA",
        price: 11.99,
        img: "./images/pic5.jpg",
        desc: ` (ροκα, κασιους, grana, pancetta) `,
    },
    {
        id: 8,
        title: "Pesto di pistacchi",
        category: "PASTA",
        price: 12.99,
        img: "./images/food3.jpg",
        desc: ` (φυστικι Αιγινης, grana padano)  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "drinks",
        price: 16.99,
        img: "./images/drink1.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "bison steak",
        category: "drinks",
        price: 22.99,
        img: "./images/drink1.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },

    {
        id: 11,
        title: "Nerano",
        category: "PASTA",
        price: 11.99,
        img: "./images/pic5.jpg",
        desc: `  (κολοκυθακια, βασιλικος, provolone del Monaco)`,
    },
    {
        id: 12,
        title: "Linguine alle cozze",
        category: "PASTA",
        price: 12.99,
        img: "./images/food3.jpg",
        desc: `(λινγκουινι με μυδια αχνιστα) 14 ευρω
Spaghetti ai ricci (αχινομακαροναδα)  `,
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
              <h4 class="price">$${item.price}</h4>
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