$(function () {
  $("#send").submit(function () {
    $.ajax({
      url: '/messages/send/',
      data: $("#send").serialize(),
      cache: false,
      type: 'post',
      success: function (data) {
      var d=data.replace(/</g,"&lt;");
        var c=d.match(/[0-9]+/);
        var f=c[0]-10;
        /*for(var a=10;;a++)
        {   if(d.charAt(a)==" "){break;}
            x=x.concat(d.charAt(a));}
           x=x.slice(0,x.length-1);*/
        //$(".send-message").before(c[0]);
        //$(".send-message").before(String(k));
        //$(".send-message").before("<pre>"+data.replace(/</g,"&lt;")+"</pre>");
        $(".send-message").before(data);
        $("input[name='message']").val('');
        $("input[name='message']").focus();

        //location.href=$("a.active").attr("href");
        $("[pkid]").each(function(){if (c[0]-$(this).attr("pkid")>12) {$(this).hide();$("#scroll").toggle();}});
      }
    });
    return false;
  });

  $("a.delete").click(function(){

    var li = $(this).closest(".hover");
    var Id = $(li).attr("pkid");
    var csrf = $(li).attr("csrf");



    $.ajax({
      url: '/messages/delete/',
      data: {
        'option':"1",
        'Id': Id,
        'csrfmiddlewaretoken': csrf
      },
      type: 'post',
      cache: false,
      success: function (data) {
        $(li).fadeOut(500, function () {
          $(li).remove();
        });
      }
    });

    });

    $("a.deleteboth").click(function(){

    var li = $(this).closest(".hover");
    var Id = $(li).attr("pkid");
    var csrf = $(li).attr("csrf");


    $.ajax({
      url: '/messages/delete/',
      data: {
        'Id': Id,
        'option':"2",
        'csrfmiddlewaretoken': csrf
      },
      type: 'post',
      cache: false,
      success: function (data) {
        $(li).fadeOut(500, function () {
          $(li).remove();
        });
      }
    });

    });

    $("button.delete_thread").click(function(){


    var ul = $(this).closest("ul");
    var messages = $(ul).attr("messages");
    var csrf = $(ul).attr("csrf");


    $.ajax({
      url: '/messages/delete_thread/',
      data: {
        'messages': messages,
        'csrfmiddlewaretoken': csrf
      },
      type: 'post',
      cache: false,
      success: function (data) {
        $(ul).fadeOut(500, function () {
          $(ul).remove();
        });
      }
    });

    });


$("li").hover(function(){$(this).find("div.qwe").toggle();})

$("#scroll").click(function(){location.href=$("a.active").attr("href");})
   })
