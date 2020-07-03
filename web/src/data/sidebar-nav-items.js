export default function () {
  return [
    {
      title: "Progresso",
      // to: "/blog-overview",
      to: "/progress",
      htmlBefore: '<i class="material-icons">leaderboard</i>',
      htmlAfter: "",
    },
    {
      title: "Treinamentos",
      htmlBefore: '<i class="material-icons">engineering</i>',
      to: "/courses",
      // to: "/#",
    },
    {
      title: "Manuais",
      htmlBefore: '<i class="material-icons">menu_book</i>',
      // to: "/add-new-post",
      to: "/manuals",
    },
    {
      title: "Social",
      htmlBefore: '<i class="material-icons">people</i>',
      to: "/user-profile",
      // to: "/#",
    },
  ];
}
