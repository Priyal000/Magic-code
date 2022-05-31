var app = Vue.createApp({
    data() {
      return {
        FirstName: "",
        LastName: "",
        headingTag: "",
        headingTag2: "",
        paragraph: "you are a good learner",
        ParaTag: "",
        ParaTag2: "",
        SpanTag: "",
        SpanTag2: "",
        span: "you are doing good",
        inputDisplay: "",
        inputbackGroundColor: "",
        inputColor: "",
        inputFontSize: "",
      };
    },
    methods: {
      ShowNav() {
        document.getElementById("nav1").style.display = "block";
        document.getElementById("nav2").style.display = "block";
        document.getElementById("nav3").style.display = "block";
      },
      showHTML() {
        document.getElementById("secondPage").style.display = "block";
        document.getElementById("thirdPage").style.display = "none";
        document.getElementById("fourthPage").style.display = "none";
      },
      showCSS() {
        document.getElementById("thirdPage").style.display = "block";
        document.getElementById("secondPage").style.display = "none";
        document.getElementById("fourthPage").style.display = "none";
      },
      showJS() {
          document.getElementById("fourthPage").style.display = "block";
          document.getElementById("secontPage").style.display = "none";
          document.getElementById("thirdPage").style.display = "none";
      },
      hideHTMLPage() {
        document.getElementById("HTMLPAGE").style.display = "none";
      },
    },
  });
  
  app.mount("#allLinks");
  