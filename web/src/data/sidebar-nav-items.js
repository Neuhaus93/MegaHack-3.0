export default function () {
  return [
    {
      title: "Blog Dashboard",
      // to: "/blog-overview",
      to: "/errors",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: "",
    },
    {
      title: "Cursos",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/courses",
      // to: "/#",
    },
    {
      title: "Add New Post",
      htmlBefore: '<i class="material-icons">note_add</i>',
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
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile",
      // to: "/#",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      // to: "/errors",
      to: "/#",
    },
  ];
}
