let pokemonRepository = (function () {
  let t = [];
  function e() {
    return t;
  }
  function n(e) {
    "object" == typeof e && t.push(e);
  }
  function i(t) {
    return fetch(t.details)
      .then(function (t) {
        return t.json();
      })
      .then(function (e) {
        (t.imageUrl = e.sprites.front_default),
          (t.height = e.height),
          (t.types = e.types);
      })
      .catch(function (t) {
        console.error(t);
      });
  }
  function a(t) {
    i(t).then(function () {
      o(t);
    });
  }
  function o(t) {
    var e;
    let n = $(".modal-body"),
      i = $(".modal-title");
    i.empty(), n.empty();
    let a = $("<h1>" + t.name + "<h1>");
    (a.innerText = t.name), i.append(a);
    let o = $('<img class="img" style= width:33%>');
    o.attr("src", t.imageUrl), n.append(o);
    let s = $("<p>height : " + t.height + "</p>");
    (s.innerText = "height: " + t.height), n.append(s);
    let l = document.createElement("p");
    (l.innerText =
      "type: " +
      (2 === (e = t).types.length
        ? e.types[0].type.name + ", " + e.types[1].type.name
        : e.types[0].type.name)),
      n.append(l);
  }
  return {
    getAll: e,
    add: n,
    addListItem: function t(e) {
      let n = document.querySelector(".row"),
        i = document.createElement("li");
      i.classList.add("list-group-item"),
        i.classList.add("col-12"),
        i.classList.add("col-md-4");
      let o = document.createElement("button");
      o.classList.add("btn"),
        o.classList.add("btn-block"),
        o.setAttribute("data-toggle", "modal"),
        o.setAttribute("data-target", "#modal-container"),
        (o.innerText = e.name),
        o.classList.add("button-class"),
        i.appendChild(o),
        n.appendChild(i),
        o.addEventListener("click", function () {
          a(e);
        });
    },
    loadList: function t() {
      return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
        .then(function (t) {
          return t.json();
        })
        .then(function (t) {
          t.results.forEach(function (t) {
            n({ name: t.name, details: t.url });
          });
        })
        .catch(function (t) {
          console.error(t);
        });
    },
    loadDetails: i,
    showModal: o,
    showDetails: a,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (t) {
    pokemonRepository.addListItem(t);
  });
});
let form = document.querySelector(".form-inline"),
  input = document.createElement("input");
function searchFunction() {
  var t, e, n, i, a;
  for (
    n = 0,
      t = input.value.toUpperCase(),
      e = document.getElementsByClassName("list-group-item");
    n < e.length;
    n++
  )
    (i = (a = e[n].getElementsByClassName("button-class")[0]).innerText)
      .toUpperCase()
      .indexOf(t) > -1
      ? (e[n].style.display = "")
      : (e[n].style.display = "none");
}
input.classList.add("form-control"),
  input.classList.add("mr-2"),
  input.classList.add("my-1"),
  input.setAttribute("type", "text"),
  input.setAttribute("placeholder", "Search"),
  input.setAttribute("aria-label", "Search"),
  form.appendChild(input),
  input.addEventListener("keyup", searchFunction);
