function validateForm() {
   
    let ntex;
    let etex;
    let ptex;
    let ltex;
    let mtex;

  let name = document.forms["messageForm"]["name"].value;
  let email = document.forms["messageForm"]["email"].value;
  let phone = document.forms["messageForm"]["phone"].value;

  let location = document.forms["messageForm"]["location"].value;
  let message = document.forms["messageForm"]["message"].value;



  if (name == "") {
    ntex = "Name must be filled out";
      document.getElementById('ndemo').innerHTML = ntex;

  }
  if (email == "") {
    etex = "email must be filled out";
      document.getElementById('edemo').innerHTML = etex;

  }
   if (phone == "") {
    ptex = "phone must be filled out";
      document.getElementById('pdemo').innerHTML = ptex;

  }
  if (location == "") {
    ltex = "location must be filled out";
      document.getElementById('ldemo').innerHTML = ltex;

  }
  if (message == "") {
    mtex = "message must be filled out";
      document.getElementById('mdemo').innerHTML = mtex;

  }

}


// ==================== blog ============================
function blog() {
   
    let nametex;
    let titletex;
    let datetex;
    let categorytex;
    let detailstex;

  let name = document.forms["blogForm"]["name"].value;
  let title = document.forms["blogForm"]["title"].value;
  let date = document.forms["blogForm"]["date"].value;

  let category = document.forms["blogForm"]["category"].value;
  let details = document.forms["blogForm"]["details"].value;



  
  if (name == "") {
    nametex = "Name must be filled out";
      document.getElementById('name').innerHTML = nametex;

  }
  if (title == "") {
  titletex = "title must be filled out";
      document.getElementById('title').innerHTML =titletex;

  }
   if (date == "") {
    datetex = "date must be filled out";
      document.getElementById('date').innerHTML = datetex;

  }
  if (category == "") {
    categorytex = "category must be filled out";
      document.getElementById('category').innerHTML = categorytex;

  }
  if (details == "") {
    detailstex = "details must be filled out";
      document.getElementById('detail').innerHTML = detailstex;

  }

  if(  nametex != "" && titletex != "" && datetex != "" && categorytex != "" && detailstex != "" )
  {
      let blog = {
        name:name,
        title: title,
        date: date,
        category: category,
        details: details
  };
   console.log(blog);

     if(localStorage.getItem('blogs') === null)
    {
      let blogs = [];
      blogs.push(blog);
      localStorage.setItem('blogs', JSON.stringify(blogs));
    }
  else{
    let blogs = JSON.parse(localStorage.getItem('blogs'));
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }

  getBlogs();



  }

}

//  ========================== get blogs ---=======================
  function getBlogs()
{
   let blogs = JSON.parse(localStorage.getItem('blogs'));
  console.log(blogs);
  let blogDiv = document.getElementById('blogz');
  blogDiv.innerHTML="";
  for(var a=0; a< blogs.length; a++)

  {
  let bname = blogs[a].name;
  let btitle = blogs[a].title;
  let bdate = blogs[a].date;

  let bcategory = blogs[a].category;
  let bdetails = blogs[a].details;

blogDiv.innerHTML+= 
                    '<div class="blog-col">'+
                       '<div class="blog-date">'+
                           '<p>'+ bdate +'</p>'+
                      '</div>'+
                        '<div class="blog-img">'+
                            '<img src="images/blog-img01.jpg" alt="blog-img01" " class="img-fluid">'+
                        '</div>'+
                        '<div class="blog-txt">'+
                            '<h4>Code Editor</h4>'+
                            '<h3>'+
                                '<a href="blog-details.html">'+btitle+'</a>'+
                            '</h3>'+
                            '<p>'+bdetails+'.</p>'+
                            '<a href="blog-details.html" class="read-more">Read More...</a>'+
                        '</div>'+
                    '</div>'+
                '</div>';
    
  }
}