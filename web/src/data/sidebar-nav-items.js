export default function () {
  return [
    {
      title: "Game",
      // to: "/blog-overview",
      to: "/errors",
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
      to: "/#",
    },
    // {
    //   title: "Forms & Components",
    //   htmlBefore: '<i class="material-icons">view_module</i>',
    //   // to: "/components-overview",
    //   to: "/#",
    // },
    // {
    //   title: "Tables",
    //   htmlBefore: '<i class="material-icons">table_chart</i>',
    //   // to: "/tables",
    //   to: "/#",
    // },
    {
      title: "Social",
      htmlBefore: '<i class="material-icons">people</i>',
      to: "/user-profile",
      // to: "/#",
    },
  ];
}
