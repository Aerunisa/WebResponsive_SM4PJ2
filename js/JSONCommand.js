
$.getJSON("data/donation.json", function(data){     
    $.each(data, function(key, val){
        $('#donation').append(                
        '<div class="col-md-4">'+
            '<div class="cause shadow-sm">'+
            '<a href="'+val.id+'" class="cause-link d-block">'+
                '<img src="images/'+val.img+'" alt="Image" class="img-fluid">'+
                '<div class="custom-progress-wrap">'+
                '<span class="caption">'+val.caption+'</span>'+
                '<div class="custom-progress-inner">'+
                    '<div class="custom-progress '+val.bg+'" style="width: '+val.percent+';"></div>'+
                '</div>'+
                '</div>'+
            '</a>'+
            '<div class="px-3 pt-3 border-top-0 border border ">'+
                '<span class="'+val.badgecolor+' py-1 small px-2 rounded mb-3 d-inline-block">'+val.badge+'</span>'+
                '<h3 class="mb-4"><a href="#">'+val.judul+'</a></h3>'+
                '<div class="border-top border-light border-bottom py-2 d-flex">'+
                '<div>Donated</div>'+
                '<div class="ml-auto"><strong class="text-primary">'+val.jumlah+'</strong></div>'+
                '</div>'+
                '<div class="border-top border-light border-bottom py-2 d-flex">'+
                '<button type="button" class="btn btn-block btn-primary text-white py-3 px-5 rounded-0"  >'+
                    '<a href="'+val.donasi+'" class="text-white">Donasi Sekarang</a></button>'+
                '</div>'+
                '<div class="py-4">'+
                '<div class="d-flex align-items-center">'+
                    '<img src="images/'+val.imgpeople+'" alt="Image" class="rounded-circle mr-3" width="50">'+
                    '<div class="">'+val.fundaiser+'</div>'+
                '</div>'+
                '</div>'+
            '</div>'+
            '</div>'+
        '</div>'
        );               
     })
});

$.getJSON("data/appear.json", function(data){     
    $.each(data, function(key, val){
        $('#homedonate').append(                
        '<div class="col-md-4">'+
            '<div class="cause shadow-sm">'+
            '<a href="'+val.id+'" class="cause-link d-block">'+
                '<img src="images/'+val.img+'" alt="Image" class="img-fluid">'+
                '<div class="custom-progress-wrap">'+
                '<span class="caption">'+val.caption+'</span>'+
                '<div class="custom-progress-inner">'+
                    '<div class="custom-progress '+val.bg+'" style="width: '+val.percent+';"></div>'+
                '</div>'+
                '</div>'+
            '</a>'+
            '<div class="px-3 pt-3 border-top-0 border border ">'+
                '<span class="'+val.badgecolor+' py-1 small px-2 rounded mb-3 d-inline-block">'+val.badge+'</span>'+
                '<h3 class="mb-4"><a href="'+val.id+'">'+val.judul+'</a></h3>'+
                '<div class="border-top border-light border-bottom py-2 d-flex">'+
                '<div>Donated</div>'+
                '<div class="ml-auto"><strong class="text-primary">'+val.jumlah+'</strong></div>'+
                '</div>'+
                '<div class="border-top border-light border-bottom py-2 d-flex">'+
                '<button href="'+val.donasi+'" type="button"  class="btn btn-block btn-primary text-white py-3 px-5 rounded-0"  >'+
                    '<a href="'+val.donasi+'" class="text-white">Donasi Sekarang</a></button>'+
                '</div>'+
                '<div class="py-4">'+
                '<div class="d-flex align-items-center">'+
                    '<img src="images/'+val.imgpeople+'" alt="Image" class="rounded-circle mr-3" width="50">'+
                    '<div class="">'+val.fundaiser+'</div>'+
                '</div>'+
                '</div>'+
            '</div>'+
            '</div>'+
        '</div>'
        );           
    })
});

$.getJSON("data/blog.json", function(data){     
    $.each(data, function(key, val){
        $('#blogjson').append(                
            '<div class="col-md-6">'+
            '<div class="event-29191 mb-5">'+
              '<a href="'+val.alamat+'" class="d-block mb-3"><img src="images/'+val.img+'" alt="Image" class="img-fluid rounded"></a>'+
              '<div class="px-3 d-flex">'+
                '<div class="bg-primary p-3 d-inline-block text-center rounded mr-4 date">'+
                  '<span class="text-white h3 m-0 d-block">'+val.tanggal+'</span>'+
                  '<span class="text-white small">'+val.bultah+'</span>'+
                '</div>'+
                '<div>'+
                  '<div class="mb-3">'+
                    '<span class="mr-3"> <span class="icon-bookmark mr-2 text-muted"></span><a href="#">Cause</a>, <a href="#">Event</a></span>'+
                    '<span> <span class="icon-person mr-2 text-muted"></span>'+val.person+'</span>'+
                  '</div>'+
                  '<h3><a href="'+val.alamat+'">'+val.kalimat+'</a></h3>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'
        );           
    })
});
      
$.getJSON("data/pengunna.json", function(data){     
    $.each(data, function(key, val){
        $('#isiLI').append(                
          '<li class="comment">'+
            '<div class="vcard bio">'+
              '<img src="images/'+val.profile+'" alt="Profile">'+
            '</div>'+
            '<div class="comment-body">'+
              '<h3>'+val.nama+'</h3>'+
              '<div class="meta">'+val.datetime+'</div>'+
              '<p>'+val.lineA+'</p>'+
              '<p>'+val.lineB+'</p>'+
            '</div>'+
          '</li>'
        );           
    })
});
      